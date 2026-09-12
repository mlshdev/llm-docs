> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setflatness(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setflatness(_:))

# setFlatness(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the accuracy of curved paths in a graphics context.

## Declaration

```swift
func setFlatness(_ flatness: CGFloat)
```

## Parameters

- `flatness`: The largest permissible distance, measured in device pixels, between a point on the true curve and a point on the approximated curve.

<a id="Discussion"></a>

## Discussion

This function controls how accurately curved paths are rendered. Setting the flatness value to less than `1.0` renders highly accurate curves, but lengthens rendering times.

In most cases, you should not change the flatness value. Customizing the flatness value for the capabilities of a particular output device impairs the ability of your application to render to other devices.

## See Also

### Setting Path Drawing Options

- [setAllowsAntialiasing(\_:)](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [setLineCap(\_:)](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [setLineDash(phase:lengths:)](setlinedash%28phase_lengths_%29.md): Sets the pattern for drawing dashed lines.
- [setLineJoin(\_:)](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [setLineWidth(\_:)](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [setMiterLimit(\_:)](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [setPatternPhase(\_:)](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [setFillPattern(\_:colorComponents:)](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [setShouldAntialias(\_:)](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

# CGContextSetFlatness (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the accuracy of curved paths in a graphics context.

## Declaration

```objectivec
extern void CGContextSetFlatness(CGContextRef c, CGFloat flatness);
```

## Parameters

- `c`: The graphics context to modify.
- `flatness`: The largest permissible distance, measured in device pixels, between a point on the true curve and a point on the approximated curve.

<a id="Discussion"></a>

## Discussion

This function controls how accurately curved paths are rendered. Setting the flatness value to less than `1.0` renders highly accurate curves, but lengthens rendering times.

In most cases, you should not change the flatness value. Customizing the flatness value for the capabilities of a particular output device impairs the ability of your application to render to other devices.

## See Also

### Setting Path Drawing Options

- [CGContextSetAllowsAntialiasing](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [CGContextSetLineCap](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [CGContextSetLineDash](../cgcontextsetlinedash.md): Sets the pattern for dashed lines in a graphics context.
- [CGContextSetLineJoin](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [CGContextSetLineWidth](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [CGContextSetMiterLimit](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [CGContextSetPatternPhase](setpatternphase%28__%29.md): Sets the pattern phase of a context.
- [CGContextSetFillPattern](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [CGContextSetShouldAntialias](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.
