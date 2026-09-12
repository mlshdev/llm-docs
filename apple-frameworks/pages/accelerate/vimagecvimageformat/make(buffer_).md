> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/make(buffer:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/make(buffer:))

# make(buffer:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates the description of the image encoding in an existing Core Video pixel buffer.

## Declaration

```swift
static func make(buffer: CVPixelBuffer) -> vImageCVImageFormat?
```

## Parameters

- `buffer`: The source Core Video pixel buffer.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](../vimagecvimageformat.md) instance that describes the specified pixel buffer’s pixel format.

## Mentioned In

- [Converting chroma-subsampled images](../converting-chroma-subsampled-images.md)

## See Also

### Related Documentation

- [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](../vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.

### Creating a Core Video image format

- [make(format:matrix:chromaSiting:colorSpace:alphaIsOpaqueHint:)](make%28format_matrix_chromasiting_colorspace_alphaisopaquehint_%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
- [make(format:colorSpace:alphaIsOpaqueHint:)](make%28format_colorspace_alphaisopaquehint_%29.md): Creates the description of an RGB image encoding in a Core Video pixel buffer from the specified properties.
