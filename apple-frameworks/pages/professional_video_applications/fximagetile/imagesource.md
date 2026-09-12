> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetile/imagesource](https://developer.apple.com/documentation/professional_video_applications/fximagetile/imagesource)

# imageSource (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

Whether this image tile is from an effect source or an image well parameter.

## Declaration

```swift
var imageSource: FxImageTileRequestSource { get }
```

## See Also

### Instance Properties

- [deviceRegistryID](deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](eyetype.md): The stereoscopic eye type of the image tile.
- [field](field.md): Which field of the image this is.
- [fieldOrder](fieldorder.md): What the field order of the image is.
- [imageOrigin](imageorigin.md): The origin of the image tile.
- [imagePixelBounds](imagepixelbounds.md): The pixel bounds of the entire image.
- [inversePixelTransform](inversepixeltransform.md): The inverse of the [pixelTransform](pixeltransform.md).
- [ioSurface](iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](mediatime.md): The media time of this image tile.
- [parameterID](parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.

# imageSource (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

Whether this image tile is from an effect source or an image well parameter.

## Declaration

```objectivec
@property (nonatomic, readonly) FxImageTileRequestSource imageSource;
```

## See Also

### Instance Properties

- [deviceRegistryID](deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](eyetype.md): The stereoscopic eye type of the image tile.
- [field](field.md): Which field of the image this is.
- [fieldOrder](fieldorder.md): What the field order of the image is.
- [imageOrigin](imageorigin.md): The origin of the image tile.
- [imagePixelBounds](imagepixelbounds.md): The pixel bounds of the entire image.
- [inversePixelTransform](inversepixeltransform.md): The inverse of the [pixelTransform](pixeltransform.md).
- [ioSurface](iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](mediatime.md): The media time of this image tile.
- [parameterID](parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.
