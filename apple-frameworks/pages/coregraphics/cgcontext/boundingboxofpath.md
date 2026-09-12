> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/boundingboxofpath](https://developer.apple.com/documentation/coregraphics/cgcontext/boundingboxofpath)

# boundingBoxOfPath (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that contains the current path.

## Declaration

```swift
var boundingBoxOfPath: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in a path, including control points for Bézier cubic and quadratic curves.

## See Also

### Examining the Current Graphics Path

- [currentPointOfPath](currentpointofpath.md): Returns the current point in a non-empty path.
- [isPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.
- [pathContains(\_:mode:)](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.

# CGContextGetPathBoundingBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that contains the current path.

## Declaration

```objectivec
extern CGRect CGContextGetPathBoundingBox(CGContextRef c);
```

## Parameters

- `c`: The graphics context, containing a path, to examine.

<a id="return-value"></a>

## Return Value

The dimensions and location, in user space, of the bounding box of the path. If there is no path, the function returns [CGRectNull](../cgrectnull.md).

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in a path, including control points for Bézier cubic and quadratic curves.

## See Also

### Examining the Current Graphics Path

- [CGContextGetPathCurrentPoint](currentpointofpath.md): Returns the current point in a non-empty path.
- [CGContextIsPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.
- [CGContextPathContainsPoint](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.
