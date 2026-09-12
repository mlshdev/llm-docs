> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/requestcancelled](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/requestcancelled)

# QLThumbnailError.Code.requestCancelled (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The request to create a thumbnail was canceled.

## Declaration

```swift
case requestCancelled
```

<a id="Discussion"></a>

## Discussion

An app canceled a request to create a thumbnail using QLThumbnailGenerator’s [cancel(\_:)](../../qlthumbnailgenerator/cancel%28__%29.md) method.

## See Also

### Error Codes

- [QLThumbnailError.Code.generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailError.Code.noCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailError.Code.noCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailError.Code.requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailError.Code.savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.

# QLThumbnailErrorRequestCancelled (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The request to create a thumbnail was canceled.

## Declaration

```objectivec
QLThumbnailErrorRequestCancelled
```

<a id="Discussion"></a>

## Discussion

An app canceled a request to create a thumbnail using QLThumbnailGenerator’s [cancelRequest:](../../qlthumbnailgenerator/cancel%28__%29.md) method.

## See Also

### Error Codes

- [QLThumbnailErrorGenerationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailErrorNoCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailErrorNoCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailErrorRequestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailErrorSavingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
