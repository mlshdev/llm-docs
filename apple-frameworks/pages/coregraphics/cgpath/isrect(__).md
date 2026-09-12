> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/isrect(_:)](https://developer.apple.com/documentation/coregraphics/cgpath/isrect(_:))

# isRect(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether or not a graphics path represents a rectangle.

## Declaration

```swift
func isRect(_ rect: UnsafeMutablePointer<CGRect>?) -> Bool
```

## Parameters

- `rect`: On input, a pointer to an uninitialized rectangle. If the specified path represents a rectangle, on return contains a copy of the rectangle.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the specified path represents a rectangle. If the path represents a rectangle, returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Examining a Graphics Path

- [boundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [boundingBoxOfPath](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [currentPoint](currentpoint.md): Returns the current point in a graphics path.
- [contains(\_:using:transform:)](contains%28__using_transform_%29.md): Returns whether the specified point is interior to the path.
- [isEmpty](isempty.md): Indicates whether or not a graphics path is empty.

# CGPathIsRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether or not a graphics path represents a rectangle.

## Declaration

```objectivec
extern bool CGPathIsRect(CGPathRef path, CGRect *rect);
```

## Parameters

- `path`: The path to evaluate.
- `rect`: On input, a pointer to an uninitialized rectangle. If the specified path represents a rectangle, on return contains a copy of the rectangle.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the specified path represents a rectangle. If the path represents a rectangle, returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](../cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](../cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](isempty.md): Indicates whether or not a graphics path is empty.
