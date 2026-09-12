> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/append(withcgglyph:in:)](https://developer.apple.com/documentation/appkit/nsbezierpath/append(withcgglyph:in:))

# append(withCGGlyph:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Appends an outline of the specified glyph to the path.

## Declaration

```swift
func append(withCGGlyph glyph: CGGlyph, in font: NSFont)
```

## See Also

### Appending Common Shapes to a Path

- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(from:to:radius:)](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:)](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:clockwise:)](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendRoundedRect(\_:xRadius:yRadius:)](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendGlyphs(\_:count:in:)](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

# appendBezierPathWithCGGlyph:inFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Appends an outline of the specified glyph to the path.

## Declaration

```objectivec
- (void) appendBezierPathWithCGGlyph:(CGGlyph) glyph inFont:(NSFont *) font;
```

## See Also

### Appending Common Shapes to a Path

- [appendBezierPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcFromPoint:toPoint:radius:](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithGlyphs:count:inFont:](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
