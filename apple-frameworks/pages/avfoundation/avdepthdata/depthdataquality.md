> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/depthdataquality](https://developer.apple.com/documentation/avfoundation/avdepthdata/depthdataquality)

# depthDataQuality (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The overall quality of the depth map.

## Declaration

```swift
var depthDataQuality: AVDepthData.Quality { get }
```

<a id="Discussion"></a>

## Discussion

A device typically generates depth data maps by comparing images and calculating disparity. If features are lacking in either input image, it may be difficult to find matching key points, resulting in a depth data map with substantial holes. These holes can be filled with depth data filtering, but still may produce a map of overall poor quality.

If a depth data map suffers from insufficient features, the capture system marks it as [AVDepthData.Quality.low](quality/low.md) quality, indicating that the depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene. A depth map with [AVDepthData.Quality.high](quality/high.md) quality is feature-rich, contains a high level of detail, making it a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.

## See Also

### Evaluating depth data

- [isDepthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [depthDataAccuracy](depthdataaccuracy.md): The general accuracy of depth data map values.
- [AVDepthData.Accuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [AVDepthData.Quality](quality.md): Values indicating the overall quality of a depth data map.

# depthDataQuality (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The overall quality of the depth map.

## Declaration

```objectivec
@property (readonly) AVDepthDataQuality depthDataQuality;
```

<a id="Discussion"></a>

## Discussion

A device typically generates depth data maps by comparing images and calculating disparity. If features are lacking in either input image, it may be difficult to find matching key points, resulting in a depth data map with substantial holes. These holes can be filled with depth data filtering, but still may produce a map of overall poor quality.

If a depth data map suffers from insufficient features, the capture system marks it as [AVDepthDataQualityLow](quality/low.md) quality, indicating that the depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene. A depth map with [AVDepthDataQualityHigh](quality/high.md) quality is feature-rich, contains a high level of detail, making it a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.

## See Also

### Evaluating depth data

- [depthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [depthDataAccuracy](depthdataaccuracy.md): The general accuracy of depth data map values.
- [AVDepthDataAccuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [AVDepthDataQuality](quality.md): Values indicating the overall quality of a depth data map.
