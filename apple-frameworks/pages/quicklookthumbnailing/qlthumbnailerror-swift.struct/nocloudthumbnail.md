> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/nocloudthumbnail](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/nocloudthumbnail)

# noCloudThumbnail

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail for a remote file couldn’t be created.

## Declaration

```swift
static var noCloudThumbnail: QLThumbnailError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The creation of a thumbnail for a remote file stored in a FileProvider extension such as iCloud or another cloud service failed. The request to generate a thumbnail failed because the remote file itself isn’t available locally or couldn’t be used to generate a thumbnail. QuickLookThumbnailing tried to download a thumbnail from the cloud service instead but no thumbnail was available in the cloud service, or an available thumbnail couldn’t be downloaded.

## See Also

### Error Codes

- [generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [noCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [requestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
- [QLThumbnailError.Code](code.md): Error codes that may be returned when generating a thumbnail.
