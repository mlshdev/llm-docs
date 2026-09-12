> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnerrorcode](https://developer.apple.com/documentation/vision/vnerrorcode)

# VNErrorCode (Swift)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify errors from the framework.

## Declaration

```swift
enum VNErrorCode
```

## Topics

### Error Codes

- [VNErrorCode.turiCoreErrorCode](vnerrorcode/turicoreerrorcode.md): An error occurred during Create ML training due to an invalid transformation or image.
- [VNErrorCode.OK](vnerrorcode/ok.md): The operation finished without error.
- [VNErrorCode.dataUnavailable](vnerrorcode/dataunavailable.md): The data isn’t available.
- [VNErrorCode.internalError](vnerrorcode/internalerror.md): An internal error occurred within the framework.
- [VNErrorCode.invalidArgument](vnerrorcode/invalidargument.md): An app passed an invalid parameter to a request.
- [VNErrorCode.invalidFormat](vnerrorcode/invalidformat.md): The format of the image is invalid.
- [VNErrorCode.invalidImage](vnerrorcode/invalidimage.md): The image is invalid.
- [VNErrorCode.invalidModel](vnerrorcode/invalidmodel.md): The Core ML model is incompatible with the request.
- [VNErrorCode.invalidOperation](vnerrorcode/invalidoperation.md): An app requested an unsupported operation.
- [VNErrorCode.invalidOption](vnerrorcode/invalidoption.md): An app specified an invalid option on a request.
- [VNErrorCode.ioError](vnerrorcode/ioerror.md): An I/O error for an image, image sequence, or Core ML model.
- [VNErrorCode.missingOption](vnerrorcode/missingoption.md): A request is missing a required option.
- [VNErrorCode.notImplemented](vnerrorcode/notimplemented.md): The method isn’t implemented in the underlying model.
- [VNErrorCode.operationFailed](vnerrorcode/operationfailed.md): The requested operation failed.
- [VNErrorCode.outOfBoundsError](vnerrorcode/outofboundserror.md): An app attempted to access data that’s out-of-bounds.
- [VNErrorCode.outOfMemory](vnerrorcode/outofmemory.md): The system doesn’t have enough memory to complete the request.
- [VNErrorCode.requestCancelled](vnerrorcode/requestcancelled.md): An app canceled the request.
- [VNErrorCode.resourceCorrupted](vnerrorcode/resourcecorrupted.md)
- [VNErrorCode.resourceUnavailable](vnerrorcode/resourceunavailable.md)
- [VNErrorCode.timeStampNotFound](vnerrorcode/timestampnotfound.md): The system can’t find a timestamp.
- [VNErrorCode.unknownError](vnerrorcode/unknownerror.md): An unidentified error occurred.
- [VNErrorCode.unsupportedRevision](vnerrorcode/unsupportedrevision.md): An app specified an unsupported request revision.
- [VNErrorCode.unsupportedRequest](vnerrorcode/unsupportedrequest.md): An app attempted an unsupported request.
- [VNErrorCode.unsupportedComputeDevice](vnerrorcode/unsupportedcomputedevice.md): An app requested an unsupported compute device.
- [VNErrorCode.unsupportedComputeStage](vnerrorcode/unsupportedcomputestage.md): An app requested an unsupported compute stage.
- [VNErrorCode.timeout](vnerrorcode/timeout.md): The requested operation timed out.

### Creating an Error Code

- [init(rawValue:)](vnerrorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [VNErrorDomain](vnerrordomain.md): The domain of errors that the framework generates.

# VNErrorCode (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify errors from the framework.

## Declaration

```objectivec
enum VNErrorCode : NSInteger;
```

## Topics

### Error Codes

- [VNErrorTuriCoreErrorCode](vnerrorcode/turicoreerrorcode.md): An error occurred during Create ML training due to an invalid transformation or image.
- [VNErrorOK](vnerrorcode/ok.md): The operation finished without error.
- [VNErrorDataUnavailable](vnerrorcode/dataunavailable.md): The data isn’t available.
- [VNErrorInternalError](vnerrorcode/internalerror.md): An internal error occurred within the framework.
- [VNErrorInvalidArgument](vnerrorcode/invalidargument.md): An app passed an invalid parameter to a request.
- [VNErrorInvalidFormat](vnerrorcode/invalidformat.md): The format of the image is invalid.
- [VNErrorInvalidImage](vnerrorcode/invalidimage.md): The image is invalid.
- [VNErrorInvalidModel](vnerrorcode/invalidmodel.md): The Core ML model is incompatible with the request.
- [VNErrorInvalidOperation](vnerrorcode/invalidoperation.md): An app requested an unsupported operation.
- [VNErrorInvalidOption](vnerrorcode/invalidoption.md): An app specified an invalid option on a request.
- [VNErrorIOError](vnerrorcode/ioerror.md): An I/O error for an image, image sequence, or Core ML model.
- [VNErrorMissingOption](vnerrorcode/missingoption.md): A request is missing a required option.
- [VNErrorNotImplemented](vnerrorcode/notimplemented.md): The method isn’t implemented in the underlying model.
- [VNErrorOperationFailed](vnerrorcode/operationfailed.md): The requested operation failed.
- [VNErrorOutOfBoundsError](vnerrorcode/outofboundserror.md): An app attempted to access data that’s out-of-bounds.
- [VNErrorOutOfMemory](vnerrorcode/outofmemory.md): The system doesn’t have enough memory to complete the request.
- [VNErrorRequestCancelled](vnerrorcode/requestcancelled.md): An app canceled the request.
- [VNErrorResourceCorrupted](vnerrorcode/resourcecorrupted.md)
- [VNErrorResourceUnavailable](vnerrorcode/resourceunavailable.md)
- [VNErrorTimeStampNotFound](vnerrorcode/timestampnotfound.md): The system can’t find a timestamp.
- [VNErrorUnknownError](vnerrorcode/unknownerror.md): An unidentified error occurred.
- [VNErrorUnsupportedRevision](vnerrorcode/unsupportedrevision.md): An app specified an unsupported request revision.
- [VNErrorUnsupportedRequest](vnerrorcode/unsupportedrequest.md): An app attempted an unsupported request.
- [VNErrorUnsupportedComputeDevice](vnerrorcode/unsupportedcomputedevice.md): An app requested an unsupported compute device.
- [VNErrorUnsupportedComputeStage](vnerrorcode/unsupportedcomputestage.md): An app requested an unsupported compute stage.
- [VNErrorTimeout](vnerrorcode/timeout.md): The requested operation timed out.

## See Also

### Errors

- [VNErrorDomain](vnerrordomain.md): The domain of errors that the framework generates.
