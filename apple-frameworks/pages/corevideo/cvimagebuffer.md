> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffer](https://developer.apple.com/documentation/corevideo/cvimagebuffer)

# CVImageBuffer (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a Core Video image buffer.

## Declaration

```swift
typealias CVImageBuffer = CVBuffer
```

<a id="Discussion"></a>

## Discussion

An image buffer is an abstract type representing Core Video buffers that hold images. In Core Video, pixel buffers, OpenGL buffers, and OpenGL textures all derive from the image buffer type.

## See Also

### Data types

- [CVImageSize](cvimagesize.md): Size of image buffer expressed as pixel count.
- [CVImageBufferOriginPosition](cvimagebufferoriginposition.md)
- [CVImageCleanAperture](cvimagecleanaperture.md): An image’s clean aperture is a region of video to display.
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.

# CVImageBufferRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a Core Video image buffer.

## Declaration

```objectivec
typedef CVBufferRef CVImageBufferRef;
```

<a id="Discussion"></a>

## Discussion

An image buffer is an abstract type representing Core Video buffers that hold images. In Core Video, pixel buffers, OpenGL buffers, and OpenGL textures all derive from the image buffer type.
