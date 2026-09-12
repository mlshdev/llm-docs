> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat/make(format:colorspace:alphaisopaquehint:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat/make(format:colorspace:alphaisopaquehint:))

# make(format:colorSpace:alphaIsOpaqueHint:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates the description of an RGB image encoding in a Core Video pixel buffer from the specified properties.

## Declaration

```swift
static func make(format: vImageCVImageFormat.Format, colorSpace: CGColorSpace, alphaIsOpaqueHint: Bool) -> vImageCVImageFormat?
```

## Parameters

- `format`: The format type of the image.
- `colorSpace`: The color space of RGB and monochrome images.
- `alphaIsOpaqueHint`: A hint that indicates that the function interprets an image with an alpha channel as opaque.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](../vimagecvimageformat.md) instance encoded with the function’s parameters.

## See Also

### Related Documentation

- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](../vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

### Creating a Core Video image format

- [make(buffer:)](make%28buffer_%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [make(format:matrix:chromaSiting:colorSpace:alphaIsOpaqueHint:)](make%28format_matrix_chromasiting_colorspace_alphaisopaquehint_%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
