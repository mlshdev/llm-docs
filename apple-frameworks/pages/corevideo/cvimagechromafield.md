> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagechromafield](https://developer.apple.com/documentation/corevideo/cvimagechromafield)

# CVImageChromaField

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about chroma field in the 2VUY format image data.

## Declaration

```swift
struct CVImageChromaField
```

## Topics

### Initializers

- [init(fieldLocation:subsampling:)](cvimagechromafield/init%28fieldlocation_subsampling_%29.md)

### Instance Properties

- [fieldLocation](cvimagechromafield/fieldlocation-swift.property.md)
- [subsampling](cvimagechromafield/subsampling.md)

### Enumerations

- [CVImageChromaField.ChromaSubsampling](cvimagechromafield/chromasubsampling.md): Original format of subsampled data in the image buffer before conversion to 422/2vuy format.
- [CVImageChromaField.FieldLocation](cvimagechromafield/fieldlocation-swift.enum.md): Indicates chroma sample location for progressive-scan & interlaced image data.
- [CVImageChromaField.SampleLocation](cvimagechromafield/samplelocation.md): Indicates the locations of the chroma sample in the image buffer.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [CVImageBuffer](cvimagebuffer.md): A reference to a Core Video image buffer.
- [CVImageSize](cvimagesize.md): Size of image buffer expressed as pixel count.
- [CVImageBufferOriginPosition](cvimagebufferoriginposition.md)
- [CVImageCleanAperture](cvimagecleanaperture.md): An image’s clean aperture is a region of video to display.
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
