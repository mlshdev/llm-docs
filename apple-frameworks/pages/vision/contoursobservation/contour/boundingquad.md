> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contour/boundingquad](https://developer.apple.com/documentation/vision/contoursobservation/contour/boundingquad)

# boundingQuad

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The bounding quadrilateral of the region.

## Declaration

```swift
var boundingQuad: RectangleObservation { get }
```

## See Also

### Inspecting a contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour, which is the image’s width divided by its height.
- [boundingBox](boundingbox.md): The bounding box of the region.
- [childContours](childcontours.md): An array of contours that this contour encloses.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [normalizedPoints](normalizedpoints.md): The contour’s array of points in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [points](points.md): The points of the region as an array of `NormalizedPoint`.
