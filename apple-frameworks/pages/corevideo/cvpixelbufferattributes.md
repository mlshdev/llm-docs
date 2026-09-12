> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferattributes](https://developer.apple.com/documentation/corevideo/cvpixelbufferattributes)

# CVPixelBufferAttributes

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.

## Declaration

```swift
@dynamicMemberLookup struct CVPixelBufferAttributes
```

## Topics

### Initializers

- [init(\_:)](cvpixelbufferattributes/init%28__%29.md): Convert CreationAttributes to Attributes
- [init(merging:)](cvpixelbufferattributes/init%28merging_%29.md): Resolve multiple attribute specifications into a single instance.
- [init(pixelFormatTypes:size:compatibility:bytesPerRowAlignment:planeAlignment:extendedPixels:)](cvpixelbufferattributes/init%28pixelformattypes_size_compatibility_bytesperrowalignment_planealignment_extendedpixels_%29.md)
- [init(rawAttributes:)](cvpixelbufferattributes/init%28rawattributes_%29.md): Create an instance using a freeform attribute dictionary

### Instance Properties

- [attachments](cvpixelbufferattributes/attachments.md): Attachments to set on the pixel buffer.
- [pixelFormatTypes](cvpixelbufferattributes/pixelformattypes.md): Allow multiple pixel formats to be specified in attributes
- [rawAttributes](cvpixelbufferattributes/rawattributes.md)

### Subscripts

- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-16n5o.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-2fcvp.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-2kg2b.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-4r0es.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-63jp4.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-7nhki.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-95xgt.md)
- [subscript(dynamicMember:)](cvpixelbufferattributes/subscript%28dynamicmember_%29-jo6l.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.
