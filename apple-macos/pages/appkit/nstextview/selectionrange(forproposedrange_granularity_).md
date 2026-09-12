> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/selectionrange(forproposedrange:granularity:)](https://developer.apple.com/documentation/appkit/nstextview/selectionrange(forproposedrange:granularity:))

# selectionRange(forProposedRange:granularity:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an adjusted selected range based on the selection granularity.

## Declaration

```swift
func selectionRange(forProposedRange proposedCharRange: NSRange, granularity: NSSelectionGranularity) -> NSRange
```

## Parameters

- `proposedCharRange`: The proposed selected range.
- `granularity`: The selection granularity.

<a id="return-value"></a>

## Return Value

The adjusted selected range, taking into account the selection granularity.

<a id="Discussion"></a>

## Discussion

This method is invoked repeatedly during mouse tracking to modify the range of the selection. Override this method to specialize selection behavior.

## See Also

### Related Documentation

- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.

### Customizing subclass behaviors

- [updateFontPanel()](updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler()](updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration()](updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeText(inRanges:replacementStrings:)](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText()](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRange(forProposedRange:)](smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.

# selectionRangeForProposedRange:granularity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an adjusted selected range based on the selection granularity.

## Declaration

```objectivec
- (NSRange) selectionRangeForProposedRange:(NSRange) proposedCharRange granularity:(NSSelectionGranularity) granularity;
```

## Parameters

- `proposedCharRange`: The proposed selected range.
- `granularity`: The selection granularity.

<a id="return-value"></a>

## Return Value

The adjusted selected range, taking into account the selection granularity.

<a id="Discussion"></a>

## Discussion

This method is invoked repeatedly during mouse tracking to modify the range of the selection. Override this method to specialize selection behavior.

## See Also

### Related Documentation

- [selectionGranularity](selectiongranularity.md): The selection granularity for subsequent extension of a selection.

### Customizing subclass behaviors

- [updateFontPanel](updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler](updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration](updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeTextInRanges:replacementStrings:](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRangeForProposedRange:](smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.
