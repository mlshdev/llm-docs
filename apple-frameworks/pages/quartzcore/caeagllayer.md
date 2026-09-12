> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caeagllayer](https://developer.apple.com/documentation/quartzcore/caeagllayer)

# CAEAGLLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A layer that supports drawing OpenGL content in iOS and tvOS applications.

> OpenGLES is deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class CAEAGLLayer
```

<a id="overview"></a>

## Overview

If you plan to use OpenGL for your rendering, use this class as the backing layer for your views by returning it from your view’s [layerClass](../uikit/uiview/layerclass.md) class method. The returned [CAEAGLLayer](caeagllayer.md) object is a wrapper for a Core Animation surface that is fully compatible with OpenGL ES function calls.

Prior to designating the layer’s associated view as the render target for a graphics context, you can change the rendering attributes you want using the [drawableProperties](../opengles/eagldrawable/drawableproperties.md) property. This property lets you configure the color format for the rendering surface and whether the surface retains its contents. For a list of keys (and corresponding values) you can include in this dictionary (along with their default values), see the [EAGLDrawable](../opengles/eagldrawable.md).

Because an OpenGL ES rendering surface is presented to the user using Core Animation, any effects and animations you apply to the layer affect the 3D content you render. However, for best performance, do the following:

- Set the layer’s opaque attribute to `TRUE`.
- Set the layer bounds to match the dimensions of the display.
- Make sure the layer is not transformed.
- Avoid drawing other layers on top of the `CAEAGLLayer` object. If you must draw other, non OpenGL content, you might find the performance cost acceptable if you place transparent 2D content on top of the GL content and also make sure that the OpenGL content is opaque and not transformed.
- When drawing landscape content on a portrait display, you should rotate the content yourself rather than using the `CAEAGLLayer` transform to rotate it.

## Topics

### Accessing the Layer Properties

- [drawableProperties](../opengles/eagldrawable/drawableproperties.md): Deprecated. A dictionary of values that specify the desired characteristics of the drawable surface.
- [presentsWithTransaction](caeagllayer/presentswithtransaction.md): Deprecated. A Boolean value that determines whether the layer presents its content using a Core Animation transaction.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [EAGLDrawable](../opengles/eagldrawable.md)
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
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.

# CAEAGLLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A layer that supports drawing OpenGL content in iOS and tvOS applications.

> OpenGLES is deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface CAEAGLLayer : CALayer
```

<a id="overview"></a>

## Overview

If you plan to use OpenGL for your rendering, use this class as the backing layer for your views by returning it from your view’s [layerClass](../uikit/uiview/layerclass.md) class method. The returned [CAEAGLLayer](caeagllayer.md) object is a wrapper for a Core Animation surface that is fully compatible with OpenGL ES function calls.

Prior to designating the layer’s associated view as the render target for a graphics context, you can change the rendering attributes you want using the [drawableProperties](../opengles/eagldrawable/drawableproperties.md) property. This property lets you configure the color format for the rendering surface and whether the surface retains its contents. For a list of keys (and corresponding values) you can include in this dictionary (along with their default values), see the [EAGLDrawable](../opengles/eagldrawable.md).

Because an OpenGL ES rendering surface is presented to the user using Core Animation, any effects and animations you apply to the layer affect the 3D content you render. However, for best performance, do the following:

- Set the layer’s opaque attribute to `TRUE`.
- Set the layer bounds to match the dimensions of the display.
- Make sure the layer is not transformed.
- Avoid drawing other layers on top of the `CAEAGLLayer` object. If you must draw other, non OpenGL content, you might find the performance cost acceptable if you place transparent 2D content on top of the GL content and also make sure that the OpenGL content is opaque and not transformed.
- When drawing landscape content on a portrait display, you should rotate the content yourself rather than using the `CAEAGLLayer` transform to rotate it.

## Topics

### Accessing the Layer Properties

- [drawableProperties](../opengles/eagldrawable/drawableproperties.md): Deprecated. A dictionary of values that specify the desired characteristics of the drawable surface.
- [presentsWithTransaction](caeagllayer/presentswithtransaction.md): Deprecated. A Boolean value that determines whether the layer presents its content using a Core Animation transaction.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [EAGLDrawable](../opengles/eagldrawable.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.
