> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/paragraphspacing(beforeglyphat:withproposedlinefragmentrect:)](https://developer.apple.com/documentation/appkit/nstypesetter/paragraphspacing(beforeglyphat:withproposedlinefragmentrect:))

# paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.

## Declaration

```swift
func paragraphSpacing(beforeGlyphAt glyphIndex: Int, withProposedLineFragmentRect rect: NSRect) -> CGFloat
```

## Parameters

- `glyphIndex`: The index of the glyph in question.
- `rect`: The line fragment rectangle of the first line in the paragraph.

<a id="return-value"></a>

## Return Value

The number of points of space—added before a paragraph—that is in effect before the glyph specified by `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The typesetter adds the number of points specified in the return value to the top of the line fragment rectangle specified by `rect` (but not to the used line fragment rectangle for that line). Paragraph spacing added before a paragraph correlates to the value returned by the [paragraphSpacingBefore](../nsparagraphstyle/paragraphspacingbefore.md) method of [NSParagraphStyle](../nsparagraphstyle.md), which you can set using the [paragraphSpacingBefore](../nsmutableparagraphstyle/paragraphspacingbefore.md) method of [NSMutableParagraphStyle](../nsmutableparagraphstyle.md).

## See Also

### Getting spacing information

- [lineSpacing(afterGlyphAt:withProposedLineFragmentRect:)](linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:)](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.

# paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.

## Declaration

```objectivec
- (CGFloat) paragraphSpacingBeforeGlyphAtIndex:(NSUInteger) glyphIndex withProposedLineFragmentRect:(NSRect) rect;
```

## Parameters

- `glyphIndex`: The index of the glyph in question.
- `rect`: The line fragment rectangle of the first line in the paragraph.

<a id="return-value"></a>

## Return Value

The number of points of space—added before a paragraph—that is in effect before the glyph specified by `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The typesetter adds the number of points specified in the return value to the top of the line fragment rectangle specified by `rect` (but not to the used line fragment rectangle for that line). Paragraph spacing added before a paragraph correlates to the value returned by the [paragraphSpacingBefore](../nsparagraphstyle/paragraphspacingbefore.md) method of [NSParagraphStyle](../nsparagraphstyle.md), which you can set using the [paragraphSpacingBefore](../nsmutableparagraphstyle/paragraphspacingbefore.md) method of [NSMutableParagraphStyle](../nsmutableparagraphstyle.md).

## See Also

### Getting spacing information

- [lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.
