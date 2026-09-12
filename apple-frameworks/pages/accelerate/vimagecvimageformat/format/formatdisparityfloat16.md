> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/format/formatdisparityfloat16](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/format/formatdisparityfloat16)

# vImageCVImageFormat.Format.formatDisparityFloat16

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A 16-bit disparity pixel format that describes the normalized shift when comparing two images.

## Declaration

```swift
case formatDisparityFloat16
```

<a id="Discussion"></a>

## Discussion

Units are `1 / meters`, that is, `(pixelShift / (pixelFocalLength * baselineInMeters))`.

## See Also

### Disparity format constants

- [vImageCVImageFormat.Format.formatDisparityFloat32](formatdisparityfloat32.md): A 32-bit disparity pixel format that describes the normalized shift when comparing two images.
