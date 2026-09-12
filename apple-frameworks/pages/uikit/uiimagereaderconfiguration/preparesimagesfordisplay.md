> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereaderconfiguration/preparesimagesfordisplay](https://developer.apple.com/documentation/uikit/uiimagereaderconfiguration/preparesimagesfordisplay)

# preparesImagesForDisplay

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the image reader prepares the image for display.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL preparesImagesForDisplay;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuration properties

- [prefersHighDynamicRange](prefershighdynamicrange.md): A Boolean value that indicates whether the image reader should decode the image as HDR when the type is capable of decoding in either SDR or HDR.
- [preferredThumbnailSize](preferredthumbnailsize.md): The thumbnail size in pixels that the image reader makes the image.
- [pixelsPerInch](pixelsperinch.md): The integral scale that the image reader applies to the image.
