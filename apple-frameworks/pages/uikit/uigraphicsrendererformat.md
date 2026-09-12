> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrendererformat](https://developer.apple.com/documentation/uikit/uigraphicsrendererformat)

# UIGraphicsRendererFormat (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of a graphics renderer context.

## Declaration

```swift
class UIGraphicsRendererFormat
```

<a id="overview"></a>

## Overview

Create a [UIGraphicsRendererFormat](uigraphicsrendererformat.md) object, or one of its subclasses ([UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) and [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)), and use it to construct a graphics renderer by providing the format object as a parameter in a [UIGraphicsRenderer](uigraphicsrenderer.md) subclass intializer.

The graphics renderer uses the format object you provided to configure any context objects ([UIGraphicsRendererContext](uigraphicsrenderercontext.md)) it creates as part of the rendering process.

If you use a graphics renderer initializer that doesn’t require a format argument, the renderer creates a format object using the [default()](uigraphicsrendererformat/default%28%29.md) class method.

The renderer format object contains properties that represent the immutable aspects of the renderer’s configuration. This means that repeated uses of a single graphics renderer object will always use the same format object.

## Topics

### Creating a format

- [default()](uigraphicsrendererformat/default%28%29.md): Deprecated. Returns a format that represents the highest fidelity that the current device supports.
- [preferred()](uigraphicsrendererformat/preferred%28%29.md): Returns the most suitable format for the main screen’s current configuration.

### Getting the bounds

- [bounds](uigraphicsrendererformat/bounds.md): The bounds of the graphics context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md)
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsRendererFormat (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of a graphics renderer context.

## Declaration

```objectivec
@interface UIGraphicsRendererFormat : NSObject
```

<a id="overview"></a>

## Overview

Create a [UIGraphicsRendererFormat](uigraphicsrendererformat.md) object, or one of its subclasses ([UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) and [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)), and use it to construct a graphics renderer by providing the format object as a parameter in a [UIGraphicsRenderer](uigraphicsrenderer.md) subclass intializer.

The graphics renderer uses the format object you provided to configure any context objects ([UIGraphicsRendererContext](uigraphicsrenderercontext.md)) it creates as part of the rendering process.

If you use a graphics renderer initializer that doesn’t require a format argument, the renderer creates a format object using the [defaultFormat](uigraphicsrendererformat/default%28%29.md) class method.

The renderer format object contains properties that represent the immutable aspects of the renderer’s configuration. This means that repeated uses of a single graphics renderer object will always use the same format object.

## Topics

### Creating a format

- [defaultFormat](uigraphicsrendererformat/default%28%29.md): Deprecated. Returns a format that represents the highest fidelity that the current device supports.
- [preferredFormat](uigraphicsrendererformat/preferred%28%29.md): Returns the most suitable format for the main screen’s current configuration.

### Getting the bounds

- [bounds](uigraphicsrendererformat/bounds.md): The bounds of the graphics context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md)
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
