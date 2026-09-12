> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/savingtourlfailed](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/savingtourlfailed)

# savingToURLFailed

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The thumbnail couldn’t be saved at the given URL.

## Declaration

```swift
static var savingToURLFailed: QLThumbnailError.Code { get }
```

## See Also

### Error Codes

- [generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [noCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [noCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [requestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [QLThumbnailError.Code](code.md): Error codes that may be returned when generating a thumbnail.
