> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/requestprocessingoptions](https://developer.apple.com/documentation/vision/vnvideoprocessor/requestprocessingoptions)

# VNVideoProcessor.RequestProcessingOptions (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a video processor’s configuration options.

## Declaration

```swift
class RequestProcessingOptions
```

## Topics

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessor.Cadence](cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessor.FrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessor.TimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Performing Requests

- [addRequest(\_:processingOptions:)](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [removeRequest(\_:)](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel()](cancel%28%29.md): Cancels the video processing.
- [add(\_:withProcessingOptions:)](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyze(with:)](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

# VNVideoProcessorRequestProcessingOptions (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that defines a video processor’s configuration options.

## Declaration

```objectivec
@interface VNVideoProcessorRequestProcessingOptions : NSObject
```

## Topics

### Configuring Options

- [cadence](requestprocessingoptions/cadence.md): The cadence the video processor maintains to process the request.
- [VNVideoProcessorCadence](cadence.md): An object that defines the cadence at which to process video.
- [VNVideoProcessorFrameRateCadence](frameratecadence.md): An object that defines a frame-based cadence for processing a video stream.
- [VNVideoProcessorTimeIntervalCadence](timeintervalcadence.md): An object that defines a time-based cadence for processing a video stream.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Performing Requests

- [addRequest:processingOptions:error:](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [removeRequest:error:](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel](cancel%28%29.md): Cancels the video processing.
- [addRequest:withProcessingOptions:error:](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyzeWithTimeRange:error:](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.
