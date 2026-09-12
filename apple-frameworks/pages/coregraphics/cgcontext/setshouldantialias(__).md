> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setshouldantialias(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setshouldantialias(_:))

# setShouldAntialias(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets antialiasing on or off for a graphics context.

## Declaration

```swift
func setShouldAntialias(_ shouldAntialias: Bool)
```

## Parameters

- `shouldAntialias`: A Boolean value that specifies whether antialiasing should be turned on. Antialiasing is turned on by default when a window or bitmap context is created. It is turned off for other types of contexts.

<a id="Discussion"></a>

## Discussion

Antialiasing is a graphics state parameter.

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
- [setFillPattern(\_:colorComponents:)](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.

# CGContextSetShouldAntialias (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets antialiasing on or off for a graphics context.

## Declaration

```objectivec
extern void CGContextSetShouldAntialias(CGContextRef c, bool shouldAntialias);
```

## Parameters

- `c`: The graphics context to modify.
- `shouldAntialias`: A Boolean value that specifies whether antialiasing should be turned on. Antialiasing is turned on by default when a window or bitmap context is created. It is turned off for other types of contexts.

<a id="Discussion"></a>

## Discussion

Antialiasing is a graphics state parameter.

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
- [CGContextSetFillPattern](setfillpattern%28__colorcomponents_%29.md): Sets the fill pattern in the specified graphics context.
