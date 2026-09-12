> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathequaltopath](https://developer.apple.com/documentation/coregraphics/cgpathequaltopath)

# CGPathEqualToPath

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether two graphics paths are equivalent.

## Declaration

```objectivec
extern bool CGPathEqualToPath(CGPathRef path1, CGPathRef path2);
```

## Parameters

- `path1`: The first path being compared.
- `path2`: The second path being compared.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether or not the two specified paths contain the same sequence of path elements. If the paths are not the same, returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Examining a Graphics Path

- [CGPathGetBoundingBox](cgpath/boundingbox.md): Returns the bounding box containing all points in a graphics path.
- [CGPathGetPathBoundingBox](cgpath/boundingboxofpath.md): Returns the bounding box of a graphics path.
- [CGPathGetCurrentPoint](cgpath/currentpoint.md): Returns the current point in a graphics path.
- [CGPathContainsPoint](cgpathcontainspoint.md): Checks whether a point is contained in a graphics path.
- [CGPathIsEmpty](cgpath/isempty.md): Indicates whether or not a graphics path is empty.
- [CGPathIsRect](cgpath/isrect%28__%29.md): Indicates whether or not a graphics path represents a rectangle.
