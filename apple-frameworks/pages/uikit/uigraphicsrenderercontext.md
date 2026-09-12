> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext)

# UIGraphicsRendererContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The base class for the drawing environments for graphics renderers.

## Declaration

```swift
class UIGraphicsRendererContext
```

<a id="overview"></a>

## Overview

You don’t create instances of [UIGraphicsRendererContext](uigraphicsrenderercontext.md) yourself. Instead, when you use a concrete subclass of [UIGraphicsRenderer](uigraphicsrenderer.md), you are provided an instance of the appropriate [UIGraphicsRendererContext](uigraphicsrenderercontext.md) subclass—either [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) or [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md)—as an argument to a [UIGraphicsDrawingActions](uigraphicsdrawingactions.md) drawing actions block.

[UIGraphicsRendererContext](uigraphicsrenderercontext.md) objects provide high-level drawing methods in addition to access to the underlying Core Graphics context.

## Topics

### Getting the drawing context

- [cgContext](uigraphicsrenderercontext/cgcontext.md): The underlying Core Graphics context.
- [format](uigraphicsrenderercontext/format.md): The format used to create the associated graphics renderer.

### Drawing content

- [stroke(\_:)](uigraphicsrenderercontext/stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [stroke(\_:blendMode:)](uigraphicsrenderercontext/stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fill(\_:blendMode:)](uigraphicsrenderercontext/fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.
- [fill(\_:)](uigraphicsrenderercontext/fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

### Applying a clipping rectangle

- [clip(to:)](uigraphicsrenderercontext/clip%28to_%29.md): Sets the clipping mask for the drawing context to the specified rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md)
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsRendererContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The base class for the drawing environments for graphics renderers.

## Declaration

```objectivec
@interface UIGraphicsRendererContext : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of [UIGraphicsRendererContext](uigraphicsrenderercontext.md) yourself. Instead, when you use a concrete subclass of [UIGraphicsRenderer](uigraphicsrenderer.md), you are provided an instance of the appropriate [UIGraphicsRendererContext](uigraphicsrenderercontext.md) subclass—either [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md) or [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md)—as an argument to a [UIGraphicsDrawingActions](uigraphicsdrawingactions.md) drawing actions block.

[UIGraphicsRendererContext](uigraphicsrenderercontext.md) objects provide high-level drawing methods in addition to access to the underlying Core Graphics context.

## Topics

### Getting the drawing context

- [CGContext](uigraphicsrenderercontext/cgcontext.md): The underlying Core Graphics context.
- [format](uigraphicsrenderercontext/format.md): The format used to create the associated graphics renderer.

### Drawing content

- [strokeRect:](uigraphicsrenderercontext/stroke%28__%29.md): Paints a rectangular path using the currently selected stroke color.
- [strokeRect:blendMode:](uigraphicsrenderercontext/stroke%28__blendmode_%29.md): Paints a rectangular path using the currently selected stroke color and specified blend mode.
- [fillRect:blendMode:](uigraphicsrenderercontext/fill%28__blendmode_%29.md): Paints a rectangular area with the currently selected fill color using the supplied blend mode.
- [fillRect:](uigraphicsrenderercontext/fill%28__%29.md): Paints a rectangular area with the currently selected fill color.

### Applying a clipping rectangle

- [clipToRect:](uigraphicsrenderercontext/clip%28to_%29.md): Sets the clipping mask for the drawing context to the specified rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md)
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
