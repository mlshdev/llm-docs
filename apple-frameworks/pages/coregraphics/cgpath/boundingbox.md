> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/boundingbox](https://developer.apple.com/documentation/coregraphics/cgpath/boundingbox)

# boundingBox (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box containing all points in a graphics path.

## Declaration

```swift
var boundingBox: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in the path, including control points for Bézier and quadratic curves. If the path is empty, this value is [CGRectNull](../cgrectnull.md).

## See Also

### Examining a Graphics Path

- [boundingBoxOfPath](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [currentPoint](currentpoint.md): Returns the current point in a graphics path.
- [contains(\_:using:transform:)](contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [isRect(\_:)](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

# CGPathGetBoundingBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box containing all points in a graphics path.

## Declaration

```objectivec
extern CGRect CGPathGetBoundingBox(CGPathRef path);
```

## Parameters

- `path`: The graphics path to evaluate.

<a id="return-value"></a>

## Return Value

A rectangle that represents the bounding box of the specified path.

<a id="Discussion"></a>

## Discussion

The bounding box is the smallest rectangle completely enclosing all points in the path, including control points for Bézier and quadratic curves. If the path is empty, this value is [CGRectNull](../cgrectnull.md).

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](../cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetPathBoundingBox](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](../cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
