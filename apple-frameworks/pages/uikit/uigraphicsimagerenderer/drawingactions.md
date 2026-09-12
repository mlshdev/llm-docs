> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/drawingactions](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/drawingactions)

# UIGraphicsImageRenderer.DrawingActions (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure for drawing an image.

## Declaration

```swift
typealias DrawingActions = (UIGraphicsImageRendererContext) -> Void
```

<a id="Discussion"></a>

## Discussion

`UIGraphicsImageDrawingActions` defines a block type that takes a [UIGraphicsImageRendererContext](../uigraphicsimagerenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the image drawing methods on [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md). Your block should use the provided image renderer context to perform the drawing operations you want the renderer to execute.

See [Creating an image with an image renderer](../uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer) for an example use of a `UIGraphicsImageDrawingActions` block.

## See Also

### Creating images

- [image(actions:)](image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [jpegData(withCompressionQuality:actions:)](jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [pngData(actions:)](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.

# UIGraphicsImageDrawingActions (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure for drawing an image.

## Declaration

```objectivec
typedef void (^)(UIGraphicsImageRendererContext *) UIGraphicsImageDrawingActions;
```

<a id="Discussion"></a>

## Discussion

`UIGraphicsImageDrawingActions` defines a block type that takes a [UIGraphicsImageRendererContext](../uigraphicsimagerenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the image drawing methods on [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md). Your block should use the provided image renderer context to perform the drawing operations you want the renderer to execute.

See [Creating an image with an image renderer](../uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer) for an example use of a `UIGraphicsImageDrawingActions` block.

## See Also

### Creating images

- [imageWithActions:](image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [JPEGDataWithCompressionQuality:actions:](jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [PNGDataWithActions:](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
