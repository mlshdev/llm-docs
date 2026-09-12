> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setmiterlimit(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setmiterlimit(_:))

# setMiterLimit(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the miter limit for the joins of connected lines in a graphics context.

## Declaration

```swift
func setMiterLimit(_ limit: CGFloat)
```

## Parameters

- `limit`: The miter limit to use.

<a id="Discussion"></a>

## Discussion

If the current line join style is set to [CGLineJoin.miter](../cglinejoin/miter.md), the miter limit determines whether the lines should be joined with a bevel instead of a miter. The length of the miter is divided by the line width. If the result is greater than the miter limit, the style is converted to a bevel.

## See Also

### Setting Path Drawing Options

- [setAllowsAntialiasing(\_:)](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [setFlatness(\_:)](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [setLineCap(\_:)](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [setLineDash(phase:lengths:)](setlinedash%28phase_lengths_%29.md): Sets the pattern for drawing dashed lines.
- [setLineJoin(\_:)](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [setLineWidth(\_:)](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [setPatternPhase(\_:)](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [setFillPattern(\_:colorComponents:)](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [setShouldAntialias(\_:)](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

# CGContextSetMiterLimit (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the miter limit for the joins of connected lines in a graphics context.

## Declaration

```objectivec
extern void CGContextSetMiterLimit(CGContextRef c, CGFloat limit);
```

## Parameters

- `c`: The graphics context to modify.
- `limit`: The miter limit to use.

<a id="Discussion"></a>

## Discussion

If the current line join style is set to [kCGLineJoinMiter](../cglinejoin/miter.md), the miter limit determines whether the lines should be joined with a bevel instead of a miter. The length of the miter is divided by the line width. If the result is greater than the miter limit, the style is converted to a bevel.

## See Also

### Setting Path Drawing Options

- [CGContextSetAllowsAntialiasing](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [CGContextSetFlatness](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [CGContextSetLineCap](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [CGContextSetLineDash](../cgcontextsetlinedash.md): Sets the pattern for dashed lines in a graphics context.
- [CGContextSetLineJoin](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [CGContextSetLineWidth](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [CGContextSetPatternPhase](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [CGContextSetFillPattern](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [CGContextSetShouldAntialias](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.
