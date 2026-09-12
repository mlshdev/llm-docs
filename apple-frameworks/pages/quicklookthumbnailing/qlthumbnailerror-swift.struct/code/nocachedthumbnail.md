> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/nocachedthumbnail](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/nocachedthumbnail)

# QLThumbnailError.Code.noCachedThumbnail (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A low-quality thumbnail couldn’t be created.

## Declaration

```swift
case noCachedThumbnail
```

<a id="Discussion"></a>

## Discussion

In response to a request for a low-quality thumbnail, QuickLookThumbnailing searched for a previously created thumbnail to achieve a lower latency but didn’t find one.

## See Also

### Error Codes

- [QLThumbnailError.Code.generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailError.Code.noCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailError.Code.requestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailError.Code.requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailError.Code.savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.

# QLThumbnailErrorNoCachedThumbnail (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A low-quality thumbnail couldn’t be created.

## Declaration

```objectivec
QLThumbnailErrorNoCachedThumbnail
```

<a id="Discussion"></a>

## Discussion

In response to a request for a low-quality thumbnail, QuickLookThumbnailing searched for a previously created thumbnail to achieve a lower latency but didn’t find one.

## See Also

### Error Codes

- [QLThumbnailErrorGenerationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailErrorNoCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [QLThumbnailErrorRequestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailErrorRequestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailErrorSavingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
