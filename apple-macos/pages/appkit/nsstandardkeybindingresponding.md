> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstandardkeybindingresponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)

# NSStandardKeyBindingResponding (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.

## Declaration

```swift
@MainActor protocol NSStandardKeyBindingResponding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

[NSResponder](nsresponder.md) doesn’t implement any of these methods. [NSTextView](nstextview.md) implements a subset of them related to text editing. Your responder subclasses can implement any methods that make sense. You can create your own methods as well, but use these if the concepts map to functionality in your app. If your responder subclass is a view that’s key and uses key binding, and the user types a key sequence bound to a command not implemented in your class, nothing happens by default.

## Topics

### Responding to Key Commands

- [doCommand(by:)](nsstandardkeybindingresponding/docommand%28by_%29.md): Performs the given selector if possible.

### Inserting Content

- [insertBacktab(\_:)](nsstandardkeybindingresponding/insertbacktab%28__%29.md): Inserts a backtab character.
- [insertContainerBreak(\_:)](nsstandardkeybindingresponding/insertcontainerbreak%28__%29.md): Inserts a container break, such as a new page break.
- [insertDoubleQuoteIgnoringSubstitution(\_:)](nsstandardkeybindingresponding/insertdoublequoteignoringsubstitution%28__%29.md): Inserts a double quotation mark without substituting a curly quotation mark.
- [insertLineBreak(\_:)](nsstandardkeybindingresponding/insertlinebreak%28__%29.md): Inserts a line break character.
- [insertNewline(\_:)](nsstandardkeybindingresponding/insertnewline%28__%29.md): Inserts a newline character.
- [insertNewlineIgnoringFieldEditor(\_:)](nsstandardkeybindingresponding/insertnewlineignoringfieldeditor%28__%29.md): Inserts a newline character without invoking the field editor’s normal handling to end editing.
- [insertParagraphSeparator(\_:)](nsstandardkeybindingresponding/insertparagraphseparator%28__%29.md): Inserts a paragraph separator.
- [insertSingleQuoteIgnoringSubstitution(\_:)](nsstandardkeybindingresponding/insertsinglequoteignoringsubstitution%28__%29.md)
- [insertTab(\_:)](nsstandardkeybindingresponding/inserttab%28__%29.md): Inserts a tab character.
- [insertTabIgnoringFieldEditor(\_:)](nsstandardkeybindingresponding/inserttabignoringfieldeditor%28__%29.md)
- [insertText(\_:)](nsstandardkeybindingresponding/inserttext%28__%29.md): Inserts the text you specify.

### Deleting Content

- [deleteBackward(\_:)](nsstandardkeybindingresponding/deletebackward%28__%29.md): Deletes content moving backward from the current insertion point.
- [deleteBackwardByDecomposingPreviousCharacter(\_:)](nsstandardkeybindingresponding/deletebackwardbydecomposingpreviouscharacter%28__%29.md)
- [deleteForward(\_:)](nsstandardkeybindingresponding/deleteforward%28__%29.md)
- [deleteToBeginningOfLine(\_:)](nsstandardkeybindingresponding/deletetobeginningofline%28__%29.md): Deletes content from the insertion point to the beginning of the current line.
- [deleteToBeginningOfParagraph(\_:)](nsstandardkeybindingresponding/deletetobeginningofparagraph%28__%29.md): Deletes content from the insertion point to the beginning of the current paragraph.
- [deleteToEndOfLine(\_:)](nsstandardkeybindingresponding/deletetoendofline%28__%29.md): Deletes content from the insertion point to the end of the current line.
- [deleteToEndOfParagraph(\_:)](nsstandardkeybindingresponding/deletetoendofparagraph%28__%29.md): Deletes content from the insertion point to the end of the current paragraph.
- [deleteWordBackward(\_:)](nsstandardkeybindingresponding/deletewordbackward%28__%29.md): Deletes the word preceding the current insertion point.
- [deleteWordForward(\_:)](nsstandardkeybindingresponding/deletewordforward%28__%29.md)
- [yank(\_:)](nsstandardkeybindingresponding/yank%28__%29.md): Deletes the current selection, placing it in a temporary buffer, such as the Clipboard.

### Moving the Insertion Pointer

- [moveBackward(\_:)](nsstandardkeybindingresponding/movebackward%28__%29.md): Moves the insertion pointer backward in the current content.
- [moveDown(\_:)](nsstandardkeybindingresponding/movedown%28__%29.md): Moves the insertion pointer down in the current content.
- [moveForward(\_:)](nsstandardkeybindingresponding/moveforward%28__%29.md): Moves the insertion pointer forward in the current content.
- [moveLeft(\_:)](nsstandardkeybindingresponding/moveleft%28__%29.md): Moves the insertion pointer left in the current content.
- [moveRight(\_:)](nsstandardkeybindingresponding/moveright%28__%29.md): Moves the insertion pointer right in the current content.
- [moveUp(\_:)](nsstandardkeybindingresponding/moveup%28__%29.md): Moves the insertion pointer up in the current content.

### Modifying the Selection

- [moveBackwardAndModifySelection(\_:)](nsstandardkeybindingresponding/movebackwardandmodifyselection%28__%29.md): Extends the selection to include the content before the current selection.
- [moveDownAndModifySelection(\_:)](nsstandardkeybindingresponding/movedownandmodifyselection%28__%29.md): Extends the selection to include the content below the current selection.
- [moveForwardAndModifySelection(\_:)](nsstandardkeybindingresponding/moveforwardandmodifyselection%28__%29.md): Extends the selection to include the content after the current selection.
- [moveLeftAndModifySelection(\_:)](nsstandardkeybindingresponding/moveleftandmodifyselection%28__%29.md): Extends the selection to include the content to the left of the current selection.
- [moveRightAndModifySelection(\_:)](nsstandardkeybindingresponding/moverightandmodifyselection%28__%29.md): Extends the selection to include the content to the right of the current selection.
- [moveUpAndModifySelection(\_:)](nsstandardkeybindingresponding/moveupandmodifyselection%28__%29.md): Extends the selection to include the content above the current selection.

### Scrolling Content

- [scrollPageDown(\_:)](nsstandardkeybindingresponding/scrollpagedown%28__%29.md): Scrolls the content down by a page.
- [scrollPageUp(\_:)](nsstandardkeybindingresponding/scrollpageup%28__%29.md): Scrolls the content up by a page.
- [scrollLineDown(\_:)](nsstandardkeybindingresponding/scrolllinedown%28__%29.md): Scrolls the content down by a line.
- [scrollLineUp(\_:)](nsstandardkeybindingresponding/scrolllineup%28__%29.md): Scrolls the content up by a line.
- [scrollToBeginningOfDocument(\_:)](nsstandardkeybindingresponding/scrolltobeginningofdocument%28__%29.md): Scrolls the content to the beginning of the document.
- [scrollToEndOfDocument(\_:)](nsstandardkeybindingresponding/scrolltoendofdocument%28__%29.md): Scrolls the content to the end of the document.
- [pageDown(\_:)](nsstandardkeybindingresponding/pagedown%28__%29.md): Moves the visible content region down by a page.
- [pageUp(\_:)](nsstandardkeybindingresponding/pageup%28__%29.md): Moves the visible content region up by a page.
- [pageDownAndModifySelection(\_:)](nsstandardkeybindingresponding/pagedownandmodifyselection%28__%29.md): Moves the visible content region down by a page, and extends the current selection.
- [pageUpAndModifySelection(\_:)](nsstandardkeybindingresponding/pageupandmodifyselection%28__%29.md): Moves the visible content region up by a page, and extends the current selection.
- [centerSelectionInVisibleArea(\_:)](nsstandardkeybindingresponding/centerselectioninvisiblearea%28__%29.md): Moves the visible content region so the current selection is visually centered.

### Transposing Elements

- [transpose(\_:)](nsstandardkeybindingresponding/transpose%28__%29.md): Transposes the content around the current selection.
- [transposeWords(\_:)](nsstandardkeybindingresponding/transposewords%28__%29.md): Transposes the words around the current selection.

### Indenting Content

- [indent(\_:)](nsstandardkeybindingresponding/indent%28__%29.md): Indents the content at the current selection.

### Canceling Operations

- [cancelOperation(\_:)](nsstandardkeybindingresponding/canceloperation%28__%29.md): Cancels the current operation.

### Supporting QuickLook

- [quickLookPreviewItems(\_:)](nsstandardkeybindingresponding/quicklookpreviewitems%28__%29.md): Invokes QuickLook to preview the current selection.

### Supporting Writing Directions

- [makeBaseWritingDirectionLeftToRight(\_:)](nsstandardkeybindingresponding/makebasewritingdirectionlefttoright%28__%29.md)
- [makeBaseWritingDirectionNatural(\_:)](nsstandardkeybindingresponding/makebasewritingdirectionnatural%28__%29.md)
- [makeBaseWritingDirectionRightToLeft(\_:)](nsstandardkeybindingresponding/makebasewritingdirectionrighttoleft%28__%29.md)
- [makeTextWritingDirectionLeftToRight(\_:)](nsstandardkeybindingresponding/maketextwritingdirectionlefttoright%28__%29.md)
- [makeTextWritingDirectionNatural(\_:)](nsstandardkeybindingresponding/maketextwritingdirectionnatural%28__%29.md)
- [makeTextWritingDirectionRightToLeft(\_:)](nsstandardkeybindingresponding/maketextwritingdirectionrighttoleft%28__%29.md)

### Changing Capitalization

- [capitalizeWord(\_:)](nsstandardkeybindingresponding/capitalizeword%28__%29.md)
- [changeCaseOfLetter(\_:)](nsstandardkeybindingresponding/changecaseofletter%28__%29.md)
- [lowercaseWord(\_:)](nsstandardkeybindingresponding/lowercaseword%28__%29.md)
- [uppercaseWord(\_:)](nsstandardkeybindingresponding/uppercaseword%28__%29.md)

### Moving the Selection in Documents

- [moveToBeginningOfDocument(\_:)](nsstandardkeybindingresponding/movetobeginningofdocument%28__%29.md)
- [moveToBeginningOfDocumentAndModifySelection(\_:)](nsstandardkeybindingresponding/movetobeginningofdocumentandmodifyselection%28__%29.md)
- [moveToEndOfDocument(\_:)](nsstandardkeybindingresponding/movetoendofdocument%28__%29.md)
- [moveToEndOfDocumentAndModifySelection(\_:)](nsstandardkeybindingresponding/movetoendofdocumentandmodifyselection%28__%29.md)

### Moving the Selection in Paragraphs

- [moveParagraphBackwardAndModifySelection(\_:)](nsstandardkeybindingresponding/moveparagraphbackwardandmodifyselection%28__%29.md)
- [moveParagraphForwardAndModifySelection(\_:)](nsstandardkeybindingresponding/moveparagraphforwardandmodifyselection%28__%29.md)
- [moveToBeginningOfParagraph(\_:)](nsstandardkeybindingresponding/movetobeginningofparagraph%28__%29.md)
- [moveToBeginningOfParagraphAndModifySelection(\_:)](nsstandardkeybindingresponding/movetobeginningofparagraphandmodifyselection%28__%29.md)
- [moveToEndOfParagraph(\_:)](nsstandardkeybindingresponding/movetoendofparagraph%28__%29.md)
- [moveToEndOfParagraphAndModifySelection(\_:)](nsstandardkeybindingresponding/movetoendofparagraphandmodifyselection%28__%29.md)

### Moving the Selection in Lines of Text

- [moveToBeginningOfLine(\_:)](nsstandardkeybindingresponding/movetobeginningofline%28__%29.md)
- [moveToBeginningOfLineAndModifySelection(\_:)](nsstandardkeybindingresponding/movetobeginningoflineandmodifyselection%28__%29.md)
- [moveToEndOfLine(\_:)](nsstandardkeybindingresponding/movetoendofline%28__%29.md)
- [moveToEndOfLineAndModifySelection(\_:)](nsstandardkeybindingresponding/movetoendoflineandmodifyselection%28__%29.md)
- [moveToLeftEndOfLine(\_:)](nsstandardkeybindingresponding/movetoleftendofline%28__%29.md)
- [moveToLeftEndOfLineAndModifySelection(\_:)](nsstandardkeybindingresponding/movetoleftendoflineandmodifyselection%28__%29.md)
- [moveToRightEndOfLine(\_:)](nsstandardkeybindingresponding/movetorightendofline%28__%29.md)
- [moveToRightEndOfLineAndModifySelection(\_:)](nsstandardkeybindingresponding/movetorightendoflineandmodifyselection%28__%29.md)

### Changing the Selection

- [selectAll(\_:)](nsstandardkeybindingresponding/selectall%28__%29.md)
- [selectLine(\_:)](nsstandardkeybindingresponding/selectline%28__%29.md)
- [selectParagraph(\_:)](nsstandardkeybindingresponding/selectparagraph%28__%29.md)
- [selectWord(\_:)](nsstandardkeybindingresponding/selectword%28__%29.md)

### Supporting Marked Selections

- [setMark(\_:)](nsstandardkeybindingresponding/setmark%28__%29.md)
- [selectToMark(\_:)](nsstandardkeybindingresponding/selecttomark%28__%29.md)
- [deleteToMark(\_:)](nsstandardkeybindingresponding/deletetomark%28__%29.md)
- [swapWithMark(\_:)](nsstandardkeybindingresponding/swapwithmark%28__%29.md)

### Supporting Autocomplete

- [complete(\_:)](nsstandardkeybindingresponding/complete%28__%29.md)

### Moving the Selection by Word Boundaries

- [moveWordBackward(\_:)](nsstandardkeybindingresponding/movewordbackward%28__%29.md)
- [moveWordBackwardAndModifySelection(\_:)](nsstandardkeybindingresponding/movewordbackwardandmodifyselection%28__%29.md)
- [moveWordForward(\_:)](nsstandardkeybindingresponding/movewordforward%28__%29.md)
- [moveWordForwardAndModifySelection(\_:)](nsstandardkeybindingresponding/movewordforwardandmodifyselection%28__%29.md)
- [moveWordLeft(\_:)](nsstandardkeybindingresponding/movewordleft%28__%29.md)
- [moveWordLeftAndModifySelection(\_:)](nsstandardkeybindingresponding/movewordleftandmodifyselection%28__%29.md)
- [moveWordRight(\_:)](nsstandardkeybindingresponding/movewordright%28__%29.md)
- [moveWordRightAndModifySelection(\_:)](nsstandardkeybindingresponding/movewordrightandmodifyselection%28__%29.md)

### Instance Methods

- [showContextMenuForSelection(\_:)](nsstandardkeybindingresponding/showcontextmenuforselection%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSApplication](nsapplication.md)
- [NSBackgroundExtensionView](nsbackgroundextensionview.md)
- [NSBox](nsbox.md)
- [NSBrowser](nsbrowser.md)
- [NSButton](nsbutton.md)
- [NSClipView](nsclipview.md)
- [NSCollectionView](nscollectionview.md)
- [NSCollectionViewItem](nscollectionviewitem.md)
- [NSColorPanel](nscolorpanel.md)
- [NSColorWell](nscolorwell.md)
- [NSComboBox](nscombobox.md)
- [NSComboButton](nscombobutton.md)
- [NSControl](nscontrol.md)
- [NSDatePicker](nsdatepicker.md)
- [NSDrawer](nsdrawer.md)
- [NSFontPanel](nsfontpanel.md)
- [NSForm](nsform.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md)
- [NSGlassEffectView](nsglasseffectview.md)
- [NSGridView](nsgridview.md)
- [NSImageView](nsimageview.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSMatrix](nsmatrix.md)
- [NSOpenGLView](nsopenglview.md)
- [NSOpenPanel](nsopenpanel.md)
- [NSOutlineView](nsoutlineview.md)
- [NSPageController](nspagecontroller.md)
- [NSPanel](nspanel.md)
- [NSPathControl](nspathcontrol.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSPopover](nspopover.md)
- [NSPredicateEditor](nspredicateeditor.md)
- [NSProgressIndicator](nsprogressindicator.md)
- [NSResponder](nsresponder.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSRulerView](nsrulerview.md)
- [NSSavePanel](nssavepanel.md)
- [NSScrollView](nsscrollview.md)
- [NSScroller](nsscroller.md)
- [NSScrubber](nsscrubber.md)
- [NSScrubberArrangedView](nsscrubberarrangedview.md)
- [NSScrubberImageItemView](nsscrubberimageitemview.md)
- [NSScrubberItemView](nsscrubberitemview.md)
- [NSScrubberSelectionView](nsscrubberselectionview.md)
- [NSScrubberTextItemView](nsscrubbertextitemview.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSSlider](nsslider.md)
- [NSSplitView](nssplitview.md)
- [NSSplitViewController](nssplitviewcontroller.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSStackView](nsstackview.md)
- [NSStatusBarButton](nsstatusbarbutton.md)
- [NSStepper](nsstepper.md)
- [NSSwitch](nsswitch.md)
- [NSTabView](nstabview.md)
- [NSTabViewController](nstabviewcontroller.md)
- [NSTableCellView](nstablecellview.md)
- [NSTableHeaderView](nstableheaderview.md)
- [NSTableRowView](nstablerowview.md)
- [NSTableView](nstableview.md)
- [NSText](nstext.md)
- [NSTextField](nstextfield.md)
- [NSTextInsertionIndicator](nstextinsertionindicator.md)
- [NSTextView](nstextview.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)
- [NSTokenField](nstokenfield.md)
- [NSView](nsview.md)
- [NSViewController](nsviewcontroller.md)
- [NSVisualEffectView](nsvisualeffectview.md)
- [NSWindow](nswindow.md)
- [NSWindowController](nswindowcontroller.md)

## See Also

### Responding to Action Messages

- [supplementalTarget(forAction:sender:)](nsresponder/supplementaltarget%28foraction_sender_%29.md): Finds a target for an action method.
- [Action Messages](action-messages.md): Implement action messages in your first responders to handle common tasks.

# NSStandardKeyBindingResponding (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.

## Declaration

```objectivec
@protocol NSStandardKeyBindingResponding <NSObject>
```

<a id="overview"></a>

## Overview

[NSResponder](nsresponder.md) doesn’t implement any of these methods. [NSTextView](nstextview.md) implements a subset of them related to text editing. Your responder subclasses can implement any methods that make sense. You can create your own methods as well, but use these if the concepts map to functionality in your app. If your responder subclass is a view that’s key and uses key binding, and the user types a key sequence bound to a command not implemented in your class, nothing happens by default.

## Topics

### Responding to Key Commands

- [doCommandBySelector:](nsstandardkeybindingresponding/docommand%28by_%29.md): Performs the given selector if possible.

### Inserting Content

- [insertBacktab:](nsstandardkeybindingresponding/insertbacktab%28__%29.md): Inserts a backtab character.
- [insertContainerBreak:](nsstandardkeybindingresponding/insertcontainerbreak%28__%29.md): Inserts a container break, such as a new page break.
- [insertDoubleQuoteIgnoringSubstitution:](nsstandardkeybindingresponding/insertdoublequoteignoringsubstitution%28__%29.md): Inserts a double quotation mark without substituting a curly quotation mark.
- [insertLineBreak:](nsstandardkeybindingresponding/insertlinebreak%28__%29.md): Inserts a line break character.
- [insertNewline:](nsstandardkeybindingresponding/insertnewline%28__%29.md): Inserts a newline character.
- [insertNewlineIgnoringFieldEditor:](nsstandardkeybindingresponding/insertnewlineignoringfieldeditor%28__%29.md): Inserts a newline character without invoking the field editor’s normal handling to end editing.
- [insertParagraphSeparator:](nsstandardkeybindingresponding/insertparagraphseparator%28__%29.md): Inserts a paragraph separator.
- [insertSingleQuoteIgnoringSubstitution:](nsstandardkeybindingresponding/insertsinglequoteignoringsubstitution%28__%29.md)
- [insertTab:](nsstandardkeybindingresponding/inserttab%28__%29.md): Inserts a tab character.
- [insertTabIgnoringFieldEditor:](nsstandardkeybindingresponding/inserttabignoringfieldeditor%28__%29.md)
- [insertText:](nsstandardkeybindingresponding/inserttext%28__%29.md): Inserts the text you specify.

### Deleting Content

- [deleteBackward:](nsstandardkeybindingresponding/deletebackward%28__%29.md): Deletes content moving backward from the current insertion point.
- [deleteBackwardByDecomposingPreviousCharacter:](nsstandardkeybindingresponding/deletebackwardbydecomposingpreviouscharacter%28__%29.md)
- [deleteForward:](nsstandardkeybindingresponding/deleteforward%28__%29.md)
- [deleteToBeginningOfLine:](nsstandardkeybindingresponding/deletetobeginningofline%28__%29.md): Deletes content from the insertion point to the beginning of the current line.
- [deleteToBeginningOfParagraph:](nsstandardkeybindingresponding/deletetobeginningofparagraph%28__%29.md): Deletes content from the insertion point to the beginning of the current paragraph.
- [deleteToEndOfLine:](nsstandardkeybindingresponding/deletetoendofline%28__%29.md): Deletes content from the insertion point to the end of the current line.
- [deleteToEndOfParagraph:](nsstandardkeybindingresponding/deletetoendofparagraph%28__%29.md): Deletes content from the insertion point to the end of the current paragraph.
- [deleteWordBackward:](nsstandardkeybindingresponding/deletewordbackward%28__%29.md): Deletes the word preceding the current insertion point.
- [deleteWordForward:](nsstandardkeybindingresponding/deletewordforward%28__%29.md)
- [yank:](nsstandardkeybindingresponding/yank%28__%29.md): Deletes the current selection, placing it in a temporary buffer, such as the Clipboard.

### Moving the Insertion Pointer

- [moveBackward:](nsstandardkeybindingresponding/movebackward%28__%29.md): Moves the insertion pointer backward in the current content.
- [moveDown:](nsstandardkeybindingresponding/movedown%28__%29.md): Moves the insertion pointer down in the current content.
- [moveForward:](nsstandardkeybindingresponding/moveforward%28__%29.md): Moves the insertion pointer forward in the current content.
- [moveLeft:](nsstandardkeybindingresponding/moveleft%28__%29.md): Moves the insertion pointer left in the current content.
- [moveRight:](nsstandardkeybindingresponding/moveright%28__%29.md): Moves the insertion pointer right in the current content.
- [moveUp:](nsstandardkeybindingresponding/moveup%28__%29.md): Moves the insertion pointer up in the current content.

### Modifying the Selection

- [moveBackwardAndModifySelection:](nsstandardkeybindingresponding/movebackwardandmodifyselection%28__%29.md): Extends the selection to include the content before the current selection.
- [moveDownAndModifySelection:](nsstandardkeybindingresponding/movedownandmodifyselection%28__%29.md): Extends the selection to include the content below the current selection.
- [moveForwardAndModifySelection:](nsstandardkeybindingresponding/moveforwardandmodifyselection%28__%29.md): Extends the selection to include the content after the current selection.
- [moveLeftAndModifySelection:](nsstandardkeybindingresponding/moveleftandmodifyselection%28__%29.md): Extends the selection to include the content to the left of the current selection.
- [moveRightAndModifySelection:](nsstandardkeybindingresponding/moverightandmodifyselection%28__%29.md): Extends the selection to include the content to the right of the current selection.
- [moveUpAndModifySelection:](nsstandardkeybindingresponding/moveupandmodifyselection%28__%29.md): Extends the selection to include the content above the current selection.

### Scrolling Content

- [scrollPageDown:](nsstandardkeybindingresponding/scrollpagedown%28__%29.md): Scrolls the content down by a page.
- [scrollPageUp:](nsstandardkeybindingresponding/scrollpageup%28__%29.md): Scrolls the content up by a page.
- [scrollLineDown:](nsstandardkeybindingresponding/scrolllinedown%28__%29.md): Scrolls the content down by a line.
- [scrollLineUp:](nsstandardkeybindingresponding/scrolllineup%28__%29.md): Scrolls the content up by a line.
- [scrollToBeginningOfDocument:](nsstandardkeybindingresponding/scrolltobeginningofdocument%28__%29.md): Scrolls the content to the beginning of the document.
- [scrollToEndOfDocument:](nsstandardkeybindingresponding/scrolltoendofdocument%28__%29.md): Scrolls the content to the end of the document.
- [pageDown:](nsstandardkeybindingresponding/pagedown%28__%29.md): Moves the visible content region down by a page.
- [pageUp:](nsstandardkeybindingresponding/pageup%28__%29.md): Moves the visible content region up by a page.
- [pageDownAndModifySelection:](nsstandardkeybindingresponding/pagedownandmodifyselection%28__%29.md): Moves the visible content region down by a page, and extends the current selection.
- [pageUpAndModifySelection:](nsstandardkeybindingresponding/pageupandmodifyselection%28__%29.md): Moves the visible content region up by a page, and extends the current selection.
- [centerSelectionInVisibleArea:](nsstandardkeybindingresponding/centerselectioninvisiblearea%28__%29.md): Moves the visible content region so the current selection is visually centered.

### Transposing Elements

- [transpose:](nsstandardkeybindingresponding/transpose%28__%29.md): Transposes the content around the current selection.
- [transposeWords:](nsstandardkeybindingresponding/transposewords%28__%29.md): Transposes the words around the current selection.

### Indenting Content

- [indent:](nsstandardkeybindingresponding/indent%28__%29.md): Indents the content at the current selection.

### Canceling Operations

- [cancelOperation:](nsstandardkeybindingresponding/canceloperation%28__%29.md): Cancels the current operation.

### Supporting QuickLook

- [quickLookPreviewItems:](nsstandardkeybindingresponding/quicklookpreviewitems%28__%29.md): Invokes QuickLook to preview the current selection.

### Supporting Writing Directions

- [makeBaseWritingDirectionLeftToRight:](nsstandardkeybindingresponding/makebasewritingdirectionlefttoright%28__%29.md)
- [makeBaseWritingDirectionNatural:](nsstandardkeybindingresponding/makebasewritingdirectionnatural%28__%29.md)
- [makeBaseWritingDirectionRightToLeft:](nsstandardkeybindingresponding/makebasewritingdirectionrighttoleft%28__%29.md)
- [makeTextWritingDirectionLeftToRight:](nsstandardkeybindingresponding/maketextwritingdirectionlefttoright%28__%29.md)
- [makeTextWritingDirectionNatural:](nsstandardkeybindingresponding/maketextwritingdirectionnatural%28__%29.md)
- [makeTextWritingDirectionRightToLeft:](nsstandardkeybindingresponding/maketextwritingdirectionrighttoleft%28__%29.md)

### Changing Capitalization

- [capitalizeWord:](nsstandardkeybindingresponding/capitalizeword%28__%29.md)
- [changeCaseOfLetter:](nsstandardkeybindingresponding/changecaseofletter%28__%29.md)
- [lowercaseWord:](nsstandardkeybindingresponding/lowercaseword%28__%29.md)
- [uppercaseWord:](nsstandardkeybindingresponding/uppercaseword%28__%29.md)

### Moving the Selection in Documents

- [moveToBeginningOfDocument:](nsstandardkeybindingresponding/movetobeginningofdocument%28__%29.md)
- [moveToBeginningOfDocumentAndModifySelection:](nsstandardkeybindingresponding/movetobeginningofdocumentandmodifyselection%28__%29.md)
- [moveToEndOfDocument:](nsstandardkeybindingresponding/movetoendofdocument%28__%29.md)
- [moveToEndOfDocumentAndModifySelection:](nsstandardkeybindingresponding/movetoendofdocumentandmodifyselection%28__%29.md)

### Moving the Selection in Paragraphs

- [moveParagraphBackwardAndModifySelection:](nsstandardkeybindingresponding/moveparagraphbackwardandmodifyselection%28__%29.md)
- [moveParagraphForwardAndModifySelection:](nsstandardkeybindingresponding/moveparagraphforwardandmodifyselection%28__%29.md)
- [moveToBeginningOfParagraph:](nsstandardkeybindingresponding/movetobeginningofparagraph%28__%29.md)
- [moveToBeginningOfParagraphAndModifySelection:](nsstandardkeybindingresponding/movetobeginningofparagraphandmodifyselection%28__%29.md)
- [moveToEndOfParagraph:](nsstandardkeybindingresponding/movetoendofparagraph%28__%29.md)
- [moveToEndOfParagraphAndModifySelection:](nsstandardkeybindingresponding/movetoendofparagraphandmodifyselection%28__%29.md)

### Moving the Selection in Lines of Text

- [moveToBeginningOfLine:](nsstandardkeybindingresponding/movetobeginningofline%28__%29.md)
- [moveToBeginningOfLineAndModifySelection:](nsstandardkeybindingresponding/movetobeginningoflineandmodifyselection%28__%29.md)
- [moveToEndOfLine:](nsstandardkeybindingresponding/movetoendofline%28__%29.md)
- [moveToEndOfLineAndModifySelection:](nsstandardkeybindingresponding/movetoendoflineandmodifyselection%28__%29.md)
- [moveToLeftEndOfLine:](nsstandardkeybindingresponding/movetoleftendofline%28__%29.md)
- [moveToLeftEndOfLineAndModifySelection:](nsstandardkeybindingresponding/movetoleftendoflineandmodifyselection%28__%29.md)
- [moveToRightEndOfLine:](nsstandardkeybindingresponding/movetorightendofline%28__%29.md)
- [moveToRightEndOfLineAndModifySelection:](nsstandardkeybindingresponding/movetorightendoflineandmodifyselection%28__%29.md)

### Changing the Selection

- [selectAll:](nsstandardkeybindingresponding/selectall%28__%29.md)
- [selectLine:](nsstandardkeybindingresponding/selectline%28__%29.md)
- [selectParagraph:](nsstandardkeybindingresponding/selectparagraph%28__%29.md)
- [selectWord:](nsstandardkeybindingresponding/selectword%28__%29.md)

### Supporting Marked Selections

- [setMark:](nsstandardkeybindingresponding/setmark%28__%29.md)
- [selectToMark:](nsstandardkeybindingresponding/selecttomark%28__%29.md)
- [deleteToMark:](nsstandardkeybindingresponding/deletetomark%28__%29.md)
- [swapWithMark:](nsstandardkeybindingresponding/swapwithmark%28__%29.md)

### Supporting Autocomplete

- [complete:](nsstandardkeybindingresponding/complete%28__%29.md)

### Moving the Selection by Word Boundaries

- [moveWordBackward:](nsstandardkeybindingresponding/movewordbackward%28__%29.md)
- [moveWordBackwardAndModifySelection:](nsstandardkeybindingresponding/movewordbackwardandmodifyselection%28__%29.md)
- [moveWordForward:](nsstandardkeybindingresponding/movewordforward%28__%29.md)
- [moveWordForwardAndModifySelection:](nsstandardkeybindingresponding/movewordforwardandmodifyselection%28__%29.md)
- [moveWordLeft:](nsstandardkeybindingresponding/movewordleft%28__%29.md)
- [moveWordLeftAndModifySelection:](nsstandardkeybindingresponding/movewordleftandmodifyselection%28__%29.md)
- [moveWordRight:](nsstandardkeybindingresponding/movewordright%28__%29.md)
- [moveWordRightAndModifySelection:](nsstandardkeybindingresponding/movewordrightandmodifyselection%28__%29.md)

### Instance Methods

- [showContextMenuForSelection:](nsstandardkeybindingresponding/showcontextmenuforselection%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSResponder](nsresponder.md)
- [NSTextView](nstextview.md)

## See Also

### Responding to Action Messages

- [supplementalTargetForAction:sender:](nsresponder/supplementaltarget%28foraction_sender_%29.md): Finds a target for an action method.
- [Action Messages](action-messages.md): Implement action messages in your first responders to handle common tasks.
