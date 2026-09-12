> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/currentpoint](https://developer.apple.com/documentation/coregraphics/cgpath/currentpoint)

# currentPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current point in a graphics path.

## Declaration

```swift
var currentPoint: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

If the path is empty—that is, if it has no elements—this function returns [CGPointZero](../cgpointzero.md) (see [CGGeometry](../cggeometry.md)). To determine whether a path is empty, use [isEmpty](isempty.md).

## See Also

### Examining a Graphics Path

- [boundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [boundingBoxOfPath](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [contains(\_:using:transform:)](contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [isRect(\_:)](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

# CGPathGetCurrentPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current point in a graphics path.

## Declaration

```objectivec
extern CGPoint CGPathGetCurrentPoint(CGPathRef path);
```

## Parameters

- `path`: The path to evaluate.

<a id="return-value"></a>

## Return Value

The current point in the specified path.

<a id="Discussion"></a>

## Discussion

If the path is empty—that is, if it has no elements—this function returns [CGPointZero](../cgpointzero.md) (see [CGGeometry](../cggeometry.md)). To determine whether a path is empty, use [CGPathIsEmpty](isempty.md).

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](../cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathContainsPoint](../cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
