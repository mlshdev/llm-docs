> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/pathcontains(_:mode:)](https://developer.apple.com/documentation/coregraphics/cgcontext/pathcontains(_:mode:))

# pathContains(\_:mode:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks to see whether the specified point is contained in the current path.

## Declaration

```swift
func pathContains(_ point: CGPoint, mode: CGPathDrawingMode) -> Bool
```

## Parameters

- `point`: The point to check, specified in user space units.
- `mode`: A path drawing mode. See [CGPathDrawingMode](../cgpathdrawingmode.md).

<a id="return-value"></a>

## Return Value

Returns `true` if `point` is inside the current path of the graphics context; `false` otherwise.

<a id="Discussion"></a>

## Discussion

A point is contained within the path of a graphics context if the point is inside the painted region when the path is stroked or filled with opaque colors using the specified path drawing mode. A point can be inside a path only if the path is explicitly closed by calling the function [closePath()](closepath%28%29.md) for paths drawn directly to the current context, or [closeSubpath()](../cgmutablepath/closesubpath%28%29.md) for paths first created as [CGPath](../cgpath.md) objects and then drawn to the current context.

## See Also

### Examining the Current Graphics Path

- [boundingBoxOfPath](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [currentPointOfPath](currentpointofpath.md): Returns the current point in a non-empty path.
- [isPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.

# CGContextPathContainsPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks to see whether the specified point is contained in the current path.

## Declaration

```objectivec
extern bool CGContextPathContainsPoint(CGContextRef c, CGPoint point, CGPathDrawingMode mode);
```

## Parameters

- `c`: A graphics context.
- `point`: The point to check, specified in user space units.
- `mode`: A path drawing mode. See [CGPathDrawingMode](../cgpathdrawingmode.md).

<a id="return-value"></a>

## Return Value

Returns `true` if `point` is inside the current path of the graphics context; `false` otherwise.

<a id="Discussion"></a>

## Discussion

A point is contained within the path of a graphics context if the point is inside the painted region when the path is stroked or filled with opaque colors using the specified path drawing mode. A point can be inside a path only if the path is explicitly closed by calling the function [CGContextClosePath](closepath%28%29.md) for paths drawn directly to the current context, or [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md) for paths first created as [CGPathRef](../cgpath.md) objects and then drawn to the current context.

## See Also

### Examining the Current Graphics Path

- [CGContextGetPathBoundingBox](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [CGContextGetPathCurrentPoint](currentpointofpath.md): Returns the current point in a non-empty path.
- [CGContextIsPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.
