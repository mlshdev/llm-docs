> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/drawglyphs(forglyphrange:at:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/drawglyphs(forglyphrange:at:))

# drawGlyphs(forGlyphRange:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the specified glyphs, which must lie completely within a single text container.

## Declaration

```swift
func drawGlyphs(forGlyphRange glyphsToShow: NSRange, at origin: NSPoint)
```

## Parameters

- `glyphsToShow`: The range of glyphs that are drawn.
- `origin`: The position of the text container in the coordinate system of the currently focused view.

<a id="Discussion"></a>

## Discussion

This method is called by `NSTextView` for drawing. You can override it to perform additional drawing, or to replace text drawing entirely, but not to change layout. You can call this method directly, but focus must already be locked on the destination view or image. This method expects the coordinate system of the view to be flipped.

This method draws the actual glyphs, including attachments, as well as any underlines or strikethoughs.

Performs glyph generation and layout if needed.

## See Also

### Drawing

- [drawBackground(forGlyphRange:at:)](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawStrikethrough(forGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray(\_:count:forCharacterRange:color:)](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

# drawGlyphsForGlyphRange:atPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the specified glyphs, which must lie completely within a single text container.

## Declaration

```objectivec
- (void) drawGlyphsForGlyphRange:(NSRange) glyphsToShow atPoint:(NSPoint) origin;
```

## Parameters

- `glyphsToShow`: The range of glyphs that are drawn.
- `origin`: The position of the text container in the coordinate system of the currently focused view.

<a id="Discussion"></a>

## Discussion

This method is called by `NSTextView` for drawing. You can override it to perform additional drawing, or to replace text drawing entirely, but not to change layout. You can call this method directly, but focus must already be locked on the destination view or image. This method expects the coordinate system of the view to be flipped.

This method draws the actual glyphs, including attachments, as well as any underlines or strikethoughs.

Performs glyph generation and layout if needed.

## See Also

### Drawing

- [drawBackgroundForGlyphRange:atPoint:](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray:count:forCharacterRange:color:](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.
