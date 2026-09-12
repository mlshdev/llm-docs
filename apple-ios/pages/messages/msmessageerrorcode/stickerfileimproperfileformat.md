> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessageerrorcode/stickerfileimproperfileformat](https://developer.apple.com/documentation/messages/msmessageerrorcode/stickerfileimproperfileformat)

# MSMessageErrorCode.stickerFileImproperFileFormat (Swift)

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The image used to create an [MSSticker](../mssticker.md) object is not one of the supported file types (PNG, APNG, GIF, or JPEG).

## Declaration

```swift
case stickerFileImproperFileFormat
```

## See Also

### Error Codes

- [MSMessageErrorCode.fileNotFound](filenotfound.md): The file could not be found.
- [MSMessageErrorCode.fileUnreadable](fileunreadable.md): The file could not be read.
- [MSMessageErrorCode.improperFileType](improperfiletype.md): The file is not a supported file type.
- [MSMessageErrorCode.improperFileURL](improperfileurl.md): The URL does not refer to a local file.
- [MSMessageErrorCode.stickerFileImproperFileAttributes](stickerfileimproperfileattributes.md): The system cannot read one or more of the file’s attributes (for example, the file size).
- [MSMessageErrorCode.stickerFileImproperFileSize](stickerfileimproperfilesize.md): The image used to create an [MSSticker](../mssticker.md) object is larger than 500 KB.
- [MSMessageErrorCode.urlExceedsMaxSize](urlexceedsmaxsize.md): The URL in an [MSMessage](../msmessage.md) object’s [url](../msmessage/url.md) property is longer than the maximum allowed length (5,000 characters).
- [MSMessageErrorCode.sendWhileNotVisible](sendwhilenotvisible.md): A message was sent while the app was not visible.
- [MSMessageErrorCode.sendWithoutRecentInteraction](sendwithoutrecentinteraction.md): A message was sent, but the app has not registered a recent touch interaction from the user.
- [MSMessageErrorCode.apiUnavailableInPresentationContext](apiunavailableinpresentationcontext.md): The API is unavailable in the current context.
- [MSMessageErrorCode.unknown](unknown.md): An unexpected or unknown error has occurred.

# MSMessageErrorCodeStickerFileImproperFileFormat (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The image used to create an [MSSticker](../mssticker.md) object is not one of the supported file types (PNG, APNG, GIF, or JPEG).

## Declaration

```objectivec
MSMessageErrorCodeStickerFileImproperFileFormat
```

## See Also

### Error Codes

- [MSMessageErrorCodeFileNotFound](filenotfound.md): The file could not be found.
- [MSMessageErrorCodeFileUnreadable](fileunreadable.md): The file could not be read.
- [MSMessageErrorCodeImproperFileType](improperfiletype.md): The file is not a supported file type.
- [MSMessageErrorCodeImproperFileURL](improperfileurl.md): The URL does not refer to a local file.
- [MSMessageErrorCodeStickerFileImproperFileAttributes](stickerfileimproperfileattributes.md): The system cannot read one or more of the file’s attributes (for example, the file size).
- [MSMessageErrorCodeStickerFileImproperFileSize](stickerfileimproperfilesize.md): The image used to create an [MSSticker](../mssticker.md) object is larger than 500 KB.
- [MSMessageErrorCodeURLExceedsMaxSize](urlexceedsmaxsize.md): The URL in an [MSMessage](../msmessage.md) object’s [URL](../msmessage/url.md) property is longer than the maximum allowed length (5,000 characters).
- [MSMessageErrorCodeSendWhileNotVisible](sendwhilenotvisible.md): A message was sent while the app was not visible.
- [MSMessageErrorCodeSendWithoutRecentInteraction](sendwithoutrecentinteraction.md): A message was sent, but the app has not registered a recent touch interaction from the user.
- [MSMessageErrorCodeAPIUnavailableInPresentationContext](apiunavailableinpresentationcontext.md): The API is unavailable in the current context.
- [MSMessageErrorCodeUnknown](unknown.md): An unexpected or unknown error has occurred.
