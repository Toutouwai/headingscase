# Headings Case

A plugin for CKEditor fields in ProcessWire CMS/CMF. Adds a toolbar button for changing the case of all headings or selected headings between [sentence case](https://en.wiktionary.org/wiki/sentence_case) and [title case](https://en.wiktionary.org/wiki/title_case).

This is useful when you are copy/pasting text from a document that has been supplied with an inconsistent or incorrect system of capitalisation.

## Installation

The plugin folder must be named "headingscase" – if needed, rename the folder to remove the "-master" suffix added by GitHub. Copy the "headingscase" folder to /site/modules/InputfieldCKEditor/plugins/

In the field settings for each CKEditor field that you want to activate the plugin for:

* Check the "headingscase" checkbox at Input > Plugins > Extra Plugins
* Add "HeadingsCase" at Input > CKEditor Settings > CKEditor Toolbar

## Usage

To change the case of all headings, click the toolbar button with no text selected in  CKEditor. The first click applies sentence case; the second click applies title case.

To change the case of a single heading, select all or part of the heading in CKEditor before clicking the toolbar button.

![](https://user-images.githubusercontent.com/1538852/28913812-6e007eba-788d-11e7-803a-ca22bbf538dd.gif)

There can be situations where the results need manual correction: proper names, acronyms, etc.

## Exceptions for small words

Certain short English prepositions and conjunctions (three letters or less) are excluded from capitalisation when title case is applied. Edit the `exceptions` array in the plugin source code if you want to customise this list of exceptions.
