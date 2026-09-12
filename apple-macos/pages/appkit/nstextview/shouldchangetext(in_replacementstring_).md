> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/shouldchangetext(in:replacementstring:)](https://developer.apple.com/documentation/appkit/nstextview/shouldchangetext(in:replacementstring:))

# shouldChangeText(in:replacementString:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.

## Declaration

```swift
func shouldChangeText(in affectedCharRange: NSRange, replacementString: String?) -> Bool
```

## Parameters

- `affectedCharRange`: The range of characters affected by the proposed change.
- `replacementString`: The characters that will replace those in `affectedCharRange`. If only text attributes are being changed, `replacementString` is `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the change, [false](https://developer.apple.com/documentation/swift/false) to prohibit it.

<a id="Discussion"></a>

## Discussion

This method checks with the delegate as needed using [textShouldBeginEditing(\_:)](../nstextdelegate/textshouldbeginediting%28__%29.md) and [textView(\_:shouldChangeTextIn:replacementString:)](../nstextviewdelegate/textview%28__shouldchangetextin_replacementstring_%29.md).

This method must be invoked at the start of any sequence of user-initiated editing changes. If your subclass of `NSTextView` implements methods that modify the text, make sure to invoke this method to determine whether the change should be made. If the change is allowed, complete the change by invoking the [didChangeText()](didchangetext%28%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

If you override this method, you must call `super` at the beginning of the override.

If the receiver is not editable, this method automatically returns [false](https://developer.apple.com/documentation/swift/false). This result prevents instances in which a text view could be changed by user actions even though it had been set to be non-editable.

In macOS 10.4 and later, if there are multiple selections, this method acts on the first selected subrange.

## See Also

### Related Documentation

- [isEditable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.

### Customizing subclass behaviors

- [updateFontPanel()](updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler()](updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration()](updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [selectionRange(forProposedRange:granularity:)](selectionrange%28forproposedrange_granularity_%29.md): Returns an adjusted selected range based on the selection granularity.
- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeText(inRanges:replacementStrings:)](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText()](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRange(forProposedRange:)](smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.

# shouldChangeTextInRange:replacementString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.

## Declaration

```objectivec
- (BOOL) shouldChangeTextInRange:(NSRange) affectedCharRange replacementString:(NSString *) replacementString;
```

## Parameters

- `affectedCharRange`: The range of characters affected by the proposed change.
- `replacementString`: The characters that will replace those in `affectedCharRange`. If only text attributes are being changed, `replacementString` is `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the change, [false](https://developer.apple.com/documentation/swift/false) to prohibit it.

<a id="Discussion"></a>

## Discussion

This method checks with the delegate as needed using [textShouldBeginEditing:](../nstextdelegate/textshouldbeginediting%28__%29.md) and [textView:shouldChangeTextInRange:replacementString:](../nstextviewdelegate/textview%28__shouldchangetextin_replacementstring_%29.md).

This method must be invoked at the start of any sequence of user-initiated editing changes. If your subclass of `NSTextView` implements methods that modify the text, make sure to invoke this method to determine whether the change should be made. If the change is allowed, complete the change by invoking the [didChangeText](didchangetext%28%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

If you override this method, you must call `super` at the beginning of the override.

If the receiver is not editable, this method automatically returns [false](https://developer.apple.com/documentation/swift/false). This result prevents instances in which a text view could be changed by user actions even though it had been set to be non-editable.

In macOS 10.4 and later, if there are multiple selections, this method acts on the first selected subrange.

## See Also

### Related Documentation

- [editable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.

### Customizing subclass behaviors

- [updateFontPanel](updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler](updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration](updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [selectionRangeForProposedRange:granularity:](selectionrange%28forproposedrange_granularity_%29.md): Returns an adjusted selected range based on the selection granularity.
- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeTextInRanges:replacementStrings:](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRangeForProposedRange:](smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.
