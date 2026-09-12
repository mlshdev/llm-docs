> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer](https://developer.apple.com/documentation/quartzcore/caopengllayer)

# CAOpenGLLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

A layer that provides a layer suitable for rendering OpenGL content.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class CAOpenGLLayer
```

<a id="overview"></a>

## Overview

To provide OpenGL content you subclass `CAOpenGLLayer` and override [draw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](caopengllayer/draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md). You can specify that the OpenGL content is static by setting the [isAsynchronous](caopengllayer/isasynchronous.md) property to [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Determining Layer Properties

- [colorspace](caopengllayer/colorspace.md): Deprecated. The layer’s colorspace in Core Graphics.
- [wantsExtendedDynamicRangeContent](caopengllayer/wantsextendeddynamicrangecontent.md): Deprecated. Tells whether or not the layer supports content with extended dynamic range.

### Drawing Layer Content

- [isAsynchronous](caopengllayer/isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [canDraw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](caopengllayer/candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.
- [draw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](caopengllayer/draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

### Managing Pixel Format

- [copyCGLPixelFormat(forDisplayMask:)](caopengllayer/copycglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.
- [releaseCGLPixelFormat(\_:)](caopengllayer/releasecglpixelformat%28__%29.md): Deprecated. Releases the specified OpenGL pixel format object.

### Managing the Rendering Context

- [copyCGLContext(forPixelFormat:)](caopengllayer/copycglcontext%28forpixelformat_%29.md): Deprecated. Returns the rendering context the receiver requires for the specified pixel format.
- [releaseCGLContext(\_:)](caopengllayer/releasecglcontext%28__%29.md): Deprecated. Releases the specified rendering context.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.

# CAOpenGLLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

A layer that provides a layer suitable for rendering OpenGL content.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface CAOpenGLLayer : CALayer
```

<a id="overview"></a>

## Overview

To provide OpenGL content you subclass `CAOpenGLLayer` and override [drawInCGLContext:pixelFormat:forLayerTime:displayTime:](caopengllayer/draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md). You can specify that the OpenGL content is static by setting the [asynchronous](caopengllayer/isasynchronous.md) property to [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Determining Layer Properties

- [colorspace](caopengllayer/colorspace.md): Deprecated. The layer’s colorspace in Core Graphics.
- [wantsExtendedDynamicRangeContent](caopengllayer/wantsextendeddynamicrangecontent.md): Deprecated. Tells whether or not the layer supports content with extended dynamic range.

### Drawing Layer Content

- [asynchronous](caopengllayer/isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [canDrawInCGLContext:pixelFormat:forLayerTime:displayTime:](caopengllayer/candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.
- [drawInCGLContext:pixelFormat:forLayerTime:displayTime:](caopengllayer/draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

### Managing Pixel Format

- [copyCGLPixelFormatForDisplayMask:](caopengllayer/copycglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.
- [releaseCGLPixelFormat:](caopengllayer/releasecglpixelformat%28__%29.md): Deprecated. Releases the specified OpenGL pixel format object.

### Managing the Rendering Context

- [copyCGLContextForPixelFormat:](caopengllayer/copycglcontext%28forpixelformat_%29.md): Deprecated. Returns the rendering context the receiver requires for the specified pixel format.
- [releaseCGLContext:](caopengllayer/releasecglcontext%28__%29.md): Deprecated. Releases the specified rendering context.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.
