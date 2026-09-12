> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext)

# UIGraphicsPDFRendererContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The drawing environment for a PDF renderer.

## Declaration

```swift
class UIGraphicsPDFRendererContext
```

<a id="overview"></a>

## Overview

When using the [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) drawing methods, you must pass a block of type [UIGraphicsPDFRenderer.DrawingActions](uigraphicspdfrenderer/drawingactions.md) as an argument, which provides a [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) instance as an argument. Use the context object to access high-level drawing functions and the underlying Core Graphics context.

> **Note**

>  [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) inherits much of its functionality from its abstract superclass [UIGraphicsRendererContext](uigraphicsrenderercontext.md).

To learn how to use a [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) object in combination with a PDF renderer, see [Creating a graphics PDF renderer](uigraphicspdfrenderer.md#Creating-a-graphics-PDF-renderer).

## Topics

### Marking new pages

- [beginPage()](uigraphicspdfrenderercontext/beginpage%28%29.md): Marks the beginning of a new page in the PDF context and configures it using default values.
- [beginPage(withBounds:pageInfo:)](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md): Marks the beginning of a new page in the PDF context and configures it using the specified values.

### Getting the PDF bounds

- [pdfContextBounds](uigraphicspdfrenderercontext/pdfcontextbounds.md): The bounds of the PDF context for the current page.

### Managing destinations

- [addDestination(withName:at:)](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md): Creates a named destination point in the current PDF page.
- [setDestinationWithName(\_:for:)](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.
- [setURL(\_:for:)](uigraphicspdfrenderercontext/seturl%28__for_%29.md): Creates a link to an external resource defined by a URL

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
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsPDFRendererContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The drawing environment for a PDF renderer.

## Declaration

```objectivec
@interface UIGraphicsPDFRendererContext : UIGraphicsRendererContext
```

<a id="overview"></a>

## Overview

When using the [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md) drawing methods, you must pass a block of type [UIGraphicsPDFDrawingActions](uigraphicspdfrenderer/drawingactions.md) as an argument, which provides a [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) instance as an argument. Use the context object to access high-level drawing functions and the underlying Core Graphics context.

> **Note**

>  [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) inherits much of its functionality from its abstract superclass [UIGraphicsRendererContext](uigraphicsrenderercontext.md).

To learn how to use a [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md) object in combination with a PDF renderer, see [Creating a graphics PDF renderer](uigraphicspdfrenderer.md#Creating-a-graphics-PDF-renderer).

## Topics

### Marking new pages

- [beginPage](uigraphicspdfrenderercontext/beginpage%28%29.md): Marks the beginning of a new page in the PDF context and configures it using default values.
- [beginPageWithBounds:pageInfo:](uigraphicspdfrenderercontext/beginpage%28withbounds_pageinfo_%29.md): Marks the beginning of a new page in the PDF context and configures it using the specified values.

### Getting the PDF bounds

- [pdfContextBounds](uigraphicspdfrenderercontext/pdfcontextbounds.md): The bounds of the PDF context for the current page.

### Managing destinations

- [addDestinationWithName:atPoint:](uigraphicspdfrenderercontext/adddestination%28withname_at_%29.md): Creates a named destination point in the current PDF page.
- [setDestinationWithName:forRect:](uigraphicspdfrenderercontext/setdestinationwithname%28__for_%29.md): Creates a link rectangle in the current page that jumps the PDF viewer to the named destination when clicked.
- [setURL:forRect:](uigraphicspdfrenderercontext/seturl%28__for_%29.md): Creates a link to an external resource defined by a URL

## Relationships

### Inherits From

- [UIGraphicsRendererContext](uigraphicsrenderercontext.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
