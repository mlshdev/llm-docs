> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setfillpattern(_:colorcomponents:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setfillpattern(_:colorcomponents:))

# setFillPattern(\_:colorComponents:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the fill pattern in the specified graphics context.

## Declaration

```swift
func setFillPattern(_ pattern: CGPattern, colorComponents components: UnsafePointer<CGFloat>)
```

## Parameters

- `pattern`: A fill pattern. The object is retained; upon return, you may safely release it.
- `components`: If the pattern is an uncolored (or a masking) pattern, pass an array of intensity values that specify the color to use when the pattern is painted. The number of array elements must equal the number of components in the base space of the fill pattern color space, plus an additional component for the alpha value.

  If the pattern is a colored pattern, pass an alpha value.

<a id="Discussion"></a>

## Discussion

The current fill color space must be a pattern color space. Otherwise, the result of calling this function is undefined. If you want to set a fill color, not a pattern, use [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md).

## See Also

### Setting Path Drawing Options

- [setAllowsAntialiasing(\_:)](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [setFlatness(\_:)](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [setLineCap(\_:)](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [setLineDash(phase:lengths:)](setlinedash%28phase_lengths_%29.md): Sets the pattern for drawing dashed lines.
- [setLineJoin(\_:)](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [setLineWidth(\_:)](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [setMiterLimit(\_:)](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [setPatternPhase(\_:)](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [setShouldAntialias(\_:)](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

# CGContextSetFillPattern (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the fill pattern in the specified graphics context.

## Declaration

```objectivec
extern void CGContextSetFillPattern(CGContextRef c, CGPatternRef pattern, const CGFloat *components);
```

## Parameters

- `c`: The graphics context to modify.
- `pattern`: A fill pattern. The object is retained; upon return, you may safely release it.
- `components`: If the pattern is an uncolored (or a masking) pattern, pass an array of intensity values that specify the color to use when the pattern is painted. The number of array elements must equal the number of components in the base space of the fill pattern color space, plus an additional component for the alpha value.

  If the pattern is a colored pattern, pass an alpha value.

<a id="Discussion"></a>

## Discussion

The current fill color space must be a pattern color space. Otherwise, the result of calling this function is undefined. If you want to set a fill color, not a pattern, use [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md).

## See Also

### Setting Path Drawing Options

- [CGContextSetAllowsAntialiasing](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [CGContextSetFlatness](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [CGContextSetLineCap](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [CGContextSetLineDash](../cgcontextsetlinedash.md): Sets the pattern for dashed lines in a graphics context.
- [CGContextSetLineJoin](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [CGContextSetLineWidth](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [CGContextSetMiterLimit](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [CGContextSetPatternPhase](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [CGContextSetShouldAntialias](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.
