> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d/normalizedpoints-1o38f](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d/normalizedpoints-1o38f)

# normalizedPoints

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A buffer in memory containing normalized landmark points.

## Declaration

```objectivec
@property (assign, readonly, nullable) const CGPoint * normalizedPoints;
```

<a id="Discussion"></a>

## Discussion

This pointer points to the address of a buffer containing [CGPoint](../../corefoundation/cgpoint.md) structs representing landmark points.

The target object owns this buffer, which is guaranteed to exist as long as the corresponding [VNFaceLandmarkRegion2D](../vnfacelandmarkregion2d.md) exists.

## See Also

### Specifying Region Properties

- [precisionEstimatesPerPoint](precisionestimatesperpoint-3kx5a.md): An array of precision estimates for each landmark point.
