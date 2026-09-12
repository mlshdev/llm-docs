> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagelogtransferfunction](https://developer.apple.com/documentation/corevideo/cvimagelogtransferfunction)

# CVImageLogTransferFunction

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Identifies the specific log curve transfer function or gamma of the content.

## Declaration

```swift
enum CVImageLogTransferFunction
```

<a id="overview"></a>

## Overview

Log is a specific video format usually processed in a camera’s ISP. A Log video format usually defines:

- Scene-referred color primaries designed to preserve the chromaticity range captured by a camera sensor. In cinematography, “scene-referred” color primaries refers to a color space designed to accurately preserve the chromaticity and dynamic range directly captured by a camera sensor.
- A specific gamma curve (or transfer characteristic) tailored to capturing the full dynamic range from the sensor. This gamma curve is usually shaped like a log curve (hence the name Log).
- A set of matrix transforms to go from RGB to Y’CbCr (Y’CbCr being the most common format used to store the bits compressed into a file).

As described above, a Log video format defines a whole color space (even though the “log” part of the name comes only from the “transfer characteristic” or gamma curve).

## Topics

### Enumeration Cases

- [CVImageLogTransferFunction.appleLog](cvimagelogtransferfunction/applelog.md): Apple log profile.
- [CVImageLogTransferFunction.appleLog2](cvimagelogtransferfunction/applelog2.md): Apple log 2 profile.

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

- [CVImageColorPrimaries](cvimagecolorprimaries.md): Color primaries describe the gamut used for the rendering intent of an image.
- [CVImageTransferFunction](cvimagetransferfunction.md): The transfer function describes the tonality of an image for use in color matching operations. This value is used along with a color primaries gamut [CVImageColorPrimaries](cvimagecolorprimaries.md). Most apps should use the [CVImageTransferFunction.itu_R_709_2](cvimagetransferfunction/itu_r_709_2.md) transfer function.
- [CVImageYCbCrMatrix](cvimageycbcrmatrix.md): Indicates color matrix used for converting image buffer from YCbCr to RGB.
- [CVImageAlphaChannelMode](cvimagealphachannelmode.md)
- [CVImageFieldDetail](cvimagefielddetail.md)
