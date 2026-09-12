> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct/preferredthumbnailsize](https://developer.apple.com/documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct/preferredthumbnailsize)

# preferredThumbnailSize

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The thumbnail size in pixels that the image reader makes the image.

## Declaration

```swift
var preferredThumbnailSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../../coregraphics/cgsizezero.md).

## See Also

### Configuration properties

- [prefersHighDynamicRange](prefershighdynamicrange.md): A Boolean value that indicates whether the image reader should decode the image as HDR when the type is capable of decoding in either SDR or HDR.
- [preparesImagesForDisplay](preparesimagesfordisplay.md): A Boolean value that indicates whether the image reader prepares the image for display.
- [pixelsPerInch](pixelsperinch.md): The integral scale that the image reader applies to the image.
