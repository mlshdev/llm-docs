> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/draw(_:in:bytiling:)](https://developer.apple.com/documentation/coregraphics/cgcontext/draw(_:in:bytiling:))

# draw(\_:in:byTiling:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws an image in the specified area.

## Declaration

```swift
func draw(_ image: CGImage, in rect: CGRect, byTiling: Bool = false)
```

## Parameters

- `image`: The image to draw.
- `rect`: The rectangle, in user space coordinates, in which to draw the image.
- `byTiling`: If [true](https://developer.apple.com/documentation/swift/true), this method fills the context’s entire clipping region by tiling many copies of the image, and the `rect` parameter defines the origin and size of the tiling pattern.

  If [false](https://developer.apple.com/documentation/swift/false) (the default), this method draws a single copy of the image in the area defined by the `rect` parameter.

<a id="Discussion"></a>

## Discussion

This method scales the image (disproportionately, if necessary) to fit the bounds specified by the `rect` parameter.When the `byTiling` parameter is [true](https://developer.apple.com/documentation/swift/true), the image is tiled in user space—thus, unlike when drawing with patterns, the current transformation (see the [ctm](ctm.md) property) affects the final result.

## See Also

### Drawing Images and PDF Content

- [drawPDFPage(\_:)](drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [interpolationQuality](interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGInterpolationQuality](../cginterpolationquality.md): Levels of interpolation quality for rendering an image.
