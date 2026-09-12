> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code)

# QLThumbnailError.Code (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Error codes that may be returned when generating a thumbnail.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [QLThumbnailError.Code.generationFailed](code/generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailError.Code.noCachedThumbnail](code/nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailError.Code.noCloudThumbnail](code/nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailError.Code.requestCancelled](code/requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailError.Code.requestInvalid](code/requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailError.Code.savingToURLFailed](code/savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error Information

- [QLThumbnailErrorDomain](../qlthumbnailerrordomain.md): The error domain of the QuickLookThumbnailing framework.
- [QLThumbnailError](../qlthumbnailerror-swift.struct.md): Error information that might return when you generate a thumbnail.

# QLThumbnailError (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Error codes that may be returned when generating a thumbnail.

## Declaration

```objectivec
enum QLThumbnailError : NSInteger;
```

## Topics

### Error Codes

- [QLThumbnailErrorGenerationFailed](code/generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailErrorNoCachedThumbnail](code/nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailErrorNoCloudThumbnail](code/nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailErrorRequestCancelled](code/requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailErrorRequestInvalid](code/requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailErrorSavingToURLFailed](code/savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.

## See Also

### Error Information

- [QLThumbnailErrorDomain](../qlthumbnailerrordomain.md): The error domain of the QuickLookThumbnailing framework.
