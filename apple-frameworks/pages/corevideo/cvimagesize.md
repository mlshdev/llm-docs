> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagesize](https://developer.apple.com/documentation/corevideo/cvimagesize)

# CVImageSize

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Size of image buffer expressed as pixel count.

## Declaration

```swift
struct CVImageSize
```

<a id="overview"></a>

## Overview

This should be used when the sizes must be specified as exact integer width & height. Otherwise, prefer `CGSize` as it is more widely used.

## Topics

### Initializers

- [init(\_:rounded:)](cvimagesize/init%28__rounded_%29.md): Convert `CGSize` to [CVImageSize](cvimagesize.md) using the given rounding rule.
- [init(width:height:)](cvimagesize/init%28width_height_%29.md): Create an instance with given width and height

### Instance Properties

- [height](cvimagesize/height.md): Image height in pixels
- [width](cvimagesize/width.md): Image width in pixels

### Type Properties

- [zero](cvimagesize/zero.md): Size with zero width and height

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [CVImageBuffer](cvimagebuffer.md): A reference to a Core Video image buffer.
- [CVImageBufferOriginPosition](cvimagebufferoriginposition.md)
- [CVImageCleanAperture](cvimagecleanaperture.md): An image’s clean aperture is a region of video to display.
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.
