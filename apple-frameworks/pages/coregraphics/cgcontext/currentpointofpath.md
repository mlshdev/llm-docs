> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/currentpointofpath](https://developer.apple.com/documentation/coregraphics/cgcontext/currentpointofpath)

# currentPointOfPath (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current point in a non-empty path.

## Declaration

```swift
var currentPointOfPath: CGPoint { get }
```

## See Also

### Examining the Current Graphics Path

- [boundingBoxOfPath](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [isPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.
- [pathContains(\_:mode:)](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.

# CGContextGetPathCurrentPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current point in a non-empty path.

## Declaration

```objectivec
extern CGPoint CGContextGetPathCurrentPoint(CGContextRef c);
```

## Parameters

- `c`: The graphics context containing the path to examine.

<a id="return-value"></a>

## Return Value

The location, in user space, of the current point in the context’s path. If there is no path, the function returns [CGPointZero](../cgpointzero.md).

## See Also

### Examining the Current Graphics Path

- [CGContextGetPathBoundingBox](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [CGContextIsPathEmpty](ispathempty.md): Indicates whether the current path contains any subpaths.
- [CGContextPathContainsPoint](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.
