> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/markedrange](https://developer.apple.com/documentation/appkit/nstextinput/markedrange)

# markedRange

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the range of the marked text.

## Declaration

```objectivec
- (NSRange) markedRange;
```

<a id="return-value"></a>

## Return Value

The range of marked text.

<a id="Discussion"></a>

## Discussion

The returned range measures from the start of the receiver’s text storage. The return value’s `location` is `NSNotFound`, and its `length` is 0 if and only if [hasMarkedText](hasmarkedtext.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Marked text

- [hasMarkedText](hasmarkedtext.md): Deprecated. Returns a Boolean value indicating whether or not the receiver has marked text.
- [selectedRange](selectedrange.md): Deprecated. Returns the range of selected text.
- [setMarkedText:selectedRange:](setmarkedtext_selectedrange_.md): Deprecated. Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.
- [unmarkText](unmarktext.md): Deprecated. Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.
- [validAttributesForMarkedText](validattributesformarkedtext.md): Deprecated. Returns an array of names for the attributes supported by the receiver.
