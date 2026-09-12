> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/cancel()](https://developer.apple.com/documentation/vision/vnvideoprocessor/cancel())

# cancel() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Cancels the video processing.

## Declaration

```swift
func cancel()
```

## See Also

### Performing Requests

- [addRequest(\_:processingOptions:)](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessor.RequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest(\_:)](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](analyze%28__%29.md): Analyzes a time range of video content.
- [add(\_:withProcessingOptions:)](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyze(with:)](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

# cancel (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Cancels the video processing.

## Declaration

```objectivec
- (void) cancel;
```

## See Also

### Performing Requests

- [addRequest:processingOptions:error:](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessorRequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest:error:](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](analyze%28__%29.md): Analyzes a time range of video content.
- [addRequest:withProcessingOptions:error:](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyzeWithTimeRange:error:](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.
