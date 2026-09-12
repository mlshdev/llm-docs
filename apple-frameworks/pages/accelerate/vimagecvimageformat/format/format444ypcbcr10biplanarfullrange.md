> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/format/format444ypcbcr10biplanarfullrange](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/format/format444ypcbcr10biplanarfullrange)

# vImageCVImageFormat.Format.format444YpCbCr10BiPlanarFullRange

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A full-range, two-plane YpCbCr 4:4:4 pixel format with 10 bits per channel.

## Declaration

```swift
case format444YpCbCr10BiPlanarFullRange
```

<a id="Discussion"></a>

## Discussion

This format defines luminance data in the range `0...1023`, and stores 10 bits in the most significant bits of 16 bits.

## See Also

### 4:4:4 YpCbCr format constants

- [vImageCVImageFormat.Format.format444YpCbCr8](format444ypcbcr8.md): A video-range, component YpCbCr 4:4:4 pixel format with 8 bits per channel and ordered CrYpCb.
- [vImageCVImageFormat.Format.format444YpCbCr10](format444ypcbcr10.md): A component YpCbCr 4:4:4 pixel format with 10 bits per channel.
- [vImageCVImageFormat.Format.format444YpCbCr10BiPlanarVideoRange](format444ypcbcr10biplanarvideorange.md): A video-range, two-plane YpCbCr 4:4:4 pixel format with 10 bits per channel.
