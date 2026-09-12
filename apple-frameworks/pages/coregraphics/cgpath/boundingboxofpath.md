> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/boundingboxofpath](https://developer.apple.com/documentation/coregraphics/cgpath/boundingboxofpath)

# boundingBoxOfPath (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box of a graphics path.

## Declaration

```swift
var boundingBoxOfPath: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The path bounding box is the smallest rectangle completely enclosing all points in the path but not including control points for Bézier and quadratic curves. If the path is empty, this value is [CGRectNull](../cgrectnull.md).

## See Also

### Examining a Graphics Path

- [boundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [currentPoint](currentpoint.md): Returns the current point in a graphics path.
- [contains(\_:using:transform:)](contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [isRect(\_:)](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

# CGPathGetPathBoundingBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box of a graphics path.

## Declaration

```objectivec
extern CGRect CGPathGetPathBoundingBox(CGPathRef path);
```

## Parameters

- `path`: The graphics path to evaluate.

<a id="return-value"></a>

## Return Value

A rectangle that represents the path bounding box of the specified path.

<a id="Discussion"></a>

## Discussion

The path bounding box is the smallest rectangle completely enclosing all points in the path but not including control points for Bézier and quadratic curves. If the path is empty, this value is [CGRectNull](../cgrectnull.md).

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](../cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetCurrentPoint](currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](../cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
