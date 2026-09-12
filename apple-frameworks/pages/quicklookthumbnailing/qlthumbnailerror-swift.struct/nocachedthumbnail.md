> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/nocachedthumbnail](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailerror-swift.struct/nocachedthumbnail)

# noCachedThumbnail

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A low-quality thumbnail couldn’t be created.

## Declaration

```swift
static var noCachedThumbnail: QLThumbnailError.Code { get }
```

<a id="Discussion"></a>

## Discussion

In response to a request for a low-quality thumbnail, QuickLookThumbnailing searched for a previously created thumbnail to achieve a lower latency but didn’t find one.

## See Also

### Error Codes

- [generationFailed](generationfailed.md): The thumbnail couldn’t be created for the given file.
- [noCloudThumbnail](nocloudthumbnail.md): The thumbnail for a remote file couldn’t be created.
- [requestCancelled](requestcancelled.md): The request to create a thumbnail was canceled.
- [requestInvalid](requestinvalid.md): The request to create a thumbnail was invalid, for example, there’s no file at a provided URL.
- [savingToURLFailed](savingtourlfailed.md): The thumbnail couldn’t be saved at the given URL.
- [QLThumbnailError.Code](code.md): Error codes that may be returned when generating a thumbnail.
