> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionerror](https://developer.apple.com/documentation/vision/visionerror)

# VisionError

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The errors that the framework produces.

## Declaration

```swift
enum VisionError
```

## Topics

### Getting the error

- [VisionError.internalError(\_:)](visionerror/internalerror%28__%29.md): An error that indicates the framework produces an internal error.
- [VisionError.ioError(\_:)](visionerror/ioerror%28__%29.md): An error that indicates an I/O problem for an image, image sequence, or Core ML model.
- [VisionError.operationFailed(\_:)](visionerror/operationfailed%28__%29.md): An error that indicates the operation you request fails.
- [VisionError.outOfBoundsError(\_:)](visionerror/outofboundserror%28__%29.md): An error that indicates an app attempts to access data that’s out-of-bounds.
- [VisionError.outOfMemory(\_:)](visionerror/outofmemory%28__%29.md): An error that indicates there’s not enough memory to perform the operation.
- [VisionError.pixelBufferCreationFailed(\_:)](visionerror/pixelbuffercreationfailed%28__%29.md): An error that indicates a problem occurs when creating a pixel buffer.
- [VisionError.requestCancelled(\_:)](visionerror/requestcancelled%28__%29.md): An error that indicates an app cancels the request.
- [VisionError.timeStampNotFound(\_:)](visionerror/timestampnotfound%28__%29.md): An error that indicates the system can’t find a timestamp.
- [VisionError.timeout(\_:)](visionerror/timeout%28__%29.md): An error that indicates an operation times out.

### Getting the invalid error

- [VisionError.invalidArgument(\_:)](visionerror/invalidargument%28__%29.md): An error that indicates a request has an invalid value.
- [VisionError.invalidFormat(\_:)](visionerror/invalidformat%28__%29.md): An error that indicates a request has data that’s formatted incorrectly.
- [VisionError.invalidImage(\_:)](visionerror/invalidimage%28__%29.md): An error that indicates the input image is invalid.
- [VisionError.invalidModel(\_:)](visionerror/invalidmodel%28__%29.md): An error that indicates the Core ML model isn’t compatible with the request.
- [VisionError.invalidOperation(\_:)](visionerror/invalidoperation%28__%29.md): An error that indicates an app requests an unsupported operation.

### Getting the data-unavailable error

- [VisionError.dataUnavailable(\_:)](visionerror/dataunavailable%28__%29.md): An error that indicates the required data is missing.

### Getting the unsupported error

- [VisionError.unsupportedComputeDevice(\_:)](visionerror/unsupportedcomputedevice%28__%29.md): An error that indicates an app requests a compute device the framework doesn’t support.
- [VisionError.unsupportedComputeStage(\_:)](visionerror/unsupportedcomputestage%28__%29.md): An error that indicates an app requests a compute stage the framework doesn’t support.
- [VisionError.unsupportedRequest(\_:)](visionerror/unsupportedrequest%28__%29.md): An error that indicates an app attempts a request the framework doesn’t support.
- [VisionError.unsupportedRevision(\_:)](visionerror/unsupportedrevision%28__%29.md): An error that indicates an app specifies a request revision the framework doesn’t support.

### Getting the error description

- [description](visionerror/description.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
