> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagecolorprimaries](https://developer.apple.com/documentation/corevideo/cvimagecolorprimaries)

# CVImageColorPrimaries

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Color primaries describe the gamut used for the rendering intent of an image.

## Declaration

```swift
enum CVImageColorPrimaries
```

<a id="overview"></a>

## Overview

This value is primarily used in color matching operations, along with a transfer function specified as [CVImageTransferFunction](cvimagetransferfunction.md).

## Topics

### Enumeration Cases

- [CVImageColorPrimaries.dci_P3](cvimagecolorprimaries/dci_p3.md): Color primaries gamut for DCI P3 theatrical distribution video.
- [CVImageColorPrimaries.ebu_3213](cvimagecolorprimaries/ebu_3213.md): Color primaries gamut for PAL video.
- [CVImageColorPrimaries.itu_R_2020](cvimagecolorprimaries/itu_r_2020.md): Color primaries gamut for ITU-R BT2020 HDR video.
- [CVImageColorPrimaries.itu_R_709_2](cvimagecolorprimaries/itu_r_709_2.md): Color primaries gamut for HD video.
- [CVImageColorPrimaries.p22](cvimagecolorprimaries/p22.md): Color primaries gamut for sRGB video.
- [CVImageColorPrimaries.p3_D65](cvimagecolorprimaries/p3_d65.md): Color primaries gamut for DCI P3 video with D65 white point.
- [CVImageColorPrimaries.smpte_C](cvimagecolorprimaries/smpte_c.md): Color primaries gamut for standard-definition video.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Color and signal characteristics

- [CVImageTransferFunction](cvimagetransferfunction.md): The transfer function describes the tonality of an image for use in color matching operations. This value is used along with a color primaries gamut [CVImageColorPrimaries](cvimagecolorprimaries.md). Most apps should use the [CVImageTransferFunction.itu_R_709_2](cvimagetransferfunction/itu_r_709_2.md) transfer function.
- [CVImageLogTransferFunction](cvimagelogtransferfunction.md): Identifies the specific log curve transfer function or gamma of the content.
- [CVImageYCbCrMatrix](cvimageycbcrmatrix.md): Indicates color matrix used for converting image buffer from YCbCr to RGB.
- [CVImageAlphaChannelMode](cvimagealphachannelmode.md)
- [CVImageFieldDetail](cvimagefielddetail.md)
