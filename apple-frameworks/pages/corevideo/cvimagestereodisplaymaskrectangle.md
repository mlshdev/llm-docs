> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagestereodisplaymaskrectangle](https://developer.apple.com/documentation/corevideo/cvimagestereodisplaymaskrectangle)

# CVImageStereoDisplayMaskRectangle

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specifies the rectangular display area within a view of stereo image.

## Declaration

```swift
struct CVImageStereoDisplayMaskRectangle
```

<a id="overview"></a>

## Overview

To address window violations in stereo video, points insetting the left and right edges of the rectangle are supported through in addition to the mask rectangle, allowing the description of the “extended raster rectangle”.

## Topics

### Structures

- [CVImageStereoDisplayMaskRectangle.EdgePoint](cvimagestereodisplaymaskrectangle/edgepoint.md): Specifies inset point on a vertical edge of the rectangle.

### Initializers

- [init(maskRectangle:leftEdgePoints:rightEdgePoints:)](cvimagestereodisplaymaskrectangle/init%28maskrectangle_leftedgepoints_rightedgepoints_%29.md)

### Instance Properties

- [leftEdgePoints](cvimagestereodisplaymaskrectangle/leftedgepoints.md): Inset points on the left edge of the rectangle.
- [maskRectangle](cvimagestereodisplaymaskrectangle/maskrectangle.md): Rectangular display area within the image.
- [rightEdgePoints](cvimagestereodisplaymaskrectangle/rightedgepoints.md): Inset points on the right edge of the rectangle.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md)
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
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.
