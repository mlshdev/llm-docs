> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct/prefershighdynamicrange](https://developer.apple.com/documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct/prefershighdynamicrange)

# prefersHighDynamicRange

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates whether the image reader should decode the image as HDR when the type is capable of decoding in either SDR or HDR.

## Declaration

```swift
var prefersHighDynamicRange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t affect images that only decode in either SDR or HDR. The default value depends on the system capabilities.

## See Also

### Related Documentation

- [Applying Apple HDR effect to your photos](https://developer.apple.com/documentation/appkit/applying-apple-hdr-effect-to-your-photos): You can decode and apply Apple’s HDR gain map to your own images.

### Configuration properties

- [preparesImagesForDisplay](preparesimagesfordisplay.md): A Boolean value that indicates whether the image reader prepares the image for display.
- [preferredThumbnailSize](preferredthumbnailsize.md): The thumbnail size in pixels that the image reader makes the image.
- [pixelsPerInch](pixelsperinch.md): The integral scale that the image reader applies to the image.
