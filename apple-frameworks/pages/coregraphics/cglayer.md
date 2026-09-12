> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayer](https://developer.apple.com/documentation/coregraphics/cglayer)

# CGLayer (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An offscreen context for reusing content drawn with Core Graphics.

## Declaration

```swift
class CGLayer
```

## Topics

### Creating Layer Objects

- [init(\_:size:auxiliaryInfo:)](cglayer/init%28__size_auxiliaryinfo_%29.md): Creates a layer object that is associated with a graphics context.

### Examining a Layer

- [context](cglayer/context.md): Returns the graphics context associated with a layer object.
- [size](cglayer/size.md): Returns the width and height of a layer object.

### Working with Core Foundation Types

- [typeID](cglayer/typeid.md): Returns the unique type identifier used for [CGLayer](cglayer.md) objects.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### 2D Drawing

- [CGContext](cgcontext.md): A Quartz 2D drawing environment.
- [CGImage](cgimage.md): A bitmap image or image mask.
- [CGPath](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGMutablePath](cgmutablepath.md): A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.

# CGLayerRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An offscreen context for reusing content drawn with Core Graphics.

## Declaration

```objectivec
typedef struct CGLayer * CGLayerRef;
```

## Topics

### Creating Layer Objects

- [CGLayerCreateWithContext](cglayer/init%28__size_auxiliaryinfo_%29.md): Creates a layer object that is associated with a graphics context.

### Retaining and Releasing Color Objects

- [CGLayerRetain](cglayerretain.md): Increments the retain count of a layer object.
- [CGLayerRelease](cglayerrelease.md): Decrements the retain count of a layer object.

### Examining a Layer

- [CGLayerGetContext](cglayer/context.md): Returns the graphics context associated with a layer object.
- [CGLayerGetSize](cglayer/size.md): Returns the width and height of a layer object.

### Working with Core Foundation Types

- [CGLayerGetTypeID](cglayer/typeid.md): Returns the unique type identifier used for [CGLayerRef](cglayer.md) objects.

## See Also

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
