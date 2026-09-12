> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/jpegdata(withcompressionquality:actions:)](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/jpegdata(withcompressionquality:actions:))

# jpegData(withCompressionQuality:actions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a JPEG-encoded image from a set of drawing instructions.

## Declaration

```swift
func jpegData(withCompressionQuality compressionQuality: CGFloat, actions: (UIGraphicsImageRendererContext) -> Void) -> Data
```

## Parameters

- `compressionQuality`: A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value between `0.0` and `1.0`, representing the compression level the JPEG encoder should use. A value of `1.0` specifies lossless compression, and a value of `0.0` specifies maximum compression.
- `actions`: A [UIGraphicsImageRenderer.DrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output image.

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) object representing a JPEG-encoded representation of the image created by the supplied drawing actions.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method returns the resulting image as a JPEG-encoded [Data](../../foundation/data.md) object.

The JPEG format does not support transparency, so this method is only appropriate for use with opaque images.

You can call this method repeatedly to create multiple images, each of which has identical dimensions and format.

## See Also

### Creating images

- [image(actions:)](image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [pngData(actions:)](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageRenderer.DrawingActions](drawingactions.md): A closure for drawing an image.

# JPEGDataWithCompressionQuality:actions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a JPEG-encoded image from a set of drawing instructions.

## Declaration

```objectivec
- (NSData *) JPEGDataWithCompressionQuality:(CGFloat) compressionQuality actions:(UIGraphicsImageDrawingActions) actions;
```

## Parameters

- `compressionQuality`: A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value between `0.0` and `1.0`, representing the compression level the JPEG encoder should use. A value of `1.0` specifies lossless compression, and a value of `0.0` specifies maximum compression.
- `actions`: A [UIGraphicsImageDrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output image.

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) object representing a JPEG-encoded representation of the image created by the supplied drawing actions.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method returns the resulting image as a JPEG-encoded [Data](../../foundation/data.md) object.

The JPEG format does not support transparency, so this method is only appropriate for use with opaque images.

You can call this method repeatedly to create multiple images, each of which has identical dimensions and format.

## See Also

### Creating images

- [imageWithActions:](image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [PNGDataWithActions:](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageDrawingActions](drawingactions.md): A closure for drawing an image.
