> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagedisplaymaskrectangle](https://developer.apple.com/documentation/corevideo/cvimagedisplaymaskrectangle)

# CVImageDisplayMaskRectangle

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specifies the rectangular display area within the image.

## Declaration

```swift
struct CVImageDisplayMaskRectangle
```

<a id="overview"></a>

## Overview

The mask is specified relative to a reference raster width and height that should be scaled to the image buffer dimensions. The origin (0, 0) is at the top-left.

## Topics

### Initializers

- [init(left:top:width:height:referenceRasterWidth:referenceRasterHeight:)](cvimagedisplaymaskrectangle/init%28left_top_width_height_referencerasterwidth_referencerasterheight_%29.md)

### Instance Properties

- [height](cvimagedisplaymaskrectangle/height.md): The height of the rectangle starting at rectangle’s top offset toward the rectangle’s bottom edge.
- [left](cvimagedisplaymaskrectangle/left.md): The horizontal pixel offset of the rectangle from the left of the bounding raster.
- [referenceRasterHeight](cvimagedisplaymaskrectangle/referencerasterheight.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [referenceRasterWidth](cvimagedisplaymaskrectangle/referencerasterwidth.md): The width in pixels of the 2D coordinate system to define the rectangle.
- [top](cvimagedisplaymaskrectangle/top.md): The vertical pixel offset of the rectangle from the top of the bounding raster.
- [width](cvimagedisplaymaskrectangle/width.md): The width of the rectangle starting at rectangle’s left offset toward the rectangle’s right edge.

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
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.
