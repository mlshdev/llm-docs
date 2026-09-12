> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contour/normalizedpoints](https://developer.apple.com/documentation/vision/contoursobservation/contour/normalizedpoints)

# normalizedPoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The contour’s array of points in normalized coordinates.

## Declaration

```swift
var normalizedPoints: [simd_float2] { get }
```

## See Also

### Inspecting a contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour, which is the image’s width divided by its height.
- [boundingBox](boundingbox.md): The bounding box of the region.
- [boundingQuad](boundingquad.md): The bounding quadrilateral of the region.
- [childContours](childcontours.md): An array of contours that this contour encloses.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [points](points.md): The points of the region as an array of `NormalizedPoint`.
