> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/strokepath()](https://developer.apple.com/documentation/coregraphics/cgcontext/strokepath())

# strokePath() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a line along the current path.

## Declaration

```swift
func strokePath()
```

<a id="Discussion"></a>

## Discussion

The line width and stroke color of the context’s graphics state are used to paint the path. The current path is cleared as a side effect of calling this function.

## See Also

### Drawing the Current Graphics Path

- [drawPath(using:)](drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](../cgpathdrawingmode.md): Options for rendering a path.
- [fillPath(using:)](fillpath%28using_%29.md): Paints the area within the current path, as determined by the specified fill rule.

# CGContextStrokePath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Paints a line along the current path.

## Declaration

```objectivec
extern void CGContextStrokePath(CGContextRef c);
```

## Parameters

- `c`: A graphics context.

<a id="Discussion"></a>

## Discussion

The line width and stroke color of the context’s graphics state are used to paint the path. The current path is cleared as a side effect of calling this function.

## See Also

### Related Documentation

- [CGContextFillPath](../cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
- [CGContextEOFillPath](../cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.

### Drawing the Current Graphics Path

- [CGContextDrawPath](drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGPathDrawingMode](../cgpathdrawingmode.md): Options for rendering a path.
- [CGContextEOFillPath](../cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.
- [CGContextFillPath](../cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
