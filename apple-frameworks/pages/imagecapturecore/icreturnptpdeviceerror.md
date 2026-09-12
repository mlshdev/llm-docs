> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnptpdeviceerror](https://developer.apple.com/documentation/imagecapturecore/icreturnptpdeviceerror)

# ICReturnPTPDeviceError

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A PTP device error returned from ImageCaptureCore.

## Declaration

```swift
struct ICReturnPTPDeviceError
```

## Topics

### Error Domain

- [ICErrorDomain](icerrordomain.md): An error returned by the ImageCaptureCore framework.

### Error Codes

- [failedToSendCommand](icreturnptpdeviceerror/failedtosendcommand.md): Sending a PTP command failed.
- [ICReturnPTPDeviceError.Code](icreturnptpdeviceerror/code.md)

### Type Properties

- [errorDomain](icreturnptpdeviceerror/errordomain.md)
- [notAuthorizedToSendCommand](icreturnptpdeviceerror/notauthorizedtosendcommand.md)

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
- [ICReturnConnectionError](icreturnconnectionerror.md): A connection error returned from ImageCaptureCore.
- [ICReturnDownloadError](icreturndownloaderror.md): A download error returned from ImageCaptureCore.
- [ICReturnMetadataError](icreturnmetadataerror.md): A metadata error returned from ImageCaptureCore.
- [ICReturnObjectError](icreturnobjecterror.md): An object error returned from ImageCaptureCore.
- [ICReturnThumbnailError](icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.
