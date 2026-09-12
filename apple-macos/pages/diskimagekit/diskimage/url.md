> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/url](https://developer.apple.com/documentation/diskimagekit/diskimage/url)

# url

**Framework:** DiskImageKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The URL of the disk image.

## Declaration

```swift
final let url: URL
```

<a id="discussion"></a>

## Discussion

For a standalone disk image, this is the URL of a disk image you provide that the framework uses to initialize this image. For a [StackedImage](../stackedimage.md), this is the URL of the top layer.
