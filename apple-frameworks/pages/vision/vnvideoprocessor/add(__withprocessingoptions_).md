> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/add(_:withprocessingoptions:)](https://developer.apple.com/documentation/vision/vnvideoprocessor/add(_:withprocessingoptions:))

# add(\_:withProcessingOptions:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a Vision request to perform with the specified configuration.

> Use [addRequest(\_:processingOptions:)](addrequest%28__processingoptions_%29.md) instead.

## Declaration

```swift
func add(_ request: VNRequest, withProcessingOptions processingOptions: [VNVideoProcessingOption : Any] = [:]) throws
```

## Parameters

- `request`: The request to add to the processing queue.
- `processingOptions`: The options to use for processing.

## Topics

### Video Processing Options

- [VNVideoProcessingOption](../vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

## See Also

### Performing Requests

- [addRequest(\_:processingOptions:)](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessor.RequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest(\_:)](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel()](cancel%28%29.md): Cancels the video processing.
- [analyze(with:)](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

# addRequest:withProcessingOptions:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a Vision request to perform with the specified configuration.

> Use [addRequest:processingOptions:error:](addrequest%28__processingoptions_%29.md) instead.

## Declaration

```objectivec
- (BOOL) addRequest:(VNRequest *) request withProcessingOptions:(NSDictionary<NSString *,id> *) processingOptions error:(NSError **) error;
```

## Parameters

- `request`: The request to add to the processing queue.
- `processingOptions`: The options to use for processing.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Topics

### Video Processing Options

- [VNVideoProcessingOption](../vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

## See Also

### Performing Requests

- [addRequest:processingOptions:error:](addrequest%28__processingoptions_%29.md): Adds a request with processing options to the video processor.
- [VNVideoProcessorRequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest:error:](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel](cancel%28%29.md): Cancels the video processing.
- [analyzeWithTimeRange:error:](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.
