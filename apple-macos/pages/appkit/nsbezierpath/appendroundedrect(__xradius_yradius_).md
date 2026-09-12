> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/appendroundedrect(_:xradius:yradius:)](https://developer.apple.com/documentation/appkit/nsbezierpath/appendroundedrect(_:xradius:yradius:))

# appendRoundedRect(\_:xRadius:yRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Appends a rounded rectangular path to the path.

## Declaration

```swift
func appendRoundedRect(_ rect: NSRect, xRadius: CGFloat, yRadius: CGFloat)
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `xRadius`: The radius of each corner oval along the x-axis. Values larger than half the rectangle’s width are clamped to half the width.
- `yRadius`: The radius of each corner oval along the y-axis. Values larger than half the rectangle’s height are clamped to half the height.

<a id="Discussion"></a>

## Discussion

The path is constructed in a counter-clockwise direction, starting at the top-left corner of the rectangle. If either one of the radius parameters contains the value `0.0`, the returned path is a plain rectangle without rounded corners.

## See Also

### Related Documentation

- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.

### Appending Common Shapes to a Path

- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(from:to:radius:)](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:)](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:clockwise:)](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.
- [append(withCGGlyph:in:)](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendGlyphs(\_:count:in:)](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

# appendBezierPathWithRoundedRect:xRadius:yRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Appends a rounded rectangular path to the path.

## Declaration

```objectivec
- (void) appendBezierPathWithRoundedRect:(NSRect) rect xRadius:(CGFloat) xRadius yRadius:(CGFloat) yRadius;
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `xRadius`: The radius of each corner oval along the x-axis. Values larger than half the rectangle’s width are clamped to half the width.
- `yRadius`: The radius of each corner oval along the y-axis. Values larger than half the rectangle’s height are clamped to half the height.

<a id="Discussion"></a>

## Discussion

The path is constructed in a counter-clockwise direction, starting at the top-left corner of the rectangle. If either one of the radius parameters contains the value `0.0`, the returned path is a plain rectangle without rounded corners.

## See Also

### Related Documentation

- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.

### Appending Common Shapes to a Path

- [appendBezierPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcFromPoint:toPoint:radius:](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithCGGlyph:inFont:](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithGlyphs:count:inFont:](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
