> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/paragraphspacing(afterglyphat:withproposedlinefragmentrect:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/paragraphspacing(afterglyphat:withproposedlinefragmentrect:))

# paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of points of space added following a paragraph, in effect after the specified glyph.

## Declaration

```swift
func paragraphSpacing(afterGlyphAt glyphIndex: Int, withProposedLineFragmentRect rect: NSRect) -> CGFloat
```

<a id="Discussion"></a>

## Discussion

The `rect` argument specifies the line fragment rectangle of the last line in the paragraph.

The typesetter adds the number of points specified in the return value to the bottom of the line fragment rectangle specified by `rect` (but not to the used line fragment rectangle for that line). Paragraph spacing added after a paragraph correlates to the value in the [paragraphSpacing](../nsparagraphstyle/paragraphspacing.md) property of [NSParagraphStyle](../nsparagraphstyle.md). You can set the value of this property in an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object.

## See Also

### Getting Spacing Information

- [lineSpacing(afterGlyphAt:withProposedLineFragmentRect:)](linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.

# paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of points of space added following a paragraph, in effect after the specified glyph.

## Declaration

```objectivec
- (CGFloat) paragraphSpacingAfterGlyphAtIndex:(NSUInteger) glyphIndex withProposedLineFragmentRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

The `rect` argument specifies the line fragment rectangle of the last line in the paragraph.

The typesetter adds the number of points specified in the return value to the bottom of the line fragment rectangle specified by `rect` (but not to the used line fragment rectangle for that line). Paragraph spacing added after a paragraph correlates to the value in the [paragraphSpacing](../nsparagraphstyle/paragraphspacing.md) property of [NSParagraphStyle](../nsparagraphstyle.md). You can set the value of this property in an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object.

## See Also

### Getting Spacing Information

- [lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.
