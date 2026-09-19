> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskimagekit/diskimage/url

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
