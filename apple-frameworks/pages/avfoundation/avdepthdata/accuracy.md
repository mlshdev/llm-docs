> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/accuracy](https://developer.apple.com/documentation/avfoundation/avdepthdata/accuracy)

# AVDepthData.Accuracy (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values indicating the general accuracy of a depth data map.

## Declaration

```swift
enum Accuracy
```

<a id="overview"></a>

## Overview

The accuracy of a depth data map is highly dependent on the camera calibration data used to generate it. If the camera’s focal length cannot be precisely determined at the time of capture, a scaling error in the z (depth) plane is introduced. If the camera’s optical center can’t be precisely determined at capture time, a principal point error is introduced, leading to an offset error in the disparity estimate.

These values report the accuracy of a map’s values with respect to its reported units.

## Topics

### Accuracy values

- [AVDepthData.Accuracy.relative](accuracy/relative.md): Values within the depth data map are usable for foreground/background separation, but are not absolutely accurate in the physical world.
- [AVDepthData.Accuracy.absolute](accuracy/absolute.md): Values within the depth map are absolutely accurate within the physical world.

### Initializers

- [init(rawValue:)](accuracy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Evaluating depth data

- [isDepthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [depthDataAccuracy](depthdataaccuracy.md): The general accuracy of depth data map values.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.
- [AVDepthData.Quality](quality.md): Values indicating the overall quality of a depth data map.

# AVDepthDataAccuracy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values indicating the general accuracy of a depth data map.

## Declaration

```objectivec
enum AVDepthDataAccuracy : NSInteger;
```

<a id="overview"></a>

## Overview

The accuracy of a depth data map is highly dependent on the camera calibration data used to generate it. If the camera’s focal length cannot be precisely determined at the time of capture, a scaling error in the z (depth) plane is introduced. If the camera’s optical center can’t be precisely determined at capture time, a principal point error is introduced, leading to an offset error in the disparity estimate.

These values report the accuracy of a map’s values with respect to its reported units.

## Topics

### Accuracy values

- [AVDepthDataAccuracyRelative](accuracy/relative.md): Values within the depth data map are usable for foreground/background separation, but are not absolutely accurate in the physical world.
- [AVDepthDataAccuracyAbsolute](accuracy/absolute.md): Values within the depth map are absolutely accurate within the physical world.

## See Also

### Evaluating depth data

- [depthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [depthDataAccuracy](depthdataaccuracy.md): The general accuracy of depth data map values.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.
- [AVDepthDataQuality](quality.md): Values indicating the overall quality of a depth data map.
