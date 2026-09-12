> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/drawpath(using:)](https://developer.apple.com/documentation/coregraphics/cgcontext/drawpath(using:))

# drawPath(using:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the current path using the provided drawing mode.

## Declaration

```swift
func drawPath(using mode: CGPathDrawingMode)
```

## Parameters

- `mode`: A path drawing mode constant—[CGPathDrawingMode.fill](../cgpathdrawingmode/fill.md), [CGPathDrawingMode.eoFill](../cgpathdrawingmode/eofill.md), [CGPathDrawingMode.stroke](../cgpathdrawingmode/stroke.md), [CGPathDrawingMode.fillStroke](../cgpathdrawingmode/fillstroke.md), or [CGPathDrawingMode.eoFillStroke](../cgpathdrawingmode/eofillstroke.md). For a discussion of these constants, see [CGPath](../cgpath.md).

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Drawing the Current Graphics Path

- [CGPathDrawingMode](../cgpathdrawingmode.md): Options for rendering a path.
- [fillPath(using:)](fillpath%28using_%29.md): Paints the area within the current path, as determined by the specified fill rule.
- [strokePath()](strokepath%28%29.md): Paints a line along the current path.

# CGContextDrawPath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the current path using the provided drawing mode.

## Declaration

```objectivec
extern void CGContextDrawPath(CGContextRef c, CGPathDrawingMode mode);
```

## Parameters

- `c`: A graphics context that contains a path to paint.
- `mode`: A path drawing mode constant—[kCGPathFill](../cgpathdrawingmode/fill.md), [kCGPathEOFill](../cgpathdrawingmode/eofill.md), [kCGPathStroke](../cgpathdrawingmode/stroke.md), [kCGPathFillStroke](../cgpathdrawingmode/fillstroke.md), or [kCGPathEOFillStroke](../cgpathdrawingmode/eofillstroke.md). For a discussion of these constants, see [CGPathRef](../cgpath.md).

<a id="Discussion"></a>

## Discussion

The current path is cleared as a side effect of calling this function.

## See Also

### Related Documentation

- [CGContextEOFillPath](../cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.
- [CGContextFillPath](../cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.

### Drawing the Current Graphics Path

- [CGPathDrawingMode](../cgpathdrawingmode.md): Options for rendering a path.
- [CGContextEOFillPath](../cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.
- [CGContextFillPath](../cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
- [CGContextStrokePath](strokepath%28%29.md): Paints a line along the current path.
