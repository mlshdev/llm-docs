> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/cadence](https://developer.apple.com/documentation/vision/vnvideoprocessor/cadence)

# VNVideoProcessor.Cadence (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines the cadence at which to process video.

## Declaration

```swift
class Cadence
```

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNVideoProcessor.FrameRateCadence](frameratecadence.md)
- [VNVideoProcessor.TimeIntervalCadence](timeintervalcadence.md)

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
- [VNVideoProcessor.FrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessor.TimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.

# VNVideoProcessorCadence (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines the cadence at which to process video.

## Declaration

```objectivec
@interface VNVideoProcessorCadence : NSObject
```

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNVideoProcessorFrameRateCadence](frameratecadence.md)
- [VNVideoProcessorTimeIntervalCadence](timeintervalcadence.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessorFrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessorTimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.
