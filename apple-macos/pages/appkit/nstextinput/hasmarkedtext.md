> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/hasmarkedtext](https://developer.apple.com/documentation/appkit/nstextinput/hasmarkedtext)

# hasMarkedText

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns a Boolean value indicating whether or not the receiver has marked text.

## Declaration

```objectivec
- (BOOL) hasMarkedText;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver has marked text, [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

<a id="Discussion"></a>

## Discussion

Unlike other methods in this protocol, this one is not called by an input server. The text view itself may call this method to determine whether there currently is marked text. `NSTextView`, for example, disables the Edit \> Copy menu item when this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Marked text

- [markedRange](markedrange.md): Deprecated. Returns the range of the marked text.
- [selectedRange](selectedrange.md): Deprecated. Returns the range of selected text.
- [setMarkedText:selectedRange:](setmarkedtext_selectedrange_.md): Deprecated. Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.
- [unmarkText](unmarktext.md): Deprecated. Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.
- [validAttributesForMarkedText](validattributesformarkedtext.md): Deprecated. Returns an array of names for the attributes supported by the receiver.
