> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/nocloudthumbnail](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/code/nocloudthumbnail)

# QLThumbnailError.Code.noCloudThumbnail (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail for a remote file couldn’t be created.

## Declaration

```swift
case noCloudThumbnail
```

<a id="Discussion"></a>

## Discussion

The creation of a thumbnail for a remote file stored in a FileProvider extension such as iCloud or another cloud service failed. The request to generate a thumbnail failed because the remote file itself isn’t available locally or couldn’t be used to generate a thumbnail. QuickLookThumbnailing tried to download a thumbnail from the cloud service instead but no thumbnail was available in the cloud service, or an available thumbnail couldn’t be downloaded.

## See Also

### Error Codes

- [QLThumbnailError.Code.generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailError.Code.noCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailError.Code.requestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailError.Code.requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailError.Code.savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.

# QLThumbnailErrorNoCloudThumbnail (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail for a remote file couldn’t be created.

## Declaration

```objectivec
QLThumbnailErrorNoCloudThumbnail
```

<a id="Discussion"></a>

## Discussion

The creation of a thumbnail for a remote file stored in a FileProvider extension such as iCloud or another cloud service failed. The request to generate a thumbnail failed because the remote file itself isn’t available locally or couldn’t be used to generate a thumbnail. QuickLookThumbnailing tried to download a thumbnail from the cloud service instead but no thumbnail was available in the cloud service, or an available thumbnail couldn’t be downloaded.

## See Also

### Error Codes

- [QLThumbnailErrorGenerationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [QLThumbnailErrorNoCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [QLThumbnailErrorRequestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [QLThumbnailErrorRequestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailErrorSavingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
