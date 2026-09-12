> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/appendglyphs(_:count:in:)](https://developer.apple.com/documentation/appkit/nsbezierpath/appendglyphs(_:count:in:))

# appendGlyphs(\_:count:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Appends the outlines of the specified glyphs to the path.

> Use [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md) instead.

## Declaration

```swift
func appendGlyphs(_ glyphs: UnsafeMutablePointer<NSGlyph>, count: Int, in font: NSFont)
```

## Parameters

- `glyphs`: A C-style array of `NSGlyph` data types to add to the path.
- `count`: The number of glyphs in the `glyphs` parameter.
- `font`: The font in which the glyphs are encoded.

<a id="Discussion"></a>

## Discussion

If the glyphs are not encoded in the font specified by the `fontObj` parameter—that is, the font does not have an entry for one of the specified glyphs—then no path is appended to the receiver.

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Related Documentation

- [drawPackedGlyphs(\_:at:)](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

### Appending Common Shapes to a Path

- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(from:to:radius:)](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:)](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:clockwise:)](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendRoundedRect(\_:xRadius:yRadius:)](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [append(withCGGlyph:in:)](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

# appendBezierPathWithGlyphs:count:inFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Appends the outlines of the specified glyphs to the path.

> Use [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md) instead.

## Declaration

```objectivec
- (void) appendBezierPathWithGlyphs:(NSGlyph *) glyphs count:(NSInteger) count inFont:(NSFont *) font;
```

## Parameters

- `glyphs`: A C-style array of `NSGlyph` data types to add to the path.
- `count`: The number of glyphs in the `glyphs` parameter.
- `font`: The font in which the glyphs are encoded.

<a id="Discussion"></a>

## Discussion

If the glyphs are not encoded in the font specified by the `fontObj` parameter—that is, the font does not have an entry for one of the specified glyphs—then no path is appended to the receiver.

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Related Documentation

- [drawPackedGlyphs:atPoint:](drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

### Appending Common Shapes to a Path

- [appendBezierPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcFromPoint:toPoint:radius:](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [appendBezierPathWithCGGlyph:inFont:](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
