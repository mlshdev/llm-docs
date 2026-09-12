> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/frameratecadence](https://developer.apple.com/documentation/vision/vnvideoprocessor/frameratecadence)

# VNVideoProcessor.FrameRateCadence (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a frame-based cadence for processing a video stream.

## Declaration

```swift
class FrameRateCadence
```

## Topics

### Creating a Cadence

- [init(\_:)](frameratecadence/init%28__%29.md): Creates a new frame-based cadence with a frame rate.
- [init(frameRate:)](frameratecadence/init%28framerate_%29.md)

### Inspecting the Frame Rate

- [frameRate](frameratecadence/framerate.md): The frame rate at which to process video.

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
- [VNVideoProcessor.TimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.

# VNVideoProcessorFrameRateCadence (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a frame-based cadence for processing a video stream.

## Declaration

```objectivec
@interface VNVideoProcessorFrameRateCadence : VNVideoProcessorCadence
```

## Topics

### Creating a Cadence

- [initWithFrameRate:](frameratecadence/init%28__%29.md): Creates a new frame-based cadence with a frame rate.

### Inspecting the Frame Rate

- [frameRate](frameratecadence/framerate.md): The frame rate at which to process video.

## Relationships

### Inherits From

- [VNVideoProcessorCadence](cadence.md)

## See Also

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessorCadence](cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessorTimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.
