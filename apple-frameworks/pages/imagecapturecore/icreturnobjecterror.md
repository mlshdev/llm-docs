> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnobjecterror](https://developer.apple.com/documentation/imagecapturecore/icreturnobjecterror)

# ICReturnObjectError

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An object error returned from ImageCaptureCore.

## Declaration

```swift
struct ICReturnObjectError
```

## Topics

### Error Domain

- [ICErrorDomain](icerrordomain.md): An error returned by the ImageCaptureCore framework.

### Error Codes

- [codeObjectDoesNotExist](icreturnobjecterror/codeobjectdoesnotexist.md): The object does not exist.
- [codeObjectDataOffsetInvalid](icreturnobjecterror/codeobjectdataoffsetinvalid.md): The object data offset is invalid.
- [codeObjectCouldNotBeRead](icreturnobjecterror/codeobjectcouldnotberead.md): The object could not be read.
- [codeObjectDataEmpty](icreturnobjecterror/codeobjectdataempty.md): The object data is empty.
- [ICReturnObjectError.Code](icreturnobjecterror/code.md)

### Type Properties

- [codeObjectDataRequestTooLarge](icreturnobjecterror/codeobjectdatarequesttoolarge.md)
- [errorDomain](icreturnobjecterror/errordomain.md)

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
- [ICReturnPTPDeviceError](icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
- [ICReturnThumbnailError](icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.
