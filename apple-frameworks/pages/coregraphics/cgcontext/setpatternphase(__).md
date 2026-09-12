> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setpatternphase(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setpatternphase(_:))

# setPatternPhase(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the pattern phase of a context.

## Declaration

```swift
func setPatternPhase(_ phase: CGSize)
```

## Parameters

- `phase`: A pattern phase, specified in user space.

<a id="Discussion"></a>

## Discussion

The pattern phase is a translation that Core Graphics applies prior to drawing a pattern in the context. The pattern phase is part of the graphics state of a context, and the default pattern phase is `(0,0)`. Setting the pattern phase has the effect of temporarily changing the pattern matrix of any pattern you draw. For example, setting the context’s pattern phase to `(2,3)` has the effect of moving the start of pattern cell tiling to the point `(2,3)` in default user space.

## See Also

### Setting Path Drawing Options

- [setAllowsAntialiasing(\_:)](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [setFlatness(\_:)](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [setLineCap(\_:)](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [setLineDash(phase:lengths:)](setlinedash%28phase_lengths_%29.md): Sets the pattern for drawing dashed lines.
- [setLineJoin(\_:)](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [setLineWidth(\_:)](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [setMiterLimit(\_:)](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [setFillPattern(\_:colorComponents:)](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [setShouldAntialias(\_:)](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.

# CGContextSetPatternPhase (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the pattern phase of a context.

## Declaration

```objectivec
extern void CGContextSetPatternPhase(CGContextRef c, CGSize phase);
```

## Parameters

- `c`: The graphics context to modify.
- `phase`: A pattern phase, specified in user space.

<a id="Discussion"></a>

## Discussion

The pattern phase is a translation that Core Graphics applies prior to drawing a pattern in the context. The pattern phase is part of the graphics state of a context, and the default pattern phase is `(0,0)`. Setting the pattern phase has the effect of temporarily changing the pattern matrix of any pattern you draw. For example, setting the context’s pattern phase to `(2,3)` has the effect of moving the start of pattern cell tiling to the point `(2,3)` in default user space.

## See Also

### Setting Path Drawing Options

- [CGContextSetAllowsAntialiasing](setallowsantialiasing%28__%29.md): Sets whether or not to allow antialiasing for a graphics context.
- [CGContextSetFlatness](setflatness%28__%29.md): Sets the accuracy of curved paths in a graphics context.
- [CGContextSetLineCap](setlinecap%28__%29.md): Sets the style for the endpoints of lines drawn in a graphics context.
- [CGContextSetLineDash](../cgcontextsetlinedash.md): Sets the pattern for dashed lines in a graphics context.
- [CGContextSetLineJoin](setlinejoin%28__%29.md): Sets the style for the joins of connected lines in a graphics context.
- [CGContextSetLineWidth](setlinewidth%28__%29.md): Sets the line width for a graphics context.
- [CGContextSetMiterLimit](setmiterlimit%28__%29.md): Sets the miter limit for the joins of connected lines in a graphics context.
- [CGContextSetFillPattern](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
- [CGContextSetShouldAntialias](setshouldantialias%28__%29.md): Sets antialiasing on or off for a graphics context.
