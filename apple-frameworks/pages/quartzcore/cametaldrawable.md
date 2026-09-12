> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldrawable](https://developer.apple.com/documentation/quartzcore/cametaldrawable)

# CAMetalDrawable (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Metal drawable associated with a Core Animation layer.

## Declaration

```swift
protocol CAMetalDrawable : MTLDrawable
```

<a id="overview"></a>

## Overview

A [CAMetalLayer](cametallayer.md) instance owns any instance that implements this protocol. Don’t implement this protocol yourself. See the [CAMetalLayer](cametallayer.md) reference for information on how to request drawable objects.

## Topics

### Getting the Drawable’s Texture

- [texture](cametaldrawable/texture.md): A Metal texture object that contains the drawable’s contents.

### Getting the Owning Layer

- [layer](cametaldrawable/layer.md): The layer that owns this drawable object.

## Relationships

### Inherits From

- [MTLDrawable](../metal/mtldrawable.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.

# CAMetalDrawable (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Metal drawable associated with a Core Animation layer.

## Declaration

```objectivec
@protocol CAMetalDrawable <MTLDrawable>
```

<a id="overview"></a>

## Overview

A [CAMetalLayer](cametallayer.md) instance owns any instance that implements this protocol. Don’t implement this protocol yourself. See the [CAMetalLayer](cametallayer.md) reference for information on how to request drawable objects.

## Topics

### Getting the Drawable’s Texture

- [texture](cametaldrawable/texture.md): A Metal texture object that contains the drawable’s contents.

### Getting the Owning Layer

- [layer](cametaldrawable/layer.md): The layer that owns this drawable object.

## Relationships

### Inherits From

- [MTLDrawable](../metal/mtldrawable.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.
