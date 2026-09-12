> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d/precisionestimatesperpoint-3kx5a](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d/precisionestimatesperpoint-3kx5a)

# precisionEstimatesPerPoint

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An array of precision estimates for each landmark point.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NSNumber *> * precisionEstimatesPerPoint;
```

<a id="Discussion"></a>

## Discussion

This property is only populated when you configure your [VNDetectFaceLandmarksRequest](../vndetectfacelandmarksrequest.md) object with [VNRequestFaceLandmarksConstellation76Points](../vnrequestfacelandmarksconstellation/constellation76points.md). For other constellation types, this array is set to `nil`.

## See Also

### Specifying Region Properties

- [normalizedPoints](normalizedpoints-1o38f.md): A buffer in memory containing normalized landmark points.
