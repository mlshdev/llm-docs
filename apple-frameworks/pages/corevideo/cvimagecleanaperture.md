> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagecleanaperture](https://developer.apple.com/documentation/corevideo/cvimagecleanaperture)

# CVImageCleanAperture

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An image’s clean aperture is a region of video to display.

## Declaration

```swift
@frozen struct CVImageCleanAperture
```

<a id="overview"></a>

## Overview

This represents a rectangle within the image that’s free from transition artifacts caused by the encoding of the signal.

## Topics

### Initializers

- [init(width:height:horizontalOffset:verticalOffset:)](cvimagecleanaperture/init%28width_height_horizontaloffset_verticaloffset_%29.md)

### Instance Properties

- [height](cvimagecleanaperture/height.md): Height of the clean aperture.
- [horizontalOffset](cvimagecleanaperture/horizontaloffset.md): Horizontal offset from the center of the image buffer.
- [verticalOffset](cvimagecleanaperture/verticaloffset.md): Vertical offset from the center of the image buffer.
- [width](cvimagecleanaperture/width.md): Width of the clean aperture.

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
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.
