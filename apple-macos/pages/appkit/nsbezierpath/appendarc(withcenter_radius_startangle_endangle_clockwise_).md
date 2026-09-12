> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/appendarc(withcenter:radius:startangle:endangle:clockwise:)](https://developer.apple.com/documentation/appkit/nsbezierpath/appendarc(withcenter:radius:startangle:endangle:clockwise:))

# appendArc(withCenter:radius:startAngle:endAngle:clockwise:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends an arc of a circle to the path.

## Declaration

```swift
func appendArc(withCenter center: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
```

## Parameters

- `center`: Specifies the center point of the circle used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc, measured in degrees counterclockwise from the x-axis.
- `endAngle`: Specifies the end angle of the arc, measured in degrees counterclockwise from the x-axis.
- `clockwise`: [true](https://developer.apple.com/documentation/swift/true) if you want the arc to be drawn in a clockwise direction; otherwise [false](https://developer.apple.com/documentation/swift/false) to draw the arc in a counterclockwise direction.

<a id="Discussion"></a>

## Discussion

The created arc lies on the perimeter of the circle, between the angles specified by the `startAngle` and `endAngle` parameters. The arc is drawn in the direction indicated by the `clockwise` parameter. If the receiver’s path is empty, this method sets the current point to the beginning of the arc before adding the arc segment. If the receiver’s path is not empty, a line is drawn from the current point to the starting point of the arc.

Depending on the length of the arc, this method may add multiple connected curve segments to the path.

## See Also

### Appending Common Shapes to a Path

- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(from:to:radius:)](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:)](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendRoundedRect(\_:xRadius:yRadius:)](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [append(withCGGlyph:in:)](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [append(withCGGlyphs:count:in:)](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendGlyphs(\_:count:in:)](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendPackedGlyphs(\_:)](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

# appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends an arc of a circle to the path.

## Declaration

```objectivec
- (void) appendBezierPathWithArcWithCenter:(NSPoint) center radius:(CGFloat) radius startAngle:(CGFloat) startAngle endAngle:(CGFloat) endAngle clockwise:(BOOL) clockwise;
```

## Parameters

- `center`: Specifies the center point of the circle used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc, measured in degrees counterclockwise from the x-axis.
- `endAngle`: Specifies the end angle of the arc, measured in degrees counterclockwise from the x-axis.
- `clockwise`: [true](https://developer.apple.com/documentation/swift/true) if you want the arc to be drawn in a clockwise direction; otherwise [false](https://developer.apple.com/documentation/swift/false) to draw the arc in a counterclockwise direction.

<a id="Discussion"></a>

## Discussion

The created arc lies on the perimeter of the circle, between the angles specified by the `startAngle` and `endAngle` parameters. The arc is drawn in the direction indicated by the `clockwise` parameter. If the receiver’s path is empty, this method sets the current point to the beginning of the arc before adding the arc segment. If the receiver’s path is not empty, a line is drawn from the current point to the starting point of the arc.

Depending on the length of the arc, this method may add multiple connected curve segments to the path.

## See Also

### Appending Common Shapes to a Path

- [appendBezierPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcFromPoint:toPoint:radius:](appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [appendBezierPathWithCGGlyph:inFont:](append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithGlyphs:count:inFont:](appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithPackedGlyphs:](appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.
