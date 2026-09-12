> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/smartinsert(for:replacing:before:after:)](https://developer.apple.com/documentation/appkit/nstextview/smartinsert(for:replacing:before:after:))

# smartInsert(for:replacing:before:after:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether whitespace needs to be added around the string to preserve proper spacing and punctuation when it replaces the characters in the specified range.

## Declaration

```swift
func smartInsert(for pasteString: String, replacing charRangeToReplace: NSRange, before beforeString: AutoreleasingUnsafeMutablePointer<NSString?>?, after afterString: AutoreleasingUnsafeMutablePointer<NSString?>?)
```

## Parameters

- `pasteString`: The string that is replacing the characters in `charRange`.
- `charRangeToReplace`: The range of characters which `aString` is replacing.
- `beforeString`: On return, a pointer to the string with the characters that should be added before `aString`; `nil` if there are no characters to add, if `aString` is `nil`, or if smart insertion and deletion are disabled.
- `afterString`: On return, a pointer to the string with the characters that should be added after `aString`; `nil` if there are no characters to add, if `aString` is `nil`, or if smart insertion and deletion are disabled.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method calls [smartInsert(afterStringFor:replacing:)](smartinsert%28afterstringfor_replacing_%29.md) and [smartInsert(beforeStringFor:replacing:)](smartinsert%28beforestringfor_replacing_%29.md). To change this method’s behavior, override those two methods instead of this one.

`NSTextView` uses this method as necessary. You can also use it in implementing your own methods that insert text. To do so, invoke this method with the proper arguments, then insert `beforeString`, `aString`, and `afterString` in order over `charRange`.

## See Also

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
- [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeText(inRanges:replacementStrings:)](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText()](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.

# smartInsertForString:replacingRange:beforeString:afterString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether whitespace needs to be added around the string to preserve proper spacing and punctuation when it replaces the characters in the specified range.

## Declaration

```objectivec
- (void) smartInsertForString:(NSString *) pasteString replacingRange:(NSRange) charRangeToReplace beforeString:(NSString **) beforeString afterString:(NSString **) afterString;
```

## Parameters

- `pasteString`: The string that is replacing the characters in `charRange`.
- `charRangeToReplace`: The range of characters which `aString` is replacing.
- `beforeString`: On return, a pointer to the string with the characters that should be added before `aString`; `nil` if there are no characters to add, if `aString` is `nil`, or if smart insertion and deletion are disabled.
- `afterString`: On return, a pointer to the string with the characters that should be added after `aString`; `nil` if there are no characters to add, if `aString` is `nil`, or if smart insertion and deletion are disabled.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method calls [smartInsertAfterStringForString:replacingRange:](smartinsert%28afterstringfor_replacing_%29.md) and [smartInsertBeforeStringForString:replacingRange:](smartinsert%28beforestringfor_replacing_%29.md). To change this method’s behavior, override those two methods instead of this one.

`NSTextView` uses this method as necessary. You can also use it in implementing your own methods that insert text. To do so, invoke this method with the proper arguments, then insert `beforeString`, `aString`, and `afterString` in order over `charRange`.

## See Also

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
- [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeTextInRanges:replacementStrings:](shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText](didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
