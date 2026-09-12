> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate](https://developer.apple.com/documentation/appkit/nstextviewdelegate)

# NSTextViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

## Declaration

```swift
protocol NSTextViewDelegate : NSTextDelegate
```

## Topics

### Accessing Text System Objects

- [undoManager(for:)](nstextviewdelegate/undomanager%28for_%29.md): Returns the undo manager for the specified text view.

### Controlling Display

- [textView(\_:willDisplayToolTip:forCharacterAt:)](nstextviewdelegate/textview%28__willdisplaytooltip_forcharacterat_%29.md): Returns the actual tooltip to display.

### Supporting Quick Look

- [textView(\_:urlForContentsOf:at:)](nstextviewdelegate/textview%28__urlforcontentsof_at_%29.md): Returns a URL representing the document contents for a text attachment.

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](nstextviewdelegate/textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](nstextviewdelegate/textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection(\_:)](nstextviewdelegate/textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidates:forSelectedRange:)](nstextviewdelegate/textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](nstextviewdelegate/textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](nstextviewdelegate/textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](nstextviewdelegate/textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

### Managing the Pasteboard

- [textView(\_:writablePasteboardTypesFor:at:)](nstextviewdelegate/textview%28__writablepasteboardtypesfor_at_%29.md): Returns the writable pasteboard types for a given cell.
- [textView(\_:write:at:to:type:)](nstextviewdelegate/textview%28__write_at_to_type_%29.md): Returns whether data of the specified type for the given cell could be written to the specified pasteboard.

### Setting Text Attributes

- [textView(\_:shouldChangeTextIn:replacementString:)](nstextviewdelegate/textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView(\_:shouldChangeTextInRanges:replacementStrings:)](nstextviewdelegate/textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView(\_:shouldChangeTypingAttributes:toAttributes:)](nstextviewdelegate/textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes(\_:)](nstextviewdelegate/textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.

### Clicking and Pasting

- [textView(\_:clickedOn:in:at:)](nstextviewdelegate/textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView(\_:doubleClickedOn:in:at:)](nstextviewdelegate/textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [textView(\_:clickedOnLink:at:)](nstextviewdelegate/textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

### Working With the Spelling Checker

- [textView(\_:shouldSetSpellingState:range:)](nstextviewdelegate/textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView(\_:willCheckTextIn:options:types:)](nstextviewdelegate/textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.
- [textView(\_:didCheckTextIn:types:options:results:orthography:wordCount:)](nstextviewdelegate/textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin(\_:)](nstextviewdelegate/textviewwritingtoolswillbegin%28__%29.md)
- [textViewWritingToolsDidEnd(\_:)](nstextviewdelegate/textviewwritingtoolsdidend%28__%29.md)
- [textView(\_:writingToolsIgnoredRangesInEnclosingRange:)](nstextviewdelegate/textview%28__writingtoolsignoredrangesinenclosingrange_%29.md)

### Dragging

- [textView(\_:draggedCell:in:event:at:)](nstextviewdelegate/textview%28__draggedcell_in_event_at_%29.md): Sent when the user attempts to drag a cell.

### Completing text

- [textView(\_:completions:forPartialWordRange:indexOfSelectedItem:)](nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md): Returns the actual completions for a partial word.

### Displaying the sharing service picker

- [textView(\_:willShow:forItems:)](nstextviewdelegate/textview%28__willshow_foritems_%29.md): Returns a sharing service picker for the current selection.

### Performing Commands

- [textView(\_:doCommandBy:)](nstextviewdelegate/textview%28__docommandby_%29.md): Sent to allow the delegate to perform the command for the text view.

### Contextual Menu Management

- [textView(\_:menu:for:at:)](nstextviewdelegate/textview%28__menu_for_at_%29.md): Allows delegate to control the context menu returned by the text view.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextDelegate](nstextdelegate.md)

### Conforming Types

- [NSOutlineView](nsoutlineview.md)
- [NSTableView](nstableview.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.

# NSTextViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

## Declaration

```objectivec
@protocol NSTextViewDelegate <NSTextDelegate>
```

## Topics

### Accessing Text System Objects

- [undoManagerForTextView:](nstextviewdelegate/undomanager%28for_%29.md): Returns the undo manager for the specified text view.

### Controlling Display

- [textView:willDisplayToolTip:forCharacterAtIndex:](nstextviewdelegate/textview%28__willdisplaytooltip_forcharacterat_%29.md): Returns the actual tooltip to display.

### Supporting Quick Look

- [textView:URLForContentsOfTextAttachment:atIndex:](nstextviewdelegate/textview%28__urlforcontentsof_at_%29.md): Returns a URL representing the document contents for a text attachment.

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](nstextviewdelegate/textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](nstextviewdelegate/textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection:](nstextviewdelegate/textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidates:forSelectedRange:](nstextviewdelegate/textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](nstextviewdelegate/textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](nstextviewdelegate/textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView:shouldUpdateTouchBarItemIdentifiers:](nstextviewdelegate/textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

### Managing the Pasteboard

- [textView:writablePasteboardTypesForCell:atIndex:](nstextviewdelegate/textview%28__writablepasteboardtypesfor_at_%29.md): Returns the writable pasteboard types for a given cell.
- [textView:writeCell:atIndex:toPasteboard:type:](nstextviewdelegate/textview%28__write_at_to_type_%29.md): Returns whether data of the specified type for the given cell could be written to the specified pasteboard.

### Setting Text Attributes

- [textView:shouldChangeTextInRange:replacementString:](nstextviewdelegate/textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView:shouldChangeTextInRanges:replacementStrings:](nstextviewdelegate/textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView:shouldChangeTypingAttributes:toAttributes:](nstextviewdelegate/textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes:](nstextviewdelegate/textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.

### Clicking and Pasting

- [textView:clickedOnCell:inRect:atIndex:](nstextviewdelegate/textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView:doubleClickedOnCell:inRect:atIndex:](nstextviewdelegate/textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [textView:clickedOnLink:atIndex:](nstextviewdelegate/textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

### Working With the Spelling Checker

- [textView:shouldSetSpellingState:range:](nstextviewdelegate/textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView:willCheckTextInRange:options:types:](nstextviewdelegate/textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.
- [textView:didCheckTextInRange:types:options:results:orthography:wordCount:](nstextviewdelegate/textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin:](nstextviewdelegate/textviewwritingtoolswillbegin%28__%29.md)
- [textViewWritingToolsDidEnd:](nstextviewdelegate/textviewwritingtoolsdidend%28__%29.md)
- [textView:writingToolsIgnoredRangesInEnclosingRange:](nstextviewdelegate/textview%28__writingtoolsignoredrangesinenclosingrange_%29.md)

### Dragging

- [textView:draggedCell:inRect:event:atIndex:](nstextviewdelegate/textview%28__draggedcell_in_event_at_%29.md): Sent when the user attempts to drag a cell.

### Completing text

- [textView:completions:forPartialWordRange:indexOfSelectedItem:](nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md): Returns the actual completions for a partial word.

### Displaying the sharing service picker

- [textView:willShowSharingServicePicker:forItems:](nstextviewdelegate/textview%28__willshow_foritems_%29.md): Returns a sharing service picker for the current selection.

### Performing Commands

- [textView:doCommandBySelector:](nstextviewdelegate/textview%28__docommandby_%29.md): Sent to allow the delegate to perform the command for the text view.

### Contextual Menu Management

- [textView:menu:forEvent:atIndex:](nstextviewdelegate/textview%28__menu_for_at_%29.md): Allows delegate to control the context menu returned by the text view.

### Deprecated Methods

- [textView:clickedOnLink:](nstextviewdelegate/textview_clickedonlink_.md): Deprecated. Sent after the user clicks on a link.
- [textView:draggedCell:inRect:event:](nstextviewdelegate/textview_draggedcell_inrect_event_.md): Deprecated. Sent when the user attempts to drag a cell.
- [textView:clickedOnCell:inRect:](nstextviewdelegate/textview_clickedoncell_inrect_.md): Deprecated. Sent when the user clicks a cell.
- [textView:doubleClickedOnCell:inRect:](nstextviewdelegate/textview_doubleclickedoncell_inrect_.md): Deprecated. Sent when the user double-clicks a cell.

## Relationships

### Inherits From

- [NSTextDelegate](nstextdelegate.md)

### Conforming Types

- [NSTableView](nstableview.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.
