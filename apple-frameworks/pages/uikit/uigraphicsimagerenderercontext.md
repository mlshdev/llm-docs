> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderercontext](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderercontext)

# UIGraphicsImageRendererContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The drawing environment for an image renderer.

## Declaration

```swift
class UIGraphicsImageRendererContext
```

<a id="overview"></a>

## Overview

When using the [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) drawing methods, you must pass a block of type [UIGraphicsImageRenderer.DrawingActions](uigraphicsimagerenderer/drawingactions.md) as an argument, which provides a [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) instance as an argument. Use the context object to access high-level drawing functions and the underlying Core Graphics context.

> **Note**

>  `UIGraphicsImageRendererContext` inherits much of its functionality from its abstract superclass [UIGraphicsRendererContext](uigraphicsrenderercontext.md).

To learn how to use a `UIGraphicsImageRendererContext` object in combination with an image renderer, see [Creating a graphics image renderer](uigraphicsimagerenderer.md#Creating-a-graphics-image-renderer).

## Topics

### Getting the image

- [currentImage](uigraphicsimagerenderercontext/currentimage.md): The current state of the drawing context, expressed as an object that manages image data in your app.

### Getting the image drawing actions

- [UIGraphicsImageRenderer.DrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.

## Relationships

### Inherits From

- [UIGraphicsRendererContext](uigraphicsrenderercontext.md)

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
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsImageRendererContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The drawing environment for an image renderer.

## Declaration

```objectivec
@interface UIGraphicsImageRendererContext : UIGraphicsRendererContext
```

<a id="overview"></a>

## Overview

When using the [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) drawing methods, you must pass a block of type [UIGraphicsImageDrawingActions](uigraphicsimagerenderer/drawingactions.md) as an argument, which provides a [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) instance as an argument. Use the context object to access high-level drawing functions and the underlying Core Graphics context.

> **Note**

>  `UIGraphicsImageRendererContext` inherits much of its functionality from its abstract superclass [UIGraphicsRendererContext](uigraphicsrenderercontext.md).

To learn how to use a `UIGraphicsImageRendererContext` object in combination with an image renderer, see [Creating a graphics image renderer](uigraphicsimagerenderer.md#Creating-a-graphics-image-renderer).

## Topics

### Getting the image

- [currentImage](uigraphicsimagerenderercontext/currentimage.md): The current state of the drawing context, expressed as an object that manages image data in your app.

### Getting the image drawing actions

- [UIGraphicsImageDrawingActions](uigraphicsimagerenderer/drawingactions.md): A closure for drawing an image.

## Relationships

### Inherits From

- [UIGraphicsRendererContext](uigraphicsrenderercontext.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
