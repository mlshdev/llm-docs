> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/alphaisopaquehint](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/alphaisopaquehint)

# alphaIsOpaqueHint

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The alpha hint of the Core Video image format.

## Declaration

```swift
var alphaIsOpaqueHint: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

In the case where an image format contains an alpha channel, but the image is fully opaque, set this value to `true`.

## See Also

### Related Documentation

- [vImageCVImageFormat_GetAlphaHint(\_:)](../vimagecvimageformat_getalphahint%28__%29.md): Returns the alpha hint of a Core Video image format.
- [vImageCVImageFormat_SetAlphaHint(\_:\_:)](../vimagecvimageformat_setalphahint%28____%29.md): Sets the alpha hint of a Core Video image format.

### Inspecting a Core Video image format’s properties

- [channelCount](channelcount.md): The number of channels, including alpha, for the Core Video image format.
- [channels](channels.md): The channels of the Core Video image format.
- [channelDescription(bufferType:)](channeldescription%28buffertype_%29.md): Returns the range and clamp limits for a specified channel in a Core Video image format.
- [formatCode](formatcode.md): The four-character code that encodes the pixel format of the Core Video image format.
- [chromaSiting](chromasiting-swift.property.md): The chrominance siting of the Core Video image format.
- [colorSpace](colorspace.md): The color space of the Core Video image format.
