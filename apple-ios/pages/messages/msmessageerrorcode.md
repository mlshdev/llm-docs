> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessageerrorcode](https://developer.apple.com/documentation/messages/msmessageerrorcode)

# MSMessageErrorCode (Swift)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The error codes that the Messages framework generates.

## Declaration

```swift
enum MSMessageErrorCode
```

## Topics

### Error Codes

- [MSMessageErrorCode.fileNotFound](msmessageerrorcode/filenotfound.md): The file could not be found.
- [MSMessageErrorCode.fileUnreadable](msmessageerrorcode/fileunreadable.md): The file could not be read.
- [MSMessageErrorCode.improperFileType](msmessageerrorcode/improperfiletype.md): The file is not a supported file type.
- [MSMessageErrorCode.improperFileURL](msmessageerrorcode/improperfileurl.md): The URL does not refer to a local file.
- [MSMessageErrorCode.stickerFileImproperFileAttributes](msmessageerrorcode/stickerfileimproperfileattributes.md): The system cannot read one or more of the file’s attributes (for example, the file size).
- [MSMessageErrorCode.stickerFileImproperFileSize](msmessageerrorcode/stickerfileimproperfilesize.md): The image used to create an [MSSticker](mssticker.md) object is larger than 500 KB.
- [MSMessageErrorCode.stickerFileImproperFileFormat](msmessageerrorcode/stickerfileimproperfileformat.md): The image used to create an [MSSticker](mssticker.md) object is not one of the supported file types (PNG, APNG, GIF, or JPEG).
- [MSMessageErrorCode.urlExceedsMaxSize](msmessageerrorcode/urlexceedsmaxsize.md): The URL in an [MSMessage](msmessage.md) object’s [url](msmessage/url.md) property is longer than the maximum allowed length (5,000 characters).
- [MSMessageErrorCode.sendWhileNotVisible](msmessageerrorcode/sendwhilenotvisible.md): A message was sent while the app was not visible.
- [MSMessageErrorCode.sendWithoutRecentInteraction](msmessageerrorcode/sendwithoutrecentinteraction.md): A message was sent, but the app has not registered a recent touch interaction from the user.
- [MSMessageErrorCode.apiUnavailableInPresentationContext](msmessageerrorcode/apiunavailableinpresentationcontext.md): The API is unavailable in the current context.
- [MSMessageErrorCode.unknown](msmessageerrorcode/unknown.md): An unexpected or unknown error has occurred.

### Initializers

- [init(rawValue:)](msmessageerrorcode/init%28rawvalue_%29.md)

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

- [MSStickersErrorDomain](msstickerserrordomain.md): The error domain for stickers.
- [MSMessagesErrorDomain](msmessageserrordomain.md): The error domain for iMessage apps.
- [MSCriticalMessagingError](mscriticalmessagingerror.md): Values that describe errors the Critical Messaging API returns.

# MSMessageErrorCode (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The error codes that the Messages framework generates.

## Declaration

```objectivec
enum MSMessageErrorCode : NSInteger;
```

## Topics

### Error Codes

- [MSMessageErrorCodeFileNotFound](msmessageerrorcode/filenotfound.md): The file could not be found.
- [MSMessageErrorCodeFileUnreadable](msmessageerrorcode/fileunreadable.md): The file could not be read.
- [MSMessageErrorCodeImproperFileType](msmessageerrorcode/improperfiletype.md): The file is not a supported file type.
- [MSMessageErrorCodeImproperFileURL](msmessageerrorcode/improperfileurl.md): The URL does not refer to a local file.
- [MSMessageErrorCodeStickerFileImproperFileAttributes](msmessageerrorcode/stickerfileimproperfileattributes.md): The system cannot read one or more of the file’s attributes (for example, the file size).
- [MSMessageErrorCodeStickerFileImproperFileSize](msmessageerrorcode/stickerfileimproperfilesize.md): The image used to create an [MSSticker](mssticker.md) object is larger than 500 KB.
- [MSMessageErrorCodeStickerFileImproperFileFormat](msmessageerrorcode/stickerfileimproperfileformat.md): The image used to create an [MSSticker](mssticker.md) object is not one of the supported file types (PNG, APNG, GIF, or JPEG).
- [MSMessageErrorCodeURLExceedsMaxSize](msmessageerrorcode/urlexceedsmaxsize.md): The URL in an [MSMessage](msmessage.md) object’s [URL](msmessage/url.md) property is longer than the maximum allowed length (5,000 characters).
- [MSMessageErrorCodeSendWhileNotVisible](msmessageerrorcode/sendwhilenotvisible.md): A message was sent while the app was not visible.
- [MSMessageErrorCodeSendWithoutRecentInteraction](msmessageerrorcode/sendwithoutrecentinteraction.md): A message was sent, but the app has not registered a recent touch interaction from the user.
- [MSMessageErrorCodeAPIUnavailableInPresentationContext](msmessageerrorcode/apiunavailableinpresentationcontext.md): The API is unavailable in the current context.
- [MSMessageErrorCodeUnknown](msmessageerrorcode/unknown.md): An unexpected or unknown error has occurred.

## See Also

### Errors

- [MSStickersErrorDomain](msstickerserrordomain.md): The error domain for stickers.
- [MSMessagesErrorDomain](msmessageserrordomain.md): The error domain for iMessage apps.
