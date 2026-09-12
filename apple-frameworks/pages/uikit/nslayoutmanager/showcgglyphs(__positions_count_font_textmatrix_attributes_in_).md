> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/showcgglyphs(_:positions:count:font:textmatrix:attributes:in:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/showcgglyphs(_:positions:count:font:textmatrix:attributes:in:))

# showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Renders the glyphs at the specified positions, using the specified attributes.

## Declaration

```swift
func showCGGlyphs(_ glyphs: UnsafePointer<CGGlyph>, positions: UnsafePointer<CGPoint>, count glyphCount: Int, font: UIFont, textMatrix: CGAffineTransform, attributes: [NSAttributedString.Key : Any] = [:], in CGContext: CGContext)
```

## Parameters

- `glyphs`: The glyphs to draw, which may include embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs to draw.
- `font`: The font to apply to the graphics state. This value can be different from the [NSFontAttributeName](../nsfontattributename.md) value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored because Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. For a list of possible keys and values, see [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes).
- `CGContext`: A graphics context object already configured with the information in the `font`, `textMatrix`, and `attributes` parameters

<a id="Discussion"></a>

## Discussion

The layout manager calls this primitive method when it is time to lay out a set of glyphs in the specified graphics context.

## See Also

### Drawing

- [drawBackground(forGlyphRange:at:)](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphs(forGlyphRange:at:)](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethrough(forGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray(\_:count:forCharacterRange:color:)](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

# showCGGlyphs:positions:count:font:textMatrix:attributes:inContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Renders the glyphs at the specified positions, using the specified attributes.

## Declaration

```objectivec
- (void) showCGGlyphs:(const CGGlyph *) glyphs positions:(const CGPoint *) positions count:(NSInteger) glyphCount font:(UIFont *) font textMatrix:(CGAffineTransform) textMatrix attributes:(NSDictionary<NSString *,id> *) attributes inContext:(CGContextRef) CGContext;
```

## Parameters

- `glyphs`: The glyphs to draw, which may include embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs to draw.
- `font`: The font to apply to the graphics state. This value can be different from the [NSFontAttributeName](../nsfontattributename.md) value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored because Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. For a list of possible keys and values, see [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes).
- `CGContext`: A graphics context object already configured with the information in the `font`, `textMatrix`, and `attributes` parameters

<a id="Discussion"></a>

## Discussion

The layout manager calls this primitive method when it is time to lay out a set of glyphs in the specified graphics context.

## See Also

### Drawing

- [drawBackgroundForGlyphRange:atPoint:](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphsForGlyphRange:atPoint:](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray:count:forCharacterRange:color:](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.
