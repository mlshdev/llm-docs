> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumer](https://developer.apple.com/documentation/coregraphics/cgdataconsumer)

# CGDataConsumer (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.

## Declaration

```swift
class CGDataConsumer
```

<a id="overview"></a>

## Overview

Most apps should use [CGImageDestination](../imageio/cgimagedestination.md) objects instead.

## Topics

### Creating Data Consumers

- [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(url:)](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [init(data:)](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

### Working with Core Foundation Types

- [typeID](cgdataconsumer/typeid.md): Returns the Core Foundation type identifier for Core Graphics data consumers.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Utility and Support Classes

- [CGDataProvider](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGShading](cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
- [CGGradient](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGFunction](cgfunction.md): A general facility for defining and using callback functions.
- [CGPattern](cgpattern.md): A 2D pattern to be used for drawing graphics paths.

# CGDataConsumerRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.

## Declaration

```objectivec
typedef struct CGDataConsumer * CGDataConsumerRef;
```

<a id="overview"></a>

## Overview

Most apps should use [CGImageDestinationRef](../imageio/cgimagedestination.md) objects instead.

## Topics

### Creating Data Consumers

- [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithURL](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCreateWithCFData](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

### Retaining and Releasing Data Consumers

- [CGDataConsumerRelease](cgdataconsumerrelease.md): Decrements the retain count of a data consumer.
- [CGDataConsumerRetain](cgdataconsumerretain.md): Increments the retain count of a data consumer.

### Working with Core Foundation Types

- [CGDataConsumerGetTypeID](cgdataconsumer/typeid.md): Returns the Core Foundation type identifier for Core Graphics data consumers.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
