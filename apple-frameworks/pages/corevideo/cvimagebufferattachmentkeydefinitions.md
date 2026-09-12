> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebufferattachmentkeydefinitions](https://developer.apple.com/documentation/corevideo/cvimagebufferattachmentkeydefinitions)

# CVImageBufferAttachmentKeyDefinitions

**Framework:** Core Video  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A namespace for image buffer attachment keys.

## Declaration

```swift
protocol CVImageBufferAttachmentKeyDefinitions : CVAttachmentKeyDefinitions
```

## Topics

### Type Properties

- [alphaChannelIsOpaque](cvimagebufferattachmentkeydefinitions/alphachannelisopaque.md): True if the alpha channel in the image data is fully opaque.
- [alphaChannelMode](cvimagebufferattachmentkeydefinitions/alphachannelmode.md): Determines how the alpha channel should be rendered.
- [ambientViewingEnvironment](cvimagebufferattachmentkeydefinitions/ambientviewingenvironment.md): The ambient viewing environment for the image. The value for this key is an 8 byte big-endian data sequence to match the payload of the Ambient Viewing Environment SEI message.
- [chromaField](cvimagebufferattachmentkeydefinitions/chromafield.md): The chroma field information for the image buffer.
- [cleanAperture](cvimagebufferattachmentkeydefinitions/cleanaperture.md): Clean aperture of the image buffer.
- [colorPrimaries](cvimagebufferattachmentkeydefinitions/colorprimaries.md): The color primaries gamut for the image buffer.
- [colorSpace](cvimagebufferattachmentkeydefinitions/colorspace.md): Color space of the image buffer.
- [contentLightLevelInfo](cvimagebufferattachmentkeydefinitions/contentlightlevelinfo.md): The content light level information for the image.
- [displayDimensions](cvimagebufferattachmentkeydefinitions/displaydimensions.md): Display dimensions for the image buffer.
- [displayMaskRectangle](cvimagebufferattachmentkeydefinitions/displaymaskrectangle.md): Specifies the rectangular display area within the image.
- [fieldDetail](cvimagebufferattachmentkeydefinitions/fielddetail.md): The order of interlaced video data in the image buffer.
- [gammaLevel](cvimagebufferattachmentkeydefinitions/gammalevel.md): The gamma level for the image buffer.
- [horizontalDisparityAdjustment](cvimagebufferattachmentkeydefinitions/horizontaldisparityadjustment.md): Indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [iccProfile](cvimagebufferattachmentkeydefinitions/iccprofile.md): ICC color profile for the image buffer.
- [leftStereoDisplayMaskRectangle](cvimagebufferattachmentkeydefinitions/leftstereodisplaymaskrectangle.md): Specifies the rectangular display area within the left eye view of stereo images.
- [logTransferFunction](cvimagebufferattachmentkeydefinitions/logtransferfunction.md): Indicates that the transfer function or gamma of the content is a log format and identifies the specific log curve.
- [masteringDisplayColorVolume](cvimagebufferattachmentkeydefinitions/masteringdisplaycolorvolume.md): Mastering display color volume of the image.
- [pixelAspectRatio](cvimagebufferattachmentkeydefinitions/pixelaspectratio.md): Pixel aspect ratio for the image buffer.
- [postDecodeProcessingFrameMetadata](cvimagebufferattachmentkeydefinitions/postdecodeprocessingframemetadata.md)
- [postDecodeProcessingSequenceMetadata](cvimagebufferattachmentkeydefinitions/postdecodeprocessingsequencemetadata.md)
- [regionOfInterest](cvimagebufferattachmentkeydefinitions/regionofinterest.md): Specifies region of interest that image statistics cover.
- [rightStereoDisplayMaskRectangle](cvimagebufferattachmentkeydefinitions/rightstereodisplaymaskrectangle.md): Specifies the rectangular display area within the right eye view of stereo images.
- [sceneIllumination](cvimagebufferattachmentkeydefinitions/sceneillumination.md): Scene illumination measured in millilux.
- [transferFunction](cvimagebufferattachmentkeydefinitions/transferfunction.md): The transfer characteristic for the image buffer.
- [yCbCrMatrix](cvimagebufferattachmentkeydefinitions/ycbcrmatrix.md): The matrix to convert from YCbCr to the RGB color space.

## Relationships

### Inherits From

- [CVAttachmentKeyDefinitions](cvattachmentkeydefinitions.md)

### Conforming Types

- [CVPixelBufferAttachmentKeyDefinitions](cvpixelbufferattachmentkeydefinitions.md)

## See Also

### Protocols

- [CVImageBufferRepresentable](cvimagebufferrepresentable.md): CVImageBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVImageBuffer type.
