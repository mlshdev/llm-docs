> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnthumbnailerror](https://developer.apple.com/documentation/imagecapturecore/icreturnthumbnailerror)

# ICReturnThumbnailError

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A thumbnail error returned from ImageCaptureCore.

## Declaration

```swift
struct ICReturnThumbnailError
```

## Topics

### Error Domain

- [ICErrorDomain](icerrordomain.md): An error returned by the ImageCaptureCore framework.

### Error Codes

- [alreadyFetching](icreturnthumbnailerror/alreadyfetching.md): Item thumbnail request is being serviced.
- [canceled](icreturnthumbnailerror/canceled.md): Item thumbnail request has been canceled.
- [invalid](icreturnthumbnailerror/invalid.md): Item thumbnail request completed with invalid result.
- [notAvailable](icreturnthumbnailerror/notavailable.md): Item does not have thumbnail available.
- [ICReturnThumbnailError.Code](icreturnthumbnailerror/code.md)

### Type Properties

- [errorDomain](icreturnthumbnailerror/errordomain.md)

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
- [ICReturnPTPDeviceError](icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
