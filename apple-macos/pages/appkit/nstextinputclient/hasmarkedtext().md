> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/hasmarkedtext()](https://developer.apple.com/documentation/appkit/nstextinputclient/hasmarkedtext())

# hasMarkedText() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the receiver has marked text.

## Declaration

```swift
func hasMarkedText() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver has marked text; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text view itself may call this method to determine whether there currently is marked text. `NSTextView`, for example, disables the Edit \> Copy menu item when this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling marked text

- [markedRange()](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange()](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText(\_:selectedRange:replacementRange:)](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText()](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText()](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

# hasMarkedText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the receiver has marked text.

## Declaration

```objectivec
- (BOOL) hasMarkedText;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver has marked text; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text view itself may call this method to determine whether there currently is marked text. `NSTextView`, for example, disables the Edit \> Copy menu item when this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling marked text

- [markedRange](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText:selectedRange:replacementRange:](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.
