> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetile](https://developer.apple.com/documentation/professional_video_applications/fximagetile)

# FxImageTile (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** FxPlug 4.0+

An image tile object that is passed between an out-of-process FxPlug plug-in and a host application.

## Declaration

```swift
class FxImageTile
```

## Mentioned In

- [Rendering in FxPlug](../professional-video-applications/rendering-in-fxplug.md)
- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md)
- [Using out-of-process FxPlug plug-ins](../professional-video-applications/using-out-of-process-fxplug-plug-ins.md)

<a id="overview"></a>

## Overview

An [FxTileableEffect](fxtileableeffect.md) will receive all images as `FxImageTile` objects. These are passed to effects to describe tiles within the full image that need to be rendered. The image data is contained in the [ioSurface](fximagetile/iosurface.md) property. This property may be nil during calls to the plug-in to gather information rather than rendering.

## Topics

### Instance Properties

- [deviceRegistryID](fximagetile/deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](fximagetile/eyetype.md): The stereoscopic eye type of the image tile.
- [field](fximagetile/field.md): Which field of the image this is.
- [fieldOrder](fximagetile/fieldorder.md): What the field order of the image is.
- [imageOrigin](fximagetile/imageorigin.md): The origin of the image tile.
- [imagePixelBounds](fximagetile/imagepixelbounds.md): The pixel bounds of the entire image.
- [imageSource](fximagetile/imagesource.md): Whether this image tile is from an effect source or an image well parameter.
- [inversePixelTransform](fximagetile/inversepixeltransform.md): The inverse of the [pixelTransform](fximagetile/pixeltransform.md).
- [ioSurface](fximagetile/iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](fximagetile/mediatime.md): The media time of this image tile.
- [parameterID](fximagetile/parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](fximagetile/pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](fximagetile/requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](fximagetile/tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](fximagetile/colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.
- [pixelAspect](fximagetile/pixelaspect.md): Deprecated. The ratio of the width of each pixel to its height.
- [scaleX](fximagetile/scalex.md): Deprecated. The horizontal scale value.
- [scaleY](fximagetile/scaley.md): Deprecated. The vertical scale value.

### Instance Methods

- [metalTexture(for:)](fximagetile/metaltexture%28for_%29.md): Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.
- [openGLTexture(forContext:)](fximagetile/opengltexture%28forcontext_%29.md): Deprecated. Retrieve an OpenGL texture from the [ioSurface](fximagetile/iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxEyeType](fxeyetype.md): Identifies which eye is being sent from a stereoscopic project.
- [FxImageTileRequestSource](fximagetilerequestsource.md): An enumeration that identifies the requested frame.

### Initializers

- [init(coder:)](fximagetile/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Exchanging Image Tiles Between Host and Plug-in

- [FxImageTileRequest](fximagetilerequest.md): An image tile request object that is passed between an out-of-process FxPlug plug-in and a host application.

# FxImageTile (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An image tile object that is passed between an out-of-process FxPlug plug-in and a host application.

## Declaration

```objectivec
@interface FxImageTile : NSObject
```

## Mentioned In

- [Rendering in FxPlug](../professional-video-applications/rendering-in-fxplug.md)
- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md)
- [Using out-of-process FxPlug plug-ins](../professional-video-applications/using-out-of-process-fxplug-plug-ins.md)

<a id="overview"></a>

## Overview

An [FxTileableEffect](fxtileableeffect.md) will receive all images as `FxImageTile` objects. These are passed to effects to describe tiles within the full image that need to be rendered. The image data is contained in the [ioSurface](fximagetile/iosurface.md) property. This property may be nil during calls to the plug-in to gather information rather than rendering.

## Topics

### Instance Properties

- [deviceRegistryID](fximagetile/deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](fximagetile/eyetype.md): The stereoscopic eye type of the image tile.
- [field](fximagetile/field.md): Which field of the image this is.
- [fieldOrder](fximagetile/fieldorder.md): What the field order of the image is.
- [imageOrigin](fximagetile/imageorigin.md): The origin of the image tile.
- [imagePixelBounds](fximagetile/imagepixelbounds.md): The pixel bounds of the entire image.
- [imageSource](fximagetile/imagesource.md): Whether this image tile is from an effect source or an image well parameter.
- [inversePixelTransform](fximagetile/inversepixeltransform.md): The inverse of the [pixelTransform](fximagetile/pixeltransform.md).
- [ioSurface](fximagetile/iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](fximagetile/mediatime.md): The media time of this image tile.
- [parameterID](fximagetile/parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](fximagetile/pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](fximagetile/requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](fximagetile/tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](fximagetile/colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.
- [pixelAspect](fximagetile/pixelaspect.md): Deprecated. The ratio of the width of each pixel to its height.
- [scaleX](fximagetile/scalex.md): Deprecated. The horizontal scale value.
- [scaleY](fximagetile/scaley.md): Deprecated. The vertical scale value.

### Instance Methods

- [metalTextureForDevice:](fximagetile/metaltexture%28for_%29.md): Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.
- [openGLTextureForContext:](fximagetile/opengltexture%28forcontext_%29.md): Deprecated. Retrieve an OpenGL texture from the [ioSurface](fximagetile/iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxEyeType](fxeyetype.md): Identifies which eye is being sent from a stereoscopic project.
- [FxImageTileRequestSource](fximagetilerequestsource.md): An enumeration that identifies the requested frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Exchanging Image Tiles Between Host and Plug-in

- [FxImageTileRequest](fximagetilerequest.md): An image tile request object that is passed between an out-of-process FxPlug plug-in and a host application.
