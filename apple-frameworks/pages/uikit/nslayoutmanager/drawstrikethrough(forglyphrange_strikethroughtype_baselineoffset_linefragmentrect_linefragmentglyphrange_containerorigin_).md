> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/drawstrikethrough(forglyphrange:strikethroughtype:baselineoffset:linefragmentrect:linefragmentglyphrange:containerorigin:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/drawstrikethrough(forglyphrange:strikethroughtype:baselineoffset:linefragmentrect:linefragmentglyphrange:containerorigin:))

# drawStrikethrough(forGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws a strikethrough for the specified glyphs.

## Declaration

```swift
func drawStrikethrough(forGlyphRange glyphRange: NSRange, strikethroughType strikethroughVal: NSUnderlineStyle, baselineOffset: CGFloat, lineFragmentRect lineRect: CGRect, lineFragmentGlyphRange lineGlyphRange: NSRange, containerOrigin: CGPoint)
```

## Parameters

- `glyphRange`: The range of glyphs for which to draw a strikethrough. The range must belong to a single line fragment rectangle (as returned by [lineFragmentRect(forGlyphAt:effectiveRange:)](linefragmentrect%28forglyphat_effectiverange_%29.md)).
- `strikethroughVal`: The style of strikethrough to draw. This value is a mask derived from the value for [NSUnderlineStyleAttributeName](../nsunderlinestyleattributename.md)—for example, `(NSUnderlinePatternDash | NSUnderlineStyleThick)`. Subclasses can define custom strikethrough styles.
- `baselineOffset`: Indicates how far above the text baseline the underline should be drawn.
- `lineRect`: The line fragment rectangle containing the glyphs to draw strikethrough for.
- `lineGlyphRange`: The range of all glyphs within `lineRect`.
- `containerOrigin`: The origin of the line fragment rectangle’s `NSTextContainer` in its `NSTextView`.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically by [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md); you should rarely need to invoke it directly. This method’s `strikethroughVal` parameter does not take account of any setting for[NSUnderlineByWordMask](https://developer.apple.com/documentation/appkit/nsunderlinebywordmask) because that’s taken care of by [underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md).

## See Also

### Drawing

- [drawBackground(forGlyphRange:at:)](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphs(forGlyphRange:at:)](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray(\_:count:forCharacterRange:color:)](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

# drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws a strikethrough for the specified glyphs.

## Declaration

```objectivec
- (void) drawStrikethroughForGlyphRange:(NSRange) glyphRange strikethroughType:(NSUnderlineStyle) strikethroughVal baselineOffset:(CGFloat) baselineOffset lineFragmentRect:(CGRect) lineRect lineFragmentGlyphRange:(NSRange) lineGlyphRange containerOrigin:(CGPoint) containerOrigin;
```

## Parameters

- `glyphRange`: The range of glyphs for which to draw a strikethrough. The range must belong to a single line fragment rectangle (as returned by [lineFragmentRectForGlyphAtIndex:effectiveRange:](linefragmentrect%28forglyphat_effectiverange_%29.md)).
- `strikethroughVal`: The style of strikethrough to draw. This value is a mask derived from the value for [NSUnderlineStyleAttributeName](../nsunderlinestyleattributename.md)—for example, `(NSUnderlinePatternDash | NSUnderlineStyleThick)`. Subclasses can define custom strikethrough styles.
- `baselineOffset`: Indicates how far above the text baseline the underline should be drawn.
- `lineRect`: The line fragment rectangle containing the glyphs to draw strikethrough for.
- `lineGlyphRange`: The range of all glyphs within `lineRect`.
- `containerOrigin`: The origin of the line fragment rectangle’s `NSTextContainer` in its `NSTextView`.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically by [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md); you should rarely need to invoke it directly. This method’s `strikethroughVal` parameter does not take account of any setting for[NSUnderlineByWordMask](https://developer.apple.com/documentation/appkit/nsunderlinebywordmask) because that’s taken care of by [underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md).

## See Also

### Drawing

- [drawBackgroundForGlyphRange:atPoint:](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphsForGlyphRange:atPoint:](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray:count:forCharacterRange:color:](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.
