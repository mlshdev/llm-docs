> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagefielddetail](https://developer.apple.com/documentation/corevideo/cvimagefielddetail)

# CVImageFieldDetail

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
enum CVImageFieldDetail
```

## Topics

### Enumeration Cases

- [CVImageFieldDetail.spatialFirstLineEarly](cvimagefielddetail/spatialfirstlineearly.md): The image buffer contains interleaved fields. The first line of image data corresponds to the first top, odd-numbered, field.
- [CVImageFieldDetail.spatialFirstLineLate](cvimagefielddetail/spatialfirstlinelate.md): The image buffer contains interleaved fields. The first line of image data corresponds to the first bottom, even-numbered, field.
- [CVImageFieldDetail.temporalBottomFirst](cvimagefielddetail/temporalbottomfirst.md): The image buffer contains complete fields in alternating order. The bottom, even-numbered, fields contain image data captured at an earlier time than top, odd-numbered, fields.
- [CVImageFieldDetail.temporalTopFirst](cvimagefielddetail/temporaltopfirst.md): The image buffer contains complete fields in alternating order. The top, odd-numbered, fields contain image data captured at an earlier time than bottom, even-numbered, fields.

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
- [CVImageLogTransferFunction](cvimagelogtransferfunction.md): Identifies the specific log curve transfer function or gamma of the content.
- [CVImageYCbCrMatrix](cvimageycbcrmatrix.md): Indicates color matrix used for converting image buffer from YCbCr to RGB.
- [CVImageAlphaChannelMode](cvimagealphachannelmode.md)
