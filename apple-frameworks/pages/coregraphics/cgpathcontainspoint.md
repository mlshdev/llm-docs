> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathcontainspoint](https://developer.apple.com/documentation/coregraphics/cgpathcontainspoint)

# CGPathContainsPoint

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks whether a point is contained in a graphics path.

## Declaration

```objectivec
extern bool CGPathContainsPoint(CGPathRef path, const CGAffineTransform *m, CGPoint point, bool eoFill);
```

## Parameters

- `path`: The path to evaluate the point against.
- `m`: An affine transform. If `m` is not `NULL` then the point is transformed by this affine transform prior to determining whether the path contains the point.
- `point`: The point to check.
- `eoFill`: A Boolean value that, if [true](https://developer.apple.com/documentation/swift/true), specifies to use the even-odd fill rule to evaluate the painted region of the path. If [false](https://developer.apple.com/documentation/swift/false), the winding fill rule is used.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the point is contained in the path; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A point is contained in a path if it would be inside the painted region when the path is filled.

## See Also

### Examining a Graphics Path

- [CGPathEqualToPath](cgpathequaltopath.md): Indicates whether two graphics paths are equivalent.
- [CGPathGetBoundingBox](cgpath/boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](cgpath/boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](cgpath/currentpoint.md): Returns the current point in a graphics path.
- [CGPathIsEmpty](cgpath/isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](cgpath/isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
