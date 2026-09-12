> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/unmarktext](https://developer.apple.com/documentation/appkit/nstextinput/unmarktext)

# unmarkText

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.

## Declaration

```objectivec
- (void) unmarkText;
```

## See Also

### Marked text

- [hasMarkedText](hasmarkedtext.md): Deprecated. Returns a Boolean value indicating whether or not the receiver has marked text.
- [markedRange](markedrange.md): Deprecated. Returns the range of the marked text.
- [selectedRange](selectedrange.md): Deprecated. Returns the range of selected text.
- [setMarkedText:selectedRange:](setmarkedtext_selectedrange_.md): Deprecated. Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.
- [validAttributesForMarkedText](validattributesformarkedtext.md): Deprecated. Returns an array of names for the attributes supported by the receiver.
