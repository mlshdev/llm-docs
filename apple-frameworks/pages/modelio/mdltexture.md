> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture](https://developer.apple.com/documentation/modelio/mdltexture)

# MDLTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A source of texel data to be used in rendering material surface appearances.

## Declaration

```swift
class MDLTexture
```

<a id="overview"></a>

## Overview

You use the [MDLTexture](mdltexture.md) class or one of its subclasses to identify, load, or create texture data, and then associate textures with materials using the [MDLTextureSampler](mdltexturesampler.md) and [MDLMaterialProperty](mdlmaterialproperty.md) classes. When you load 3D objects from an asset file (in a format that supports texturing) with the [MDLAsset](mdlasset.md) class, Model I/O automatically creates texture objects and material objects and associates them with the [MDLSubmesh](mdlsubmesh.md) objects in the asset.

## Topics

### Loading Textures from a Bundle

- [init(named:)](mdltexture/init%28named_%29.md): Loads the texture with the specified filename from the app’s main bundle.
- [init(named:bundle:)](mdltexture/init%28named_bundle_%29.md): Loads the texture with the specified filename from the specified bundle.
- [init(cubeWithImagesNamed:)](mdltexture/init%28cubewithimagesnamed_%29.md): Loads a cube texture from the specified image files in the app’s main bundle.
- [init(cubeWithImagesNamed:bundle:)](mdltexture/init%28cubewithimagesnamed_bundle_%29.md): Loads a cube texture from the specified image files in the specified bundle.

### Creating Textures

- [init(data:topLeftOrigin:name:dimensions:rowStride:channelCount:channelEncoding:isCube:)](mdltexture/init%28data_topleftorigin_name_dimensions_rowstride_channelcount_channelencoding_iscube_%29.md): Initializes a texture object with the specified image data and properties.

### Exporting Textures

- [write(to:)](mdltexture/write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [write(to:type:)](mdltexture/write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.
- [imageFromTexture()](mdltexture/imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.

### Accessing Texture Data

- [texelDataWithTopLeftOrigin()](mdltexture/texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin()](mdltexture/texeldatawithbottomleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.
- [texelDataWithTopLeftOrigin(atMipLevel:create:)](mdltexture/texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin(atMipLevel:create:)](mdltexture/texeldatawithbottomleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.

### Examining Texture Attributes

- [dimensions](mdltexture/dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](mdltexture/rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](mdltexture/channelcount.md): The number of channels per texel.
- [channelEncoding](mdltexture/channelencoding.md): The data format for each channel value per texel.
- [isCube](mdltexture/iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](mdltexture/miplevelcount.md): The number of mipmap levels contained in the texture image data.

### Creating Irradiance Textures

- [irradianceTextureCube(with:name:dimensions:)](mdltexture/irradiancetexturecube%28with_name_dimensions_%29.md): Generates an irradiance texture from the specified reflectance cube texture.
- [irradianceTextureCube(with:name:dimensions:roughness:)](mdltexture/irradiancetexturecube%28with_name_dimensions_roughness_%29.md): Generates an irradiance texture from the specified reflectance cube texture, assuming a surface of the specified roughness.

### Constants

- [MDLTextureChannelEncoding](mdltexturechannelencoding.md): Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.

### Initializers

- [init()](mdltexture/init%28%29.md)
- [init(named:assetResolver:)](mdltexture/init%28named_assetresolver_%29.md)

### Instance Properties

- [hasAlphaValues](mdltexture/hasalphavalues.md)

### Instance Methods

- [imageFromTexture(atLevel:)](mdltexture/imagefromtexture%28atlevel_%29.md)
- [write(to:level:)](mdltexture/write%28to_level_%29.md)
- [write(to:type:level:)](mdltexture/write%28to_type_level_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLCheckerboardTexture](mdlcheckerboardtexture.md)
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md)
- [MDLNoiseTexture](mdlnoisetexture.md)
- [MDLNormalMapTexture](mdlnormalmaptexture.md)
- [MDLSkyCubeTexture](mdlskycubetexture.md)
- [MDLURLTexture](mdlurltexture.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Textures

- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A source of texel data to be used in rendering material surface appearances.

## Declaration

```objectivec
@interface MDLTexture : NSObject
```

<a id="overview"></a>

## Overview

You use the [MDLTexture](mdltexture.md) class or one of its subclasses to identify, load, or create texture data, and then associate textures with materials using the [MDLTextureSampler](mdltexturesampler.md) and [MDLMaterialProperty](mdlmaterialproperty.md) classes. When you load 3D objects from an asset file (in a format that supports texturing) with the [MDLAsset](mdlasset.md) class, Model I/O automatically creates texture objects and material objects and associates them with the [MDLSubmesh](mdlsubmesh.md) objects in the asset.

## Topics

### Loading Textures from a Bundle

- [textureNamed:](mdltexture/init%28named_%29.md): Loads the texture with the specified filename from the app’s main bundle.
- [textureNamed:bundle:](mdltexture/init%28named_bundle_%29.md): Loads the texture with the specified filename from the specified bundle.
- [textureCubeWithImagesNamed:](mdltexture/init%28cubewithimagesnamed_%29.md): Loads a cube texture from the specified image files in the app’s main bundle.
- [textureCubeWithImagesNamed:bundle:](mdltexture/init%28cubewithimagesnamed_bundle_%29.md): Loads a cube texture from the specified image files in the specified bundle.

### Creating Textures

- [initWithData:topLeftOrigin:name:dimensions:rowStride:channelCount:channelEncoding:isCube:](mdltexture/init%28data_topleftorigin_name_dimensions_rowstride_channelcount_channelencoding_iscube_%29.md): Initializes a texture object with the specified image data and properties.

### Exporting Textures

- [writeToURL:](mdltexture/write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [writeToURL:type:](mdltexture/write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.
- [imageFromTexture](mdltexture/imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.

### Accessing Texture Data

- [texelDataWithTopLeftOrigin](mdltexture/texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin](mdltexture/texeldatawithbottomleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.
- [texelDataWithTopLeftOriginAtMipLevel:create:](mdltexture/texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOriginAtMipLevel:create:](mdltexture/texeldatawithbottomleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.

### Examining Texture Attributes

- [dimensions](mdltexture/dimensions.md): The width and height, in texels, of the texture image.
- [rowStride](mdltexture/rowstride.md): The number of bytes between the first texel in a row of image data and the first texel in the next row.
- [channelCount](mdltexture/channelcount.md): The number of channels per texel.
- [channelEncoding](mdltexture/channelencoding.md): The data format for each channel value per texel.
- [isCube](mdltexture/iscube.md): A Boolean value that indicates whether the texture is a cube textures.
- [mipLevelCount](mdltexture/miplevelcount.md): The number of mipmap levels contained in the texture image data.

### Creating Irradiance Textures

- [irradianceTextureCubeWithTexture:name:dimensions:](mdltexture/irradiancetexturecube%28with_name_dimensions_%29.md): Generates an irradiance texture from the specified reflectance cube texture.
- [irradianceTextureCubeWithTexture:name:dimensions:roughness:](mdltexture/irradiancetexturecube%28with_name_dimensions_roughness_%29.md): Generates an irradiance texture from the specified reflectance cube texture, assuming a surface of the specified roughness.

### Constants

- [MDLTextureChannelEncoding](mdltexturechannelencoding.md): Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.

### Instance Properties

- [hasAlphaValues](mdltexture/hasalphavalues.md)

### Instance Methods

- [imageFromTextureAtLevel:](mdltexture/imagefromtexture%28atlevel_%29.md)
- [init](mdltexture/init%28%29.md)
- [writeToURL:level:](mdltexture/write%28to_level_%29.md)
- [writeToURL:type:level:](mdltexture/write%28to_type_level_%29.md)

### Type Methods

- [textureNamed:assetResolver:](mdltexture/init%28named_assetresolver_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLCheckerboardTexture](mdlcheckerboardtexture.md)
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md)
- [MDLNoiseTexture](mdlnoisetexture.md)
- [MDLNormalMapTexture](mdlnormalmaptexture.md)
- [MDLSkyCubeTexture](mdlskycubetexture.md)
- [MDLURLTexture](mdlurltexture.md)

### Conforms To

- [MDLNamed](mdlnamed.md)

## See Also

### Textures

- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.
