> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/setparagraphglyphrange(_:separatorglyphrange:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/setparagraphglyphrange(_:separatorglyphrange:))

# setParagraphGlyphRange(\_:separatorGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).

## Declaration

```swift
func setParagraphGlyphRange(_ paragraphRange: NSRange, separatorGlyphRange paragraphSeparatorRange: NSRange)
```

## Parameters

- `paragraphRange`: The glyph range that becomes current.
- `paragraphSeparatorRange`: The paragraph separator glyph range that becomes current.

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

# setParagraphGlyphRange:separatorGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).

## Declaration

```objectivec
- (void) setParagraphGlyphRange:(NSRange) paragraphRange separatorGlyphRange:(NSRange) paragraphSeparatorRange;
```

## Parameters

- `paragraphRange`: The glyph range that becomes current.
- `paragraphSeparatorRange`: The paragraph separator glyph range that becomes current.

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.
