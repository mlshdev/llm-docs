> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/underlineglyphrange(_:underlinetype:linefragmentrect:linefragmentglyphrange:containerorigin:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/underlineglyphrange(_:underlinetype:linefragmentrect:linefragmentglyphrange:containerorigin:))

# underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

## Declaration

```swift
func underlineGlyphRange(_ glyphRange: NSRange, underlineType underlineVal: NSUnderlineStyle, lineFragmentRect lineRect: NSRect, lineFragmentGlyphRange lineGlyphRange: NSRange, containerOrigin: NSPoint)
```

## Parameters

- `glyphRange`: A range of glyphs, which must belong to a single line fragment rectangle (as returned by [lineFragmentRect(forGlyphAt:effectiveRange:)](linefragmentrect%28forglyphat_effectiverange_%29.md)).
- `underlineVal`: The style of underlining to draw. This value is a mask derived from the value for [underlineStyle](https://developer.apple.com/documentation/foundation/nsattributedstring/key/underlinestyle)—for example, `(NSUnderlinePatternDash | NSUnderlineStyleThick | NSUnderlineByWordMask)`. Subclasses can define custom underlining styles.
- `lineRect`: The line fragment rectangle containing the glyphs to draw underlining for.
- `lineGlyphRange`: The range of all glyphs within that line fragment rectangle.
- `containerOrigin`: The origin of the line fragment rectangle’s `NSTextContainer` in its `NSTextView`.

<a id="Discussion"></a>

## Discussion

This method determines which glyphs actually need to be underlined based on `underlineVal`. With `NSUnderlineStyleSingle`, for example, leading and trailing whitespace isn’t underlined, but whitespace between visible glyphs is. A potential word-underline style would omit underlining on any whitespace. After determining which glyphs to draw underlining on, this method invokes [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md) for each contiguous range of glyphs that requires it.

## See Also

### Drawing

- [drawBackground(forGlyphRange:at:)](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphs(forGlyphRange:at:)](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethrough(forGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray(\_:count:forCharacterRange:color:)](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.

# underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

## Declaration

```objectivec
- (void) underlineGlyphRange:(NSRange) glyphRange underlineType:(NSUnderlineStyle) underlineVal lineFragmentRect:(NSRect) lineRect lineFragmentGlyphRange:(NSRange) lineGlyphRange containerOrigin:(NSPoint) containerOrigin;
```

## Parameters

- `glyphRange`: A range of glyphs, which must belong to a single line fragment rectangle (as returned by [lineFragmentRectForGlyphAtIndex:effectiveRange:](linefragmentrect%28forglyphat_effectiverange_%29.md)).
- `underlineVal`: The style of underlining to draw. This value is a mask derived from the value for [underlineStyle](https://developer.apple.com/documentation/foundation/nsattributedstring/key/underlinestyle)—for example, `(NSUnderlinePatternDash | NSUnderlineStyleThick | NSUnderlineByWordMask)`. Subclasses can define custom underlining styles.
- `lineRect`: The line fragment rectangle containing the glyphs to draw underlining for.
- `lineGlyphRange`: The range of all glyphs within that line fragment rectangle.
- `containerOrigin`: The origin of the line fragment rectangle’s `NSTextContainer` in its `NSTextView`.

<a id="Discussion"></a>

## Discussion

This method determines which glyphs actually need to be underlined based on `underlineVal`. With `NSUnderlineStyleSingle`, for example, leading and trailing whitespace isn’t underlined, but whitespace between visible glyphs is. A potential word-underline style would omit underlining on any whitespace. After determining which glyphs to draw underlining on, this method invokes [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md) for each contiguous range of glyphs that requires it.

## See Also

### Drawing

- [drawBackgroundForGlyphRange:atPoint:](drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphsForGlyphRange:atPoint:](drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray:count:forCharacterRange:color:](fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
