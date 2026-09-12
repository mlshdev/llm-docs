> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/quality](https://developer.apple.com/documentation/avfoundation/avdepthdata/quality)

# AVDepthData.Quality (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values indicating the overall quality of a depth data map.

## Declaration

```swift
enum Quality
```

## Topics

### Depth quality values

- [AVDepthData.Quality.low](quality/low.md): The depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene.
- [AVDepthData.Quality.high](quality/high.md): The depth map is a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.

### Initializers

- [init(rawValue:)](quality/init%28rawvalue_%29.md)

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
- [AVDepthData.Accuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.

# AVDepthDataQuality (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values indicating the overall quality of a depth data map.

## Declaration

```objectivec
enum AVDepthDataQuality : NSInteger;
```

## Topics

### Depth quality values

- [AVDepthDataQualityLow](quality/low.md): The depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene.
- [AVDepthDataQualityHigh](quality/high.md): The depth map is a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.

## See Also

### Evaluating depth data

- [depthDataFiltered](isdepthdatafiltered.md): A Boolean value indicating whether the depth map contains temporally smoothed data.
- [depthDataAccuracy](depthdataaccuracy.md): The general accuracy of depth data map values.
- [AVDepthDataAccuracy](accuracy.md): Values indicating the general accuracy of a depth data map.
- [depthDataQuality](depthdataquality.md): The overall quality of the depth map.
