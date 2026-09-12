> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/isempty](https://developer.apple.com/documentation/coregraphics/cgpath/isempty)

# isEmpty (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether or not a graphics path is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An empty path contains no elements.

## See Also

### Examining a Graphics Path

- [boundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [boundingBoxOfPath](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [currentPoint](currentpoint.md): Returns the current point in a graphics path.
- [contains(\_:using:transform:)](contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isRect(\_:)](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.

# CGPathIsEmpty (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether or not a graphics path is empty.

## Declaration

```objectivec
extern bool CGPathIsEmpty(CGPathRef path);
```

## Parameters

- `path`: The path to evaluate.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the specified path is empty.

<a id="Discussion"></a>

## Discussion

An empty path contains no elements.

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](../cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](../cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsRect](isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
