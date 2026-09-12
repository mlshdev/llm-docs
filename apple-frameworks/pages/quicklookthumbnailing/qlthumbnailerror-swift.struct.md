> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct)

# QLThumbnailError

**Framework:** Quick Look Thumbnailing  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Error information that might return when you generate a thumbnail.

## Declaration

```swift
struct QLThumbnailError
```

## Topics

### Error Codes

- [generationFailed](qlthumbnailerror-swift.struct/generationfailed.md): The thumbnail couldn’t be created for the given file.
- [noCachedThumbnail](qlthumbnailerror-swift.struct/nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [noCloudThumbnail](qlthumbnailerror-swift.struct/nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [requestCancelled](qlthumbnailerror-swift.struct/requestcancelled.md): The request to create a thumbnail was canceled.
- [requestInvalid](qlthumbnailerror-swift.struct/requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [savingToURLFailed](qlthumbnailerror-swift.struct/savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
- [QLThumbnailError.Code](qlthumbnailerror-swift.struct/code.md): Error codes that may be returned when generating a thumbnail.

### Type Properties

- [errorDomain](qlthumbnailerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error Information

- [QLThumbnailErrorDomain](qlthumbnailerrordomain.md): The error domain of the QuickLookThumbnailing framework.
- [QLThumbnailError.Code](qlthumbnailerror-swift.struct/code.md): Error codes that may be returned when generating a thumbnail.
