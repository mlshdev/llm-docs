> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/format/format420ypcbcr10biplanarfullrange](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/format/format420ypcbcr10biplanarfullrange)

# vImageCVImageFormat.Format.format420YpCbCr10BiPlanarFullRange

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A full-range, two-plane YpCbCr 4:2:0 pixel format with 10 bits per channel.

## Declaration

```swift
case format420YpCbCr10BiPlanarFullRange
```

<a id="Discussion"></a>

## Discussion

This format defines luminance data in the range `0...1023`, and stores 10 bits in the most significant bits of 16 bits.

## See Also

### 4:2:0 YpCbCr format constants

- [vImageCVImageFormat.Format.format420YpCbCr8Planar](format420ypcbcr8planar.md): A planar YpCbCr 4:2:0 pixel format with 8 bits per channel.
- [vImageCVImageFormat.Format.format420YpCbCr8BiPlanarFullRange](format420ypcbcr8biplanarfullrange.md): A full-range, two-plane YpCbCr 4:2:0 pixel format with 8 bits per channel.
- [vImageCVImageFormat.Format.format420YpCbCr8BiPlanarVideoRange](format420ypcbcr8biplanarvideorange.md): A video-range, two-plane YpCbCr 4:2:0 pixel format with 8 bits per channel.
- [vImageCVImageFormat.Format.format420YpCbCr8PlanarFullRange](format420ypcbcr8planarfullrange.md): A full-range, planar YpCbCr 4:2:0 pixel format with 8 bits per channel.
- [vImageCVImageFormat.Format.format420YpCbCr10BiPlanarVideoRange](format420ypcbcr10biplanarvideorange.md): A video-range, two-plane YpCbCr 4:2:0 pixel format with 10 bits per channel.
