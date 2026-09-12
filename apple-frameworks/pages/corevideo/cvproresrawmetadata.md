> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvproresrawmetadata](https://developer.apple.com/documentation/corevideo/cvproresrawmetadata)

# CVProResRawMetadata

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Metadata associated with ProRes RAW images.

## Declaration

```swift
struct CVProResRawMetadata
```

## Topics

### Structures

- [CVProResRawMetadata.RecommendedCrop](cvproresrawmetadata/recommendedcrop-swift.struct.md): Recommended pixels to discard in the image after raw conversion.

### Initializers

- [init(senselSitingOffsets:blackLevel:whiteLevel:whiteBalanceCCT:whiteBalanceRedFactor:whiteBalanceBlueFactor:colorMatrix:gainFactor:recommendedCrop:extensions:)](cvproresrawmetadata/init%28senselsitingoffsets_blacklevel_whitelevel_whitebalancecct_whitebalanceredfactor_whitebalancebluefactor_colormatrix_gainfactor_recommendedcrop_extensions_%29.md)

### Instance Properties

- [blackLevel](cvproresrawmetadata/blacklevel.md): The sensel level corresponding to no light exposure.
- [colorMatrix](cvproresrawmetadata/colormatrix.md): This is a 3x3 matrix which transforms linear RGB pixel values in the camera native color space to CIE 1931 XYZ values relative to the D65 illuminant, where the matrix entries are stored in row-major order.
- [extensions](cvproresrawmetadata/extensions.md): ProRes RAW metadata extensions. This Data contains a big-endian UInt32 representing the size of the item in bytes followed by a 4-character code (‘psim’) followed by a variable-length pascal string identifying the metadata (like a key string) followed by the metadata payload.
- [gainFactor](cvproresrawmetadata/gainfactor.md): The overall gain factor for raw conversion.
- [recommendedCrop](cvproresrawmetadata/recommendedcrop-swift.property.md): The recommended number of: pixels to discard from the start (left) of each row of the image; pixels to discard from the end (right) of each row of the image; rows of pixels to discard from the top of the image; and rows of pixels to discard from the bottom of the image. Pixels/rows are discarded after raw conversion.
- [senselSitingOffsets](cvproresrawmetadata/senselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
- [whiteBalanceBlueFactor](cvproresrawmetadata/whitebalancebluefactor.md): The white balance multiplication factor for blue-filtered sensels.
- [whiteBalanceCCT](cvproresrawmetadata/whitebalancecct.md): The illuminant correlated color temperature (CCT), in kelvins, selected at the time of capture. If not present, the CCT is considered unknown or unspecified.
- [whiteBalanceRedFactor](cvproresrawmetadata/whitebalanceredfactor.md): The white balance multiplication factor for red-filtered sensels.
- [whiteLevel](cvproresrawmetadata/whitelevel.md): The sensel level corresponding to sensor (or camera A-to-D converter) saturation.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
