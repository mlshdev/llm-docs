> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnmetadataerror](https://developer.apple.com/documentation/imagecapturecore/icreturnmetadataerror)

# ICReturnMetadataError

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A metadata error returned from ImageCaptureCore.

## Declaration

```swift
struct ICReturnMetadataError
```

## Topics

### Error Domain

- [ICErrorDomain](icerrordomain.md): An error returned by the ImageCaptureCore framework.

### Error Codes

- [alreadyFetching](icreturnmetadataerror/alreadyfetching.md): Item metadata request is being serviced.
- [canceled](icreturnmetadataerror/canceled.md): Item metadata request has been canceled.
- [invalid](icreturnmetadataerror/invalid.md): Item metadata request completed with invalid result.
- [notAvailable](icreturnmetadataerror/notavailable.md): Item does not have metadata available.
- [ICReturnMetadataError.Code](icreturnmetadataerror/code.md)

### Type Properties

- [errorDomain](icreturnmetadataerror/errordomain.md)

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
- [ICReturnObjectError](icreturnobjecterror.md): An object error returned from ImageCaptureCore.
- [ICReturnPTPDeviceError](icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
- [ICReturnThumbnailError](icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.
