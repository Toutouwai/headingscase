/*
* Headings Case plugin
*
* @author Robin Sallis: https://github.com/Toutouwai/headingscase
* @version 0.0.1
*/

CKEDITOR.plugins.add( 'headingscase', {
	icons: 'headingscase',
	hidpi: true,
	init: function( editor ) {
		editor.addCommand( 'headingsCase', {
			exec: function( editor ) {
				var title_case = false;
				var body = editor.document.getBody();
				if(body.hasClass('sentence-case')) {
					title_case = true;
					body.removeClass('sentence-case');
				} else {
					body.addClass('sentence-case');
				}
				var selected = editor.getSelection();
				var selected_text = selected.getSelectedText();
				if(selected_text.length) {
					var start_element = selected.getStartElement();
					var element_text = start_element.getText();
					selected.selectElement(start_element);
					start_element.setText( changeCase(element_text, title_case) );
				} else {
					var heads = editor.document.find('h2, h3, h4, h5, h6');
					for(i = 0; i < heads.count(); i++) {
						var head = heads.getItem(i);
						var text = head.getText();
						head.setText( changeCase(text, title_case) );
					}
				}
			}
		});
		editor.ui.addButton( 'HeadingsCase', {
			label: 'Change case of selected heading / all headings',
			command: 'headingsCase'
		});
	}
});

function changeCase(string, title_case) {
	// For each sentence
	return string.replace(/.+?[\.\?\!](\s)|.+$/g, function(sentence) {
		// Make all letters lowercase apart from the first
		var out = sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase();
		if(title_case) {
			// For each word
			out = out.replace(/\w\S*/g, function(word) {
				// Short words that should always be lowercase (except at start of sentence)
				var exceptions = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'is', 'it', 'nor', 'of', 'on', 'or', 'per', 'so', 'the', 'to', 'via', 'vs', 'vs.', 'yet'];
				// Skip the exceptions
				if($.inArray(word, exceptions) !== -1) return word;
				// Make first letter uppercase
				return word.charAt(0).toUpperCase() + word.substr(1);
			});
		}
		return out;
	});
}
