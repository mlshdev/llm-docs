> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/depthdataaccuracy](https://developer.apple.com/documentation/avfoundation/avdepthdata/depthdataaccuracy)

# depthDataAccuracy (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The general accuracy of depth data map values.

## Declaration

```swift
var depthDataAccuracy: AVDepthData.Accuracy { get }
```

<a id="Discussion"></a>

## Discussion

The accuracy of a depth data map is highly dependent on the camera calibration data used to generate it. If the camera’s focal length cannot be precisely determined at the time of capture, a scaling error in the z (depth) plane is introduced. If the camera’s optical center can’t be precisely determined at capture time, a principal point error is introduced, leading to an offset error in the disparity estimate. [AVDepthData.Accuracy](accuracy.md) constants report the accuracy of a map’s values with respect to its reported units.

## See Also

### Evaluating depth data

- [isDepthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [AVDepthData.Accuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.
- [AVDepthData.Quality](quality.md): Values indicating the overall quality of a depth data map.

# depthDataAccuracy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The general accuracy of depth data map values.

## Declaration

```objectivec
@property (readonly) AVDepthDataAccuracy depthDataAccuracy;
```

<a id="Discussion"></a>

## Discussion

The accuracy of a depth data map is highly dependent on the camera calibration data used to generate it. If the camera’s focal length cannot be precisely determined at the time of capture, a scaling error in the z (depth) plane is introduced. If the camera’s optical center can’t be precisely determined at capture time, a principal point error is introduced, leading to an offset error in the disparity estimate. [AVDepthDataAccuracy](accuracy.md) constants report the accuracy of a map’s values with respect to its reported units.

## See Also

### Evaluating depth data

- [depthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [AVDepthDataAccuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.
- [AVDepthDataQuality](quality.md): Values indicating the overall quality of a depth data map.
