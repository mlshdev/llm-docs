> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/analyze(with:)](https://developer.apple.com/documentation/vision/vnvideoprocessor/analyze(with:))

# analyze(with:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Analyzes the specifed time range of the video content.

> Use [analyze(\_:)](analyze%28__%29.md) instead.

## Declaration

```swift
func analyze(with timeRange: CMTimeRange) throws
```

## Parameters

- `timeRange`: The time range to analyze. The value specified must be within the time range of the video asset.

<a id="Discussion"></a>

## Discussion

The system executes this method synchronously, so you should typically call it from a separate dispatch queue. It returns when the video processor finishes analyzing the specified time range, or if an error prevented the processing.

## See Also

### Performing Requests

- [addRequest(\_:processingOptions:)](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessor.RequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest(\_:)](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel()](cancel%28%29.md): Cancels the video processing.
- [add(\_:withProcessingOptions:)](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.

# analyzeWithTimeRange:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Analyzes the specifed time range of the video content.

> Use [analyzeTimeRange:error:](analyze%28__%29.md) instead.

## Declaration

```objectivec
- (BOOL) analyzeWithTimeRange:(CMTimeRange) timeRange error:(NSError **) error;
```

## Parameters

- `timeRange`: The time range to analyze. The value specified must be within the time range of the video asset.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

The system executes this method synchronously, so you should typically call it from a separate dispatch queue. It returns when the video processor finishes analyzing the specified time range, or if an error prevented the processing.

## See Also

### Performing Requests

- [addRequest:processingOptions:error:](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessorRequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest:error:](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel](cancel%28%29.md): Cancels the video processing.
- [addRequest:withProcessingOptions:error:](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
