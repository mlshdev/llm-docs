> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contour/normalizedpath](https://developer.apple.com/documentation/vision/contoursobservation/contour/normalizedpath)

# normalizedPath

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The contour object as a path in normalized coordinates.

## Declaration

```swift
var normalizedPath: CGPath { get }
```

## See Also

### Inspecting a contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour, which is the image’s width divided by its height.
- [boundingBox](boundingbox.md): The bounding box of the region.
- [boundingQuad](boundingquad.md): The bounding quadrilateral of the region.
- [childContours](childcontours.md): An array of contours that this contour encloses.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPoints](normalizedpoints.md): The contour’s array of points in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [points](points.md): The points of the region as an array of `NormalizedPoint`.
