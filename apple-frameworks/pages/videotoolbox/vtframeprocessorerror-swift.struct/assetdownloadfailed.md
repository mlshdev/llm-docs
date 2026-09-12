> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorerror-swift.struct/assetdownloadfailed](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorerror-swift.struct/assetdownloadfailed)

# assetDownloadFailed

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

## Declaration

```swift
static var assetDownloadFailed: VTFrameProcessorError.Code { get }
```

## See Also

### Errors

- [fatalError](fatalerror.md): A fatal error occurred during processing.
- [initializationFailed](initializationfailed.md): The session failed to initialize the processing pipeline.
- [invalidFrameTiming](invalidframetiming.md): A provided frame object has a presentation time stamp which isn’t supported by the processor.
- [invalidParameterError](invalidparametererror.md): A provided parameter isn’t valid.
- [memoryAllocationFailure](memoryallocationfailure.md): The session or processor is unable to allocate the required memory.
- [processingError](processingerror.md): The processor encountered an issue that prevents it from processing the provided frame.
- [revisionNotSupported](revisionnotsupported.md): The specified revision isn’t supported by the configured processor.
- [sessionAlreadyActive](sessionalreadyactive.md): An attempt is made to start a session that is already started.
- [sessionLevelError](sessionlevelerror.md): The processing failed and current session should be stopped.
- [sessionNotStarted](sessionnotstarted.md): The session is used to process frames without being started.
- [unknownError](unknownerror.md): The processor failed for an unknown reason.
- [unsupportedInput](unsupportedinput.md): One or more frames is in a format which isn’t supported by the processor.
- [unsupportedResolution](unsupportedresolution.md): The processor failed due to an unsupported resolution.
