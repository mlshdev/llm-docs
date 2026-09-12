> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/linespacing(afterglyphat:withproposedlinefragmentrect:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/linespacing(afterglyphat:withproposedlinefragmentrect:))

# lineSpacing(afterGlyphAt:withProposedLineFragmentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line spacing in effect following the specified glyph.

## Declaration

```swift
func lineSpacing(afterGlyphAt glyphIndex: Int, withProposedLineFragmentRect rect: NSRect) -> CGFloat
```

<a id="Discussion"></a>

## Discussion

The [NSATSTypesetter](../nsatstypesetter.md) calls this method to determine the number of points of space to include below the descenders in the used rectangle for the proposed line fragment rectangle `rect`.

Line spacing, also called leading, is an attribute of [NSParagraphStyle](../nsparagraphstyle.md), which you can set on an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object. A font typically includes a default minimum line spacing metric used if none is set in the paragraph style.

If the typesetter behavior specified in the [NSLayoutManager](../nslayoutmanager.md) is [NSLayoutManager.TypesetterBehavior.originalBehavior](../nslayoutmanager/typesetterbehavior-swift.enum/originalbehavior.md), the text system uses the original, private typesetter `NSSimpleHorizontalTypesetter`, which adds the line spacing above the ascender. Similarly, [NSATSTypesetter](../nsatstypesetter.md) adds the line spacing above the ascender if the value is negative.

## See Also

### Getting Spacing Information

- [paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added following a paragraph, in effect after the specified glyph.
- [paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.

# lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line spacing in effect following the specified glyph.

## Declaration

```objectivec
- (CGFloat) lineSpacingAfterGlyphAtIndex:(NSUInteger) glyphIndex withProposedLineFragmentRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

The [NSATSTypesetter](../nsatstypesetter.md) calls this method to determine the number of points of space to include below the descenders in the used rectangle for the proposed line fragment rectangle `rect`.

Line spacing, also called leading, is an attribute of [NSParagraphStyle](../nsparagraphstyle.md), which you can set on an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object. A font typically includes a default minimum line spacing metric used if none is set in the paragraph style.

If the typesetter behavior specified in the [NSLayoutManager](../nslayoutmanager.md) is [NSTypesetterOriginalBehavior](../nslayoutmanager/typesetterbehavior-swift.enum/originalbehavior.md), the text system uses the original, private typesetter `NSSimpleHorizontalTypesetter`, which adds the line spacing above the ascender. Similarly, [NSATSTypesetter](../nsatstypesetter.md) adds the line spacing above the ascender if the value is negative.

## See Also

### Getting Spacing Information

- [paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added following a paragraph, in effect after the specified glyph.
- [paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.
