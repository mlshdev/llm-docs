> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat)

# UIGraphicsImageRendererFormat (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of an image renderer context.

## Declaration

```swift
class UIGraphicsImageRendererFormat
```

<a id="overview"></a>

## Overview

Use an instance of [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) to initialize a [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) object with nondefault attributes.

The image renderer format object contains properties that determine the attributes of the underlying Core Graphics contexts that the image renderer creates. Use the [default()](uigraphicsrendererformat/default%28%29.md) class method to create an image renderer format instance optimized for the current device.

## Topics

### Creating the renderer

- [init(for:)](uigraphicsimagerendererformat/init%28for_%29.md): Creates the most suitable format for rendering on a device with the specified traits.

### Configuring the renderer attributes

- [opaque](uigraphicsimagerendererformat/opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](uigraphicsimagerendererformat/scale.md): The display scale of the image renderer context.
- [preferredRange](uigraphicsimagerendererformat/preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormat.Range](uigraphicsimagerendererformat/range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](uigraphicsimagerendererformat/prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

### Initializers

- [init(forTraitCollection:)](uigraphicsimagerendererformat/init%28fortraitcollection_%29.md)

### Instance Properties

- [supportsHighDynamicRange](uigraphicsimagerendererformat/supportshighdynamicrange.md)

## Relationships

### Inherits From

- [UIGraphicsRendererFormat](uigraphicsrendererformat.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
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
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.

# UIGraphicsImageRendererFormat (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of an image renderer context.

## Declaration

```objectivec
@interface UIGraphicsImageRendererFormat : UIGraphicsRendererFormat
```

<a id="overview"></a>

## Overview

Use an instance of [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md) to initialize a [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) object with nondefault attributes.

The image renderer format object contains properties that determine the attributes of the underlying Core Graphics contexts that the image renderer creates. Use the [defaultFormat](uigraphicsrendererformat/default%28%29.md) class method to create an image renderer format instance optimized for the current device.

## Topics

### Creating the renderer

- [formatForTraitCollection:](uigraphicsimagerendererformat/init%28for_%29.md): Creates the most suitable format for rendering on a device with the specified traits.

### Configuring the renderer attributes

- [opaque](uigraphicsimagerendererformat/opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](uigraphicsimagerendererformat/scale.md): The display scale of the image renderer context.
- [preferredRange](uigraphicsimagerendererformat/preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormatRange](uigraphicsimagerendererformat/range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](uigraphicsimagerendererformat/prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

### Instance Properties

- [supportsHighDynamicRange](uigraphicsimagerendererformat/supportshighdynamicrange.md)

## Relationships

### Inherits From

- [UIGraphicsRendererFormat](uigraphicsrendererformat.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
- [UIGraphicsPDFRendererFormat](uigraphicspdfrendererformat.md): A set of drawing attributes that represents the configuration of a PDF renderer context.
