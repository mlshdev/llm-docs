> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorerror-swift.struct/code/initializationfailed](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorerror-swift.struct/code/initializationfailed)

# VTFrameProcessorError.Code.initializationFailed (Swift)

**Framework:** Video Toolbox  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The session failed to initialize the processing pipeline.

## Declaration

```swift
case initializationFailed
```

## See Also

### Enumeration Cases

- [VTFrameProcessorError.Code.fatalError](fatalerror.md): A fatal error occurred during processing.
- [VTFrameProcessorError.Code.invalidFrameTiming](invalidframetiming.md): A provided frame object has a presentation time stamp which isn’t supported by the processor.
- [VTFrameProcessorError.Code.invalidParameterError](invalidparametererror.md): A provided parameter isn’t valid.
- [VTFrameProcessorError.Code.memoryAllocationFailure](memoryallocationfailure.md): The session or processor is unable to allocate the required memory.
- [VTFrameProcessorError.Code.processingError](processingerror.md): The processor encountered an issue that prevents it from processing the provided frame.
- [VTFrameProcessorError.Code.revisionNotSupported](revisionnotsupported.md): The specified revision isn’t supported by the configured processor.
- [VTFrameProcessorError.Code.sessionAlreadyActive](sessionalreadyactive.md): An attempt is made to start a session that is already started.
- [VTFrameProcessorError.Code.sessionLevelError](sessionlevelerror.md): The processing failed and current session should be stopped.
- [VTFrameProcessorError.Code.sessionNotStarted](sessionnotstarted.md): The session is used to process frames without being started.
- [VTFrameProcessorError.Code.unknownError](unknownerror.md): The processor failed for an unknown reason.
- [VTFrameProcessorError.Code.unsupportedInput](unsupportedinput.md): One or more frames is in a format which isn’t supported by the processor.
- [VTFrameProcessorError.Code.unsupportedResolution](unsupportedresolution.md): The processor failed due to an unsupported resolution.

# VTFrameProcessorInitializationFailed (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The session failed to initialize the processing pipeline.

## Declaration

```objectivec
VTFrameProcessorInitializationFailed
```

## See Also

### Enumeration Cases

- [VTFrameProcessorFatalError](fatalerror.md): A fatal error occurred during processing.
- [VTFrameProcessorInvalidFrameTiming](invalidframetiming.md): A provided frame object has a presentation time stamp which isn’t supported by the processor.
- [VTFrameProcessorInvalidParameterError](invalidparametererror.md): A provided parameter isn’t valid.
- [VTFrameProcessorMemoryAllocationFailure](memoryallocationfailure.md): The session or processor is unable to allocate the required memory.
- [VTFrameProcessorProcessingError](processingerror.md): The processor encountered an issue that prevents it from processing the provided frame.
- [VTFrameProcessorRevisionNotSupported](revisionnotsupported.md): The specified revision isn’t supported by the configured processor.
- [VTFrameProcessorSessionAlreadyActive](sessionalreadyactive.md): An attempt is made to start a session that is already started.
- [VTFrameProcessorSessionLevelError](sessionlevelerror.md): The processing failed and current session should be stopped.
- [VTFrameProcessorSessionNotStarted](sessionnotstarted.md): The session is used to process frames without being started.
- [VTFrameProcessorUnknownError](unknownerror.md): The processor failed for an unknown reason.
- [VTFrameProcessorUnsupportedInput](unsupportedinput.md): One or more frames is in a format which isn’t supported by the processor.
- [VTFrameProcessorUnsupportedResolution](unsupportedresolution.md): The processor failed due to an unsupported resolution.
