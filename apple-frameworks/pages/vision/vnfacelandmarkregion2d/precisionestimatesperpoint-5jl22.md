> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d/precisionestimatesperpoint-5jl22](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d/precisionestimatesperpoint-5jl22)

# precisionEstimatesPerPoint

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+

Requests an array of precision estimates for each landmark point.

## Declaration

```swift
@nonobjc var precisionEstimatesPerPoint: [Float]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only populated when you configure your [VNDetectFaceLandmarksRequest](../vndetectfacelandmarksrequest.md) object with [VNRequestFaceLandmarksConstellation.constellation76Points](../vnrequestfacelandmarksconstellation/constellation76points.md). For other constellation types, this array is set to `nil`.

## See Also

### Specifying Region Properties

- [normalizedPoints](normalizedpoints-7s7im.md): The array of normalized landmark points.
