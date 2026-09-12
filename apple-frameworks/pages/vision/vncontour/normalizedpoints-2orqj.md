> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/normalizedpoints-2orqj](https://developer.apple.com/documentation/vision/vncontour/normalizedpoints-2orqj)

# normalizedPoints

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The contour’s array of points in normalized coordinates.

## Declaration

```objectivec
@property (readonly) const simd_float2 * normalizedPoints;
```

<a id="Discussion"></a>

## Discussion

This property value provides the address of the buffer that contains the array of [CGPoint](../../corefoundation/cgpoint.md) values.

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [polygonApproximationWithEpsilon:error:](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.
