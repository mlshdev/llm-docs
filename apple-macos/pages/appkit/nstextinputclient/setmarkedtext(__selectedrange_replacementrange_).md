> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/setmarkedtext(_:selectedrange:replacementrange:)](https://developer.apple.com/documentation/appkit/nstextinputclient/setmarkedtext(_:selectedrange:replacementrange:))

# setMarkedText(\_:selectedRange:replacementRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces a specified range in the receiver’s text storage with the given string and sets the selection.

## Declaration

```swift
func setMarkedText(_ string: Any, selectedRange: NSRange, replacementRange: NSRange)
```

## Parameters

- `string`: The string to insert. Can be either an `NSString` or `NSAttributedString` instance.
- `selectedRange`: The range to set as the selection, computed from the beginning of the inserted string.
- `replacementRange`: The range to replace, computed from the beginning of the marked text.

<a id="Discussion"></a>

## Discussion

If there is no marked text, the current selection is replaced. If there is no selection, the string is inserted at the insertion point.

When `aString` is an `NSString` object, the receiver is expected to render the marked text with distinguishing appearance (for example, `NSTextView` renders with [markedTextAttributes](../nstextview/markedtextattributes.md)).

## See Also

### Handling marked text

- [hasMarkedText()](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange()](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange()](selectedrange%28%29.md): Returns the range of selected text.
- [unmarkText()](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText()](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

# setMarkedText:selectedRange:replacementRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces a specified range in the receiver’s text storage with the given string and sets the selection.

## Declaration

```objectivec
- (void) setMarkedText:(id) string selectedRange:(NSRange) selectedRange replacementRange:(NSRange) replacementRange;
```

## Parameters

- `string`: The string to insert. Can be either an `NSString` or `NSAttributedString` instance.
- `selectedRange`: The range to set as the selection, computed from the beginning of the inserted string.
- `replacementRange`: The range to replace, computed from the beginning of the marked text.

<a id="Discussion"></a>

## Discussion

If there is no marked text, the current selection is replaced. If there is no selection, the string is inserted at the insertion point.

When `aString` is an `NSString` object, the receiver is expected to render the marked text with distinguishing appearance (for example, `NSTextView` renders with [markedTextAttributes](../nstextview/markedtextattributes.md)).

## See Also

### Handling marked text

- [hasMarkedText](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange](selectedrange%28%29.md): Returns the range of selected text.
- [unmarkText](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.
