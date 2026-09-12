> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetile/imageorigin](https://developer.apple.com/documentation/professional_video_applications/fximagetile/imageorigin)

# imageOrigin (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

The origin of the image tile.

## Declaration

```swift
var imageOrigin: FxImageOrigin { get }
```

## See Also

### Instance Properties

- [deviceRegistryID](deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](eyetype.md): The stereoscopic eye type of the image tile.
- [field](field.md): Which field of the image this is.
- [fieldOrder](fieldorder.md): What the field order of the image is.
- [imagePixelBounds](imagepixelbounds.md): The pixel bounds of the entire image.
- [imageSource](imagesource.md): Whether this image tile is from an effect source or an image well parameter.
- [inversePixelTransform](inversepixeltransform.md): The inverse of the [pixelTransform](pixeltransform.md).
- [ioSurface](iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](mediatime.md): The media time of this image tile.
- [parameterID](parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.

# imageOrigin (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The origin of the image tile.

## Declaration

```objectivec
@property (nonatomic, readonly) FxImageOrigin imageOrigin;
```

## See Also

### Instance Properties

- [deviceRegistryID](deviceregistryid.md): The registryID of the Metal device or OpenGL renderer used to create this texture.
- [eyeType](eyetype.md): The stereoscopic eye type of the image tile.
- [field](field.md): Which field of the image this is.
- [fieldOrder](fieldorder.md): What the field order of the image is.
- [imagePixelBounds](imagepixelbounds.md): The pixel bounds of the entire image.
- [imageSource](imagesource.md): Whether this image tile is from an effect source or an image well parameter.
- [inversePixelTransform](inversepixeltransform.md): The inverse of the [pixelTransform](pixeltransform.md).
- [ioSurface](iosurface.md): The surface object to cast as a surface reference.
- [mediaTime](mediatime.md): The media time of this image tile.
- [parameterID](parameterid.md): The parameter ID of the image well parameter of the source of this image tile. `0` if it is the effect source and not from a parameter.
- [pixelTransform](pixeltransform.md): The transformation between pixel units and idealized, 100% scale, square pixel image units.
- [requestError](requesterror.md): Any errors that occurred from the image request. Can be nil if there were no errors or errors are not applicable.
- [tilePixelBounds](tilepixelbounds.md): The pixel bounds of this tile.
- [colorSpace](colorspace.md): The CGColorSpaceRef that matches the color space used in creating the image.
