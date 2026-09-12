> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnvideoprocessor/addrequest(_:processingoptions:)](https://developer.apple.com/documentation/vision/vnvideoprocessor/addrequest(_:processingoptions:))

# addRequest(\_:processingOptions:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a request with processing options to the video processor.

## Declaration

```swift
func addRequest(_ request: VNRequest, processingOptions: VNVideoProcessor.RequestProcessingOptions) throws
```

## Parameters

- `request`: The Vision request to add.
- `processingOptions`: The processing options to apply.

<a id="Discussion"></a>

## Discussion

Call this method either before calling [analyze(\_:)](analyze%28__%29.md) or from within the completion handler of an already associated request.

## See Also

### Performing Requests

- [VNVideoProcessor.RequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest(\_:)](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyze(\_:)](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel()](cancel%28%29.md): Cancels the video processing.
- [add(\_:withProcessingOptions:)](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyze(with:)](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.

# addRequest:processingOptions:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Adds a request with processing options to the video processor.

## Declaration

```objectivec
- (BOOL) addRequest:(VNRequest *) request processingOptions:(VNVideoProcessorRequestProcessingOptions *) processingOptions error:(NSError **) error;
```

## Parameters

- `request`: The Vision request to add.
- `processingOptions`: The processing options to apply.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Call this method either before calling [analyzeTimeRange:error:](analyze%28__%29.md) or from within the completion handler of an already associated request.

## See Also

### Performing Requests

- [VNVideoProcessorRequestProcessingOptions](requestprocessingoptions.md): An object that defines a video processor’s configuration options.
- [removeRequest:error:](removerequest%28__%29.md): Removes a Vision request from the video processor’s request queue.
- [analyzeTimeRange:error:](analyze%28__%29.md): Analyzes a time range of video content.
- [cancel](cancel%28%29.md): Cancels the video processing.
- [addRequest:withProcessingOptions:error:](add%28__withprocessingoptions_%29.md): Deprecated. Adds a Vision request to perform with the specified configuration.
- [analyzeWithTimeRange:error:](analyze%28with_%29.md): Deprecated. Analyzes the specifed time range of the video content.
