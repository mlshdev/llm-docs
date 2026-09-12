> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/timeintervalcadence](https://developer.apple.com/documentation/vision/vnvideoprocessor/timeintervalcadence)

# VNVideoProcessor.TimeIntervalCadence (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a time-based cadence for processing a video stream.

## Declaration

```swift
class TimeIntervalCadence
```

## Topics

### Creating a Cadence

- [init(\_:)](timeintervalcadence/init%28__%29.md): Creates a new time-based cadence with a time interval.
- [init(timeInterval:)](timeintervalcadence/init%28timeinterval_%29.md)

### Inspecting the Time Interval

- [timeInterval](timeintervalcadence/timeinterval.md): The time interval of the cadence.

## Relationships

### Inherits From

- [VNVideoProcessor.Cadence](cadence.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessor.Cadence](cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessor.FrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.

# VNVideoProcessorTimeIntervalCadence (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a time-based cadence for processing a video stream.

## Declaration

```objectivec
@interface VNVideoProcessorTimeIntervalCadence : VNVideoProcessorCadence
```

## Topics

### Creating a Cadence

- [initWithTimeInterval:](timeintervalcadence/init%28__%29.md): Creates a new time-based cadence with a time interval.

### Inspecting the Time Interval

- [timeInterval](timeintervalcadence/timeinterval.md): The time interval of the cadence.

## Relationships

### Inherits From

- [VNVideoProcessorCadence](cadence.md)

## See Also

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessorCadence](cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessorFrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
