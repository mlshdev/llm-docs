> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/linespacing(afterglyphat:withproposedlinefragmentrect:)](https://developer.apple.com/documentation/appkit/nstypesetter/linespacing(afterglyphat:withproposedlinefragmentrect:))

# lineSpacing(afterGlyphAt:withProposedLineFragmentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line spacing in effect following the specified glyph.

## Declaration

```swift
func lineSpacing(afterGlyphAt glyphIndex: Int, withProposedLineFragmentRect rect: NSRect) -> CGFloat
```

## Parameters

- `glyphIndex`: The index of the glyph in question.
- `rect`: The proposed line fragment rectangle.

<a id="return-value"></a>

## Return Value

The line spacing in effect following the glyph at `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The [NSATSTypesetter](../nsatstypesetter.md) calls this method to determine the number of points of space to include below the descenders in the used rectangle for the proposed line fragment rectangle `rect`.

Line spacing, also called leading, is an attribute of [NSParagraphStyle](../nsparagraphstyle.md), which you can set on an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object. A font typically includes a default minimum line spacing metric used if none is set in the paragraph style.

If the typesetter behavior specified in the layout manager is `NSTypesetterOriginalBehavior`, the text system uses the original, private typesetter `NSSimpleHorizontalTypesetter`, which adds the line spacing above the ascender. Similarly, [NSATSTypesetter](../nsatstypesetter.md) adds the line spacing above the ascender if the value is negative.

## See Also

### Getting spacing information

- [paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.
- [paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.

# lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line spacing in effect following the specified glyph.

## Declaration

```objectivec
- (CGFloat) lineSpacingAfterGlyphAtIndex:(NSUInteger) glyphIndex withProposedLineFragmentRect:(NSRect) rect;
```

## Parameters

- `glyphIndex`: The index of the glyph in question.
- `rect`: The proposed line fragment rectangle.

<a id="return-value"></a>

## Return Value

The line spacing in effect following the glyph at `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The [NSATSTypesetter](../nsatstypesetter.md) calls this method to determine the number of points of space to include below the descenders in the used rectangle for the proposed line fragment rectangle `rect`.

Line spacing, also called leading, is an attribute of [NSParagraphStyle](../nsparagraphstyle.md), which you can set on an [NSMutableParagraphStyle](../nsmutableparagraphstyle.md) object. A font typically includes a default minimum line spacing metric used if none is set in the paragraph style.

If the typesetter behavior specified in the layout manager is `NSTypesetterOriginalBehavior`, the text system uses the original, private typesetter `NSSimpleHorizontalTypesetter`, which adds the line spacing above the ascender. Similarly, [NSATSTypesetter](../nsatstypesetter.md) adds the line spacing above the ascender if the value is negative.

## See Also

### Getting spacing information

- [paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.
- [paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.
