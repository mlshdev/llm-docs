> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessingoption](https://developer.apple.com/documentation/vision/vnvideoprocessingoption)

# VNVideoProcessingOption (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Options to pass to the video processor when adding requests.

## Declaration

```swift
struct VNVideoProcessingOption
```

## Topics

### Options

- [frameCadence](vnvideoprocessingoption/framecadence.md): Deprecated. A value that indicates the video frame cadence at which to perform the video processing.
- [timeInterval](vnvideoprocessingoption/timeinterval.md): Deprecated. A value that indicates that the video processor should perform a request every *n*-seconds.

### Initializers

- [init(rawValue:)](vnvideoprocessingoption/init%28rawvalue_%29.md): Deprecated. Creates an option with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.

# VNVideoProcessingOption (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Options to pass to the video processor when adding requests.

## Declaration

```objectivec
typedef NSString * VNVideoProcessingOption;
```

## Topics

### Options

- [VNVideoProcessingOptionFrameCadence](vnvideoprocessingoption/framecadence.md): Deprecated. A value that indicates the video frame cadence at which to perform the video processing.
- [VNVideoProcessingOptionTimeInterval](vnvideoprocessingoption/timeinterval.md): Deprecated. A value that indicates that the video processor should perform a request every *n*-seconds.

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
