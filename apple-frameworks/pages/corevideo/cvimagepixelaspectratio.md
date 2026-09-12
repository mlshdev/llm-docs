> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagepixelaspectratio](https://developer.apple.com/documentation/corevideo/cvimagepixelaspectratio)

# CVImagePixelAspectRatio

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Aspect ratio of each pixel in the image buffer.

## Declaration

```swift
@frozen struct CVImagePixelAspectRatio
```

## Topics

### Initializers

- [init(horizontalSpacing:verticalSpacing:)](cvimagepixelaspectratio/init%28horizontalspacing_verticalspacing_%29.md)

### Instance Properties

- [horizontalSpacing](cvimagepixelaspectratio/horizontalspacing.md): The horizontal component of the image buffer aspect ratio.
- [verticalSpacing](cvimagepixelaspectratio/verticalspacing.md): The vertical component of the image buffer aspect ratio.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [CVImageBuffer](cvimagebuffer.md): A reference to a Core Video image buffer.
- [CVImageSize](cvimagesize.md): Size of image buffer expressed as pixel count.
- [CVImageBufferOriginPosition](cvimagebufferoriginposition.md)
- [CVImageCleanAperture](cvimagecleanaperture.md): An image’s clean aperture is a region of video to display.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.
