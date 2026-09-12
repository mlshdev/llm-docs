> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor](https://developer.apple.com/documentation/vision/vnvideoprocessor)

# VNVideoProcessor (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that performs offline analysis of video content.

## Declaration

```swift
class VNVideoProcessor
```

## Topics

### Creating a Video Processor

- [init(URL:)](vnvideoprocessor/init%28url_%29-38vj9.md)
- [init(url:)](vnvideoprocessor/init%28url_%29-94b7.md): Creates a video processor to perform Vision requests against the specified video asset.

### Performing Requests

- [addRequest(\_:processingOptions:)](vnvideoprocessor/addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessor.RequestProcessingOptions](vnvideoprocessor/requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest(\_:)](vnvideoprocessor/removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](vnvideoprocessor/analyze%28__%29.md): Analyzes a time range of video content.
- [cancel()](vnvideoprocessor/cancel%28%29.md): Cancels the video processing.
- [add(\_:withProcessingOptions:)](vnvideoprocessor/add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyze(with:)](vnvideoprocessor/analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

# VNVideoProcessor (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that performs offline analysis of video content.

## Declaration

```objectivec
@interface VNVideoProcessor : NSObject
```

## Topics

### Creating a Video Processor

- [initWithURL:](vnvideoprocessor/init%28url_%29-94b7.md): Creates a video processor to perform Vision requests against the specified video asset.

### Performing Requests

- [addRequest:processingOptions:error:](vnvideoprocessor/addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessorRequestProcessingOptions](vnvideoprocessor/requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest:error:](vnvideoprocessor/removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](vnvideoprocessor/analyze%28__%29.md): Analyzes a time range of video content.
- [cancel](vnvideoprocessor/cancel%28%29.md): Cancels the video processing.
- [addRequest:withProcessingOptions:error:](vnvideoprocessor/add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyzeWithTimeRange:error:](vnvideoprocessor/analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.
