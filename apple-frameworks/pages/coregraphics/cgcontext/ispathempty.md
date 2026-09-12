> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/ispathempty](https://developer.apple.com/documentation/coregraphics/cgcontext/ispathempty)

# isPathEmpty (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether the current path contains any subpaths.

## Declaration

```swift
var isPathEmpty: Bool { get }
```

## See Also

### Examining the Current Graphics Path

- [boundingBoxOfPath](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [currentPointOfPath](currentpointofpath.md): Returns the current point in a non-empty path.
- [pathContains(\_:mode:)](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.

# CGContextIsPathEmpty (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether the current path contains any subpaths.

## Declaration

```objectivec
extern bool CGContextIsPathEmpty(CGContextRef c);
```

## Parameters

- `c`: The graphics context containing the path to examine.

<a id="return-value"></a>

## Return Value

Returns `1` if the context’s path contains no subpaths, otherwise returns `0`.

## See Also

### Examining the Current Graphics Path

- [CGContextGetPathBoundingBox](boundingboxofpath.md): Returns the smallest rectangle that contains the current path.
- [CGContextGetPathCurrentPoint](currentpointofpath.md): Returns the current point in a non-empty path.
- [CGContextPathContainsPoint](pathcontains%28__mode_%29.md): Checks to see whether the specified point is contained in the current path.
