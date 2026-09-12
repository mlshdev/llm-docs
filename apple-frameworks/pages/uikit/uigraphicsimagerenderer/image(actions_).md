> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/image(actions:)](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/image(actions:))

# image(actions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image from a set of drawing instructions.

## Declaration

```swift
func image(actions: (UIGraphicsImageRendererContext) -> Void) -> UIImage
```

## Parameters

- `actions`: A [UIGraphicsImageRenderer.DrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output image.

<a id="return-value"></a>

## Return Value

A [UIImage](../uiimage.md) object created by the supplied drawing actions.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method will return the resultant [UIImage](../uiimage.md) object.

You can call this method repeatedly to create multiple images, each of which has identical dimensions and format.

## See Also

### Creating images

- [jpegData(withCompressionQuality:actions:)](jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [pngData(actions:)](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageRenderer.DrawingActions](drawingactions.md): A closure for drawing an image.

# imageWithActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image from a set of drawing instructions.

## Declaration

```objectivec
- (UIImage *) imageWithActions:(UIGraphicsImageDrawingActions) actions;
```

## Parameters

- `actions`: A [UIGraphicsImageDrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output image.

<a id="return-value"></a>

## Return Value

A [UIImage](../uiimage.md) object created by the supplied drawing actions.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method will return the resultant [UIImage](../uiimage.md) object.

You can call this method repeatedly to create multiple images, each of which has identical dimensions and format.

## See Also

### Creating images

- [JPEGDataWithCompressionQuality:actions:](jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [PNGDataWithActions:](pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageDrawingActions](drawingactions.md): A closure for drawing an image.
