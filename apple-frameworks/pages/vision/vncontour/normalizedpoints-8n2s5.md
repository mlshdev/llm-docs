> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/normalizedpoints-8n2s5](https://developer.apple.com/documentation/vision/vncontour/normalizedpoints-8n2s5)

# normalizedPoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The contour’s array of points in normalized coordinates.

## Declaration

```swift
@nonobjc var normalizedPoints: [simd_float2] { get }
```

<a id="Discussion"></a>

## Discussion

This property value provides the address of the buffer that contain the array of [CGPoint](../../corefoundation/cgpoint.md) values.

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [polygonApproximation(epsilon:)](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.
