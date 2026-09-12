> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/requestcancelled](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/requestcancelled)

# requestCancelled

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The request to create a thumbnail was canceled.

## Declaration

```swift
static var requestCancelled: QLThumbnailError.Code { get }
```

<a id="Discussion"></a>

## Discussion

An app canceled a request to create a thumbnail using QLThumbnailGenerator’s [cancel(\_:)](../qlthumbnailgenerator/cancel%28__%29.md) method.

## See Also

### Error Codes

- [generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [noCachedThumbnail](nocachedthumbnail.md): A low-quality thumbnail couldn’t be created.
- [noCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
- [QLThumbnailError.Code](code.md): Error codes that may be returned when generating a thumbnail.
