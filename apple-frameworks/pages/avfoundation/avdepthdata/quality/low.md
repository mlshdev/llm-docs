> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/quality/low](https://developer.apple.com/documentation/avfoundation/avdepthdata/quality/low)

# AVDepthData.Quality.low (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene.

## Declaration

```swift
case low
```

<a id="Discussion"></a>

## Discussion

Low quality occurs when the process generating the depth map (such as inference of depth from disparity on a device with dual cameras) cannot find enough distinct key points in the input images, resulting in a large number of invalid depth values in the (pre-filtered) map.

## See Also

### Depth quality values

- [AVDepthData.Quality.high](high.md): The depth map is a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.

# AVDepthDataQualityLow (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The depth map is a poor candidate for rendering high-quality depth effects or reconstructing a 3D scene.

## Declaration

```objectivec
AVDepthDataQualityLow
```

<a id="Discussion"></a>

## Discussion

Low quality occurs when the process generating the depth map (such as inference of depth from disparity on a device with dual cameras) cannot find enough distinct key points in the input images, resulting in a large number of invalid depth values in the (pre-filtered) map.

## See Also

### Depth quality values

- [AVDepthDataQualityHigh](high.md): The depth map is a good candidate for rendering high-quality depth effects or reconstructing a 3D scene.
