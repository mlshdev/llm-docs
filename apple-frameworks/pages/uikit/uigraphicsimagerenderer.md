> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer)

# UIGraphicsImageRenderer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A graphics renderer for creating Core Graphics-backed images.

## Declaration

```swift
class UIGraphicsImageRenderer
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

You can use image renderers to accomplish drawing tasks, without having to handle configuration such as color depth and image scale, or manage Core Graphics contexts. You initialize an image renderer with parameters such as image output dimensions and format. You then use one or more of the drawing functions to render images that share these properties.

To render an image:

1. Optionally, create a [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) object to specify nondefault parameters the renderer should use to create its context.
2. Instantiate a [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) object, providing the dimensions of the output image and a format object. The renderer uses default values for the current device if you don’t provide format object, as demonstrated in [Creating a graphics image renderer](uigraphicsimagerenderer.md#Creating-a-graphics-image-renderer).
3. Choose one of the rendering methods depending on the output you desire: [image(actions:)](uigraphicsimagerenderer/image%28actions_%29.md) returns a [UIImage](uiimage.md) object; [jpegData(withCompressionQuality:actions:)](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md) returns a JPEG-encoded [Data](../foundation/data.md) object; and [pngData(actions:)](uigraphicsimagerenderer/pngdata%28actions_%29.md) returns a PNG-encoded [Data](../foundation/data.md) object.
4. Execute your chosen method, providing Core Graphics drawing instructions as the closure argument, as shown in [Creating an image with an image renderer](uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer). [Using blend mode](uigraphicsimagerenderer.md#Using-blend-mode) demonstrates some of the more advanced rendering features you can use in your drawing instructions.
5. Optionally, you can use Core Graphics drawing code within the drawing instructions you provide to the rendering method, as shown in [Using Core Graphics rendering functions](uigraphicsimagerenderer.md#Using-Core-Graphics-rendering-functions).

After initializing an image renderer, you can use it to draw multiple images with the same configuration. An image renderer keeps a cache of Core Graphics contexts, so reusing the same renderer can be more efficient than creating new renderers.

<a id="Creating-a-graphics-image-renderer"></a>

### Creating a graphics image renderer

Create an image renderer, providing the size of the output image:

**Swift**

```swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 200, height: 200))
```

**Objective-C**

```objc
UIGraphicsImageRenderer *renderer = [[UIGraphicsImageRenderer alloc] initWithSize:CGSizeMake(200, 200)];
```

You can instead use one of the other [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) initializers to specify a renderer format ([UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md)) in addition to the size. This allows you to configure the underlying Core Graphics context for wide color and retina images.

If you don’t provide a format, the renderer uses the [default()](uigraphicsrendererformat/default%28%29.md) format, which creates a context best suited for the current device.

<a id="Creating-an-image-with-an-image-renderer"></a>

### Creating an image with an image renderer

Use the [image(actions:)](uigraphicsimagerenderer/image%28actions_%29.md) method to create an image ([UIImage](uiimage.md) object) with an image renderer. This method takes a closure that represents the drawing actions. Within this closure, the renderer creates a Core Graphics context using the parameters provided during renderer initialization, and sets this Core Graphics context to be the current context.

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
  }];
```

The drawing actions closure takes a single argument of type [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md). This provides access to some high-level drawing functions, such as [fill(\_:)](uigraphicsrenderercontext/fill%28__%29.md), through the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) superclass.

The above code creates the following image:

![Image showing a blue square in the top left of a larger white squares](https://developer.apple.com/images/com.apple.uikit/media-2874999@2x.png)

In addition to the [image(actions:)](uigraphicsimagerenderer/image%28actions_%29.md) method that creates an [UIImage](uiimage.md) object, [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) also has [jpegData(withCompressionQuality:actions:)](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md) and [pngData(actions:)](uigraphicsimagerenderer/pngdata%28actions_%29.md) methods that create [Data](../foundation/data.md) objects containing the image encoded as a JPEG or a PNG respectively. All three methods take the same approach as detailed here, accepting a block that represents the drawing actions.

<a id="Using-blend-mode"></a>

### Using blend mode

The utility methods on [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) also offer a variant that accepts a [CGBlendMode](../coregraphics/cgblendmode.md) value. This value determines how to combine the pixel values when painting.

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
  UIColor(colorLiteralRed: 145/255, green: 211/255, blue: 205/255, alpha: 1).setFill()
  context.fill(CGRect(x: 60, y: 60, width: 140, height: 140), blendMode: .multiply)
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
    [[UIColor colorWithRed:145/255.0 green:211/255.0 blue:205/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(60, 60, 140, 140) blendMode:kCGBlendModeMultiply];
  }];
```

This code draws a second square, using a blend mode of multiply. The following image shows the result.

![Image showing two overlapping squares, one blue, the other turquoise, in the top-left and bottom-right of a white background square respectively.](https://developer.apple.com/images/com.apple.uikit/media-2875000@2x.png)

<a id="Using-Core-Graphics-rendering-functions"></a>

### Using Core Graphics rendering functions

The [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) available in the image closure has a [cgContext](uigraphicsrenderercontext/cgcontext.md) property, which allows you to use Core Graphics rendering functions directly. For example, the following code demonstrates how to add a circle to the image:

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
  UIColor(colorLiteralRed: 145/255, green: 211/255, blue: 205/255, alpha: 1).setFill()
  context.fill(CGRect(x: 60, y: 60, width: 140, height: 140), blendMode: .multiply)
  
  UIColor(colorLiteralRed: 203/255, green: 222/255, blue: 116/255, alpha: 0.6).setFill()
  context.cgContext.fillEllipse(in: CGRect(x: 60, y: 60, width: 140, height: 140))
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
    [[UIColor colorWithRed:145/255.0 green:211/255.0 blue:205/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(60, 60, 140, 140) blendMode:kCGBlendModeMultiply];
    
    [[UIColor colorWithRed:203/255.0 green:222/255.0 blue:116/255.0 alpha:0.6] setFill];
    CGContextFillEllipseInRect(context.CGContext, CGRectMake(60, 60, 140, 140));
  }];
```

This code uses the [fillEllipse(in:)](../coregraphics/cgcontext/fillellipse%28in_%29.md) method on [CGContext](../coregraphics/cgcontext.md) to draw a green circle on the blue and turquoise squares image; the following image shows the result.

![An image showing two overlapping squares and an overlaid green circle.](https://developer.apple.com/images/com.apple.uikit/media-2875001@2x.png)

## Topics

### Initializing an image renderer

- [init(bounds:format:)](uigraphicsimagerenderer/init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [init(size:)](uigraphicsimagerenderer/init%28size_%29.md): Creates an image renderer for drawing images of the specified size.
- [init(size:format:)](uigraphicsimagerenderer/init%28size_format_%29.md): Creates an image renderer with the specified size and format.

### Creating images

- [image(actions:)](uigraphicsimagerenderer/image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [jpegData(withCompressionQuality:actions:)](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [pngData(actions:)](uigraphicsimagerenderer/pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageRenderer.DrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.

## Relationships

### Inherits From

- [UIGraphicsRenderer](uigraphicsrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsImageRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A graphics renderer for creating Core Graphics-backed images.

## Declaration

```objectivec
@interface UIGraphicsImageRenderer : UIGraphicsRenderer
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](adding-writing-tools-support-to-a-custom-uiview.md)

<a id="overview"></a>

## Overview

You can use image renderers to accomplish drawing tasks, without having to handle configuration such as color depth and image scale, or manage Core Graphics contexts. You initialize an image renderer with parameters such as image output dimensions and format. You then use one or more of the drawing functions to render images that share these properties.

To render an image:

1. Optionally, create a [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) object to specify nondefault parameters the renderer should use to create its context.
2. Instantiate a [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) object, providing the dimensions of the output image and a format object. The renderer uses default values for the current device if you don’t provide format object, as demonstrated in [Creating a graphics image renderer](uigraphicsimagerenderer.md#Creating-a-graphics-image-renderer).
3. Choose one of the rendering methods depending on the output you desire: [imageWithActions:](uigraphicsimagerenderer/image%28actions_%29.md) returns a [UIImage](uiimage.md) object; [JPEGDataWithCompressionQuality:actions:](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md) returns a JPEG-encoded [Data](../foundation/data.md) object; and [PNGDataWithActions:](uigraphicsimagerenderer/pngdata%28actions_%29.md) returns a PNG-encoded [Data](../foundation/data.md) object.
4. Execute your chosen method, providing Core Graphics drawing instructions as the closure argument, as shown in [Creating an image with an image renderer](uigraphicsimagerenderer.md#Creating-an-image-with-an-image-renderer). [Using blend mode](uigraphicsimagerenderer.md#Using-blend-mode) demonstrates some of the more advanced rendering features you can use in your drawing instructions.
5. Optionally, you can use Core Graphics drawing code within the drawing instructions you provide to the rendering method, as shown in [Using Core Graphics rendering functions](uigraphicsimagerenderer.md#Using-Core-Graphics-rendering-functions).

After initializing an image renderer, you can use it to draw multiple images with the same configuration. An image renderer keeps a cache of Core Graphics contexts, so reusing the same renderer can be more efficient than creating new renderers.

<a id="Creating-a-graphics-image-renderer"></a>

### Creating a graphics image renderer

Create an image renderer, providing the size of the output image:

**Swift**

```swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 200, height: 200))
```

**Objective-C**

```objc
UIGraphicsImageRenderer *renderer = [[UIGraphicsImageRenderer alloc] initWithSize:CGSizeMake(200, 200)];
```

You can instead use one of the other [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) initializers to specify a renderer format ([UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md)) in addition to the size. This allows you to configure the underlying Core Graphics context for wide color and retina images.

If you don’t provide a format, the renderer uses the [defaultFormat](uigraphicsrendererformat/default%28%29.md) format, which creates a context best suited for the current device.

<a id="Creating-an-image-with-an-image-renderer"></a>

### Creating an image with an image renderer

Use the [imageWithActions:](uigraphicsimagerenderer/image%28actions_%29.md) method to create an image ([UIImage](uiimage.md) object) with an image renderer. This method takes a closure that represents the drawing actions. Within this closure, the renderer creates a Core Graphics context using the parameters provided during renderer initialization, and sets this Core Graphics context to be the current context.

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
  }];
```

The drawing actions closure takes a single argument of type [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md). This provides access to some high-level drawing functions, such as [fillRect:](uigraphicsrenderercontext/fill%28__%29.md), through the [UIGraphicsRendererContext](uigraphicsrenderercontext.md) superclass.

The above code creates the following image:

![Image showing a blue square in the top left of a larger white squares](https://developer.apple.com/images/com.apple.uikit/media-2874999@2x.png)

In addition to the [imageWithActions:](uigraphicsimagerenderer/image%28actions_%29.md) method that creates an [UIImage](uiimage.md) object, [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) also has [JPEGDataWithCompressionQuality:actions:](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md) and [PNGDataWithActions:](uigraphicsimagerenderer/pngdata%28actions_%29.md) methods that create [Data](../foundation/data.md) objects containing the image encoded as a JPEG or a PNG respectively. All three methods take the same approach as detailed here, accepting a block that represents the drawing actions.

<a id="Using-blend-mode"></a>

### Using blend mode

The utility methods on [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) also offer a variant that accepts a [CGBlendMode](../coregraphics/cgblendmode.md) value. This value determines how to combine the pixel values when painting.

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
  UIColor(colorLiteralRed: 145/255, green: 211/255, blue: 205/255, alpha: 1).setFill()
  context.fill(CGRect(x: 60, y: 60, width: 140, height: 140), blendMode: .multiply)
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
    [[UIColor colorWithRed:145/255.0 green:211/255.0 blue:205/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(60, 60, 140, 140) blendMode:kCGBlendModeMultiply];
  }];
```

This code draws a second square, using a blend mode of multiply. The following image shows the result.

![Image showing two overlapping squares, one blue, the other turquoise, in the top-left and bottom-right of a white background square respectively.](https://developer.apple.com/images/com.apple.uikit/media-2875000@2x.png)

<a id="Using-Core-Graphics-rendering-functions"></a>

### Using Core Graphics rendering functions

The [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) available in the image closure has a [CGContext](uigraphicsrenderercontext/cgcontext.md) property, which allows you to use Core Graphics rendering functions directly. For example, the following code demonstrates how to add a circle to the image:

**Swift**

```swift
let image = renderer.image { (context) in
  UIColor.darkGray.setStroke()
  context.stroke(renderer.format.bounds)
  UIColor(colorLiteralRed: 158/255, green: 215/255, blue: 245/255, alpha: 1).setFill()
  context.fill(CGRect(x: 1, y: 1, width: 140, height: 140))
  UIColor(colorLiteralRed: 145/255, green: 211/255, blue: 205/255, alpha: 1).setFill()
  context.fill(CGRect(x: 60, y: 60, width: 140, height: 140), blendMode: .multiply)
  
  UIColor(colorLiteralRed: 203/255, green: 222/255, blue: 116/255, alpha: 0.6).setFill()
  context.cgContext.fillEllipse(in: CGRect(x: 60, y: 60, width: 140, height: 140))
}
```

**Objective-C**

```objc
  UIImage *image = [renderer imageWithActions:^(UIGraphicsImageRendererContext * _Nonnull context) {
    [[UIColor darkGrayColor] setStroke];
    [context strokeRect:renderer.format.bounds];
    [[UIColor colorWithRed:158/255.0 green:215/255.0 blue:245/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(1, 1, 140, 140)];
    [[UIColor colorWithRed:145/255.0 green:211/255.0 blue:205/255.0 alpha:1] setFill];
    [context fillRect:CGRectMake(60, 60, 140, 140) blendMode:kCGBlendModeMultiply];
    
    [[UIColor colorWithRed:203/255.0 green:222/255.0 blue:116/255.0 alpha:0.6] setFill];
    CGContextFillEllipseInRect(context.CGContext, CGRectMake(60, 60, 140, 140));
  }];
```

This code uses the [CGContextFillEllipseInRect](../coregraphics/cgcontext/fillellipse%28in_%29.md) method on [CGContextRef](../coregraphics/cgcontext.md) to draw a green circle on the blue and turquoise squares image; the following image shows the result.

![An image showing two overlapping squares and an overlaid green circle.](https://developer.apple.com/images/com.apple.uikit/media-2875001@2x.png)

## Topics

### Initializing an image renderer

- [initWithBounds:format:](uigraphicsimagerenderer/init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [initWithSize:](uigraphicsimagerenderer/init%28size_%29.md): Creates an image renderer for drawing images of the specified size.
- [initWithSize:format:](uigraphicsimagerenderer/init%28size_format_%29.md): Creates an image renderer with the specified size and format.

### Creating images

- [imageWithActions:](uigraphicsimagerenderer/image%28actions_%29.md): Creates an image from a set of drawing instructions.
- [JPEGDataWithCompressionQuality:actions:](uigraphicsimagerenderer/jpegdata%28withcompressionquality_actions_%29.md): Creates a JPEG-encoded image from a set of drawing instructions.
- [PNGDataWithActions:](uigraphicsimagerenderer/pngdata%28actions_%29.md): Creates a PNG-encoded image from a set of drawing instructions.
- [UIGraphicsImageDrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.

## Relationships

### Inherits From

- [UIGraphicsRenderer](uigraphicsrenderer.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
