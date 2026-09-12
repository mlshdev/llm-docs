> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontexteofillpath](https://developer.apple.com/documentation/coregraphics/cgcontexteofillpath)

# CGContextEOFillPath

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints the area within the current path, using the even-odd fill rule.

## Declaration

```objectivec
extern void CGContextEOFillPath(CGContextRef c);
```

## Parameters

- `c`: A graphics context that contains a path to fill.

<a id="Discussion"></a>

## Discussion

Each subpath is treated as if it were closed by calling [CGContextClosePath](cgcontext/closepath%28%29.md). The even-odd rule is described in [Filling a Path](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_paths/dq_paths.html#//apple_ref/doc/uid/TP30001066-CH211-TPXREF106) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066). The current path is cleared as a side effect of calling this function.

## See Also

### Drawing the Current Graphics Path

- [CGContextDrawPath](cgcontext/drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [CGContextFillPath](cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
- [CGContextStrokePath](cgcontext/strokepath%28%29.md): Paints a line along the current path.
