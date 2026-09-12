> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnconnectionerror](https://developer.apple.com/documentation/imagecapturecore/icreturnconnectionerror)

# ICReturnConnectionError

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A connection error returned from ImageCaptureCore.

## Declaration

```swift
struct ICReturnConnectionError
```

## Topics

### Error Domain

- [ICErrorDomain](icerrordomain.md): An error returned by the ImageCaptureCore framework.

### Error Codes

- [closedSessionSuddenly](icreturnconnectionerror/closedsessionsuddenly.md): Device closed session without request.
- [driverExited](icreturnconnectionerror/driverexited.md): Device driver exited without request.
- [ejectFailed](icreturnconnectionerror/ejectfailed.md): Device reports eject has failed.
- [ejectedSuddenly](icreturnconnectionerror/ejectedsuddenly.md): Device ejected without request.
- [failedToOpen](icreturnconnectionerror/failedtoopen.md): Failed to open a connection to the device.
- [failedToOpenDevice](icreturnconnectionerror/failedtoopendevice.md): Failed to open the device.
- [sessionAlreadyOpen](icreturnconnectionerror/sessionalreadyopen.md): Device reports session is already open.
- [ICReturnConnectionError.Code](icreturnconnectionerror/code.md)

### Type Properties

- [errorDomain](icreturnconnectionerror/errordomain.md)
- [notAuthorizedToOpenDevice](icreturnconnectionerror/notauthorizedtoopendevice.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ICReturn](icreturn.md)
- [ICLegacyReturn](iclegacyreturn.md)
- [ICReturnDownloadError](icreturndownloaderror.md): A download error returned from ImageCaptureCore.
- [ICReturnMetadataError](icreturnmetadataerror.md): A metadata error returned from ImageCaptureCore.
- [ICReturnObjectError](icreturnobjecterror.md): An object error returned from ImageCaptureCore.
- [ICReturnPTPDeviceError](icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
- [ICReturnThumbnailError](icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.
