> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/validattributesformarkedtext](https://developer.apple.com/documentation/appkit/nstextinput/validattributesformarkedtext)

# validAttributesForMarkedText

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns an array of names for the attributes supported by the receiver.

## Declaration

```objectivec
- (NSArray *) validAttributesForMarkedText;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing names for the supported attributes.

<a id="Discussion"></a>

## Discussion

The input server may choose to use some of these attributes in the text it inserts or in marked text. Returns an empty array if no attributes are supported. See NSAttributedString Additions for the set of string constants that you could return in the array.

## See Also

### Marked text

- [hasMarkedText](hasmarkedtext.md): Deprecated. Returns a Boolean value indicating whether or not the receiver has marked text.
- [markedRange](markedrange.md): Deprecated. Returns the range of the marked text.
- [selectedRange](selectedrange.md): Deprecated. Returns the range of selected text.
- [setMarkedText:selectedRange:](setmarkedtext_selectedrange_.md): Deprecated. Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.
- [unmarkText](unmarktext.md): Deprecated. Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.
