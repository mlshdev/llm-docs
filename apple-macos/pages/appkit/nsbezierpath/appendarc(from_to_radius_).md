> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/appendarc(from:to:radius:)](https://developer.apple.com/documentation/appkit/nsbezierpath/appendarc(from:to:radius:))

# appendArc(from:to:radius:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends an arc to the path.

## Declaration

```swift
func appendArc(from point1: NSPoint, to point2: NSPoint, radius: CGFloat)
```

## Parameters

- `point1`: The middle point of the angle.
- `point2`: The end point of the angle.
- `radius`: The radius of the circle inscribed in the angle.

<a id="Discussion"></a>

## Discussion

The created arc is defined by a circle inscribed inside the angle specified by three points: the current point, the `fromPoint` parameter, and the  `toPoint` parameter (in that order). The arc itself lies on the perimeter of the circle, whose radius is specified by the `radius` parameter. The arc is drawn between the two points of the circle that are tangent to the two legs of the angle.

The arc usually does not contain the points in the `fromPoint` and `toPoint` parameters. If the starting point of the arc does not coincide with the current point, a line is drawn between the two points. The starting point of the arc lies on the line defined by the current point and the `fromPoint` parameter.

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

Depending on the length of the arc, this method may add multiple connected curve segments to the path.

## See Also

### Appending Common Shapes to a Path

- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(withCenter:radius:startAngle:endAngle:)](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:clockwise:)](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendRoundedRect(\_:xRadius:yRadius:)](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [append(withCGGlyph:in:)](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendGlyphs(\_:count:in:)](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

# appendBezierPathWithArcFromPoint:toPoint:radius: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends an arc to the path.

## Declaration

```objectivec
- (void) appendBezierPathWithArcFromPoint:(NSPoint) point1 toPoint:(NSPoint) point2 radius:(CGFloat) radius;
```

## Parameters

- `point1`: The middle point of the angle.
- `point2`: The end point of the angle.
- `radius`: The radius of the circle inscribed in the angle.

<a id="Discussion"></a>

## Discussion

The created arc is defined by a circle inscribed inside the angle specified by three points: the current point, the `fromPoint` parameter, and the  `toPoint` parameter (in that order). The arc itself lies on the perimeter of the circle, whose radius is specified by the `radius` parameter. The arc is drawn between the two points of the circle that are tangent to the two legs of the angle.

The arc usually does not contain the points in the `fromPoint` and `toPoint` parameters. If the starting point of the arc does not coincide with the current point, a line is drawn between the two points. The starting point of the arc lies on the line defined by the current point and the `fromPoint` parameter.

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

Depending on the length of the arc, this method may add multiple connected curve segments to the path.

## See Also

### Appending Common Shapes to a Path

- [appendBezierPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:](appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [appendBezierPathWithCGGlyph:inFont:](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithGlyphs:count:inFont:](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
