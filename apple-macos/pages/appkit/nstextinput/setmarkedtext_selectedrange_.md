> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/setmarkedtext:selectedrange:](https://developer.apple.com/documentation/appkit/nstextinput/setmarkedtext:selectedrange:)

# setMarkedText:selectedRange:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Replaces currently marked text in the receiver’s text storage with the given string and sets the selection to the given range, computed from the beginning of the marked text.

## Declaration

```objectivec
- (void) setMarkedText:(id) string selectedRange:(NSRange) selRange;
```

## Parameters

- `string`: Either an `NSString` or an `NSAttributedString` object; must not be `nil`.
- `selRange`: The range within `aString` to set as the selection.

<a id="Discussion"></a>

## Discussion

If there is no marked text, the current selection is replaced. If there is no selection, the string is inserted at the insertion point.

## See Also

### Marked text

- [hasMarkedText](hasmarkedtext.md): Deprecated. Returns a Boolean value indicating whether or not the receiver has marked text.
- [markedRange](markedrange.md): Deprecated. Returns the range of the marked text.
- [selectedRange](selectedrange.md): Deprecated. Returns the range of selected text.
- [unmarkText](unmarktext.md): Deprecated. Removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally.
- [validAttributesForMarkedText](validattributesformarkedtext.md): Deprecated. Returns an array of names for the attributes supported by the receiver.
