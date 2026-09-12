> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureinfo](https://developer.apple.com/documentation/glkit/glktextureinfo)

# GLKTextureInfo (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Information about OpenGL textures created by the [GLKTextureLoader](glktextureloader.md) class.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKTextureInfo
```

<a id="overview"></a>

## Overview

When your app loads textures using the [GLKTextureLoader](glktextureloader.md) class, the texture loader returns information about the textures using [GLKTextureInfo](glktextureinfo.md) objects. Your app never creates [GLKTextureInfo](glktextureinfo.md) objects directly.

## Topics

### Reading Texture Information

- [name](glktextureinfo/name-swift.property.md): Deprecated. The OpenGL context’s name for the texture.
- [target](glktextureinfo/target-swift.property.md): Deprecated. The OpenGL binding target for the texture.
- [height](glktextureinfo/height-swift.property.md): Deprecated. The height of the loaded texture.
- [width](glktextureinfo/width-swift.property.md): Deprecated. The width of the loaded texture.
- [textureOrigin](glktextureinfo/textureorigin-swift.property.md): Deprecated. The location of the origin in the loaded texture.
- [alphaState](glktextureinfo/alphastate-swift.property.md): Deprecated. The state of the alpha component in the loaded texture.
- [containsMipmaps](glktextureinfo/containsmipmaps-swift.property.md): Deprecated. A Boolean value that states whether the loaded texture contains mip maps.

### Constants

- [GLKTextureInfoAlphaState](glktextureinfoalphastate.md): Values that describe the alpha information stored in a source image’s pixel data.
- [GLKTextureInfoOrigin](glktextureinfoorigin.md): The location of the origin in the original source image.

### Instance Properties

- [arrayLength](glktextureinfo/arraylength-swift.property.md): Deprecated.
- [depth](glktextureinfo/depth-swift.property.md): Deprecated.
- [mimapLevelCount](glktextureinfo/mimaplevelcount-swift.property.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Texture Loading

- [GLKTextureLoader](glktextureloader.md): Deprecated. A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.

# GLKTextureInfo (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Information about OpenGL textures created by the [GLKTextureLoader](glktextureloader.md) class.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKTextureInfo : NSObject
```

<a id="overview"></a>

## Overview

When your app loads textures using the [GLKTextureLoader](glktextureloader.md) class, the texture loader returns information about the textures using [GLKTextureInfo](glktextureinfo.md) objects. Your app never creates [GLKTextureInfo](glktextureinfo.md) objects directly.

## Topics

### Reading Texture Information

- [name](glktextureinfo/name-swift.property.md): Deprecated. The OpenGL context’s name for the texture.
- [target](glktextureinfo/target-swift.property.md): Deprecated. The OpenGL binding target for the texture.
- [height](glktextureinfo/height-swift.property.md): Deprecated. The height of the loaded texture.
- [width](glktextureinfo/width-swift.property.md): Deprecated. The width of the loaded texture.
- [textureOrigin](glktextureinfo/textureorigin-swift.property.md): Deprecated. The location of the origin in the loaded texture.
- [alphaState](glktextureinfo/alphastate-swift.property.md): Deprecated. The state of the alpha component in the loaded texture.
- [containsMipmaps](glktextureinfo/containsmipmaps-swift.property.md): Deprecated. A Boolean value that states whether the loaded texture contains mip maps.

### Constants

- [GLKTextureInfoAlphaState](glktextureinfoalphastate.md): Values that describe the alpha information stored in a source image’s pixel data.
- [GLKTextureInfoOrigin](glktextureinfoorigin.md): The location of the origin in the original source image.

### Instance Properties

- [arrayLength](glktextureinfo/arraylength-swift.property.md): Deprecated.
- [depth](glktextureinfo/depth-swift.property.md): Deprecated.
- [mimapLevelCount](glktextureinfo/mimaplevelcount-swift.property.md): Deprecated.

### Instance Variables

- [alphaState](glktextureinfo/alphastate-c.ivar.md): Deprecated.
- [arrayLength](glktextureinfo/arraylength-c.ivar.md): Deprecated.
- [containsMipmaps](glktextureinfo/containsmipmaps-c.ivar.md): Deprecated.
- [depth](glktextureinfo/depth-c.ivar.md): Deprecated.
- [height](glktextureinfo/height-c.ivar.md): Deprecated.
- [mimapLevelCount](glktextureinfo/mimaplevelcount-c.ivar.md): Deprecated.
- [name](glktextureinfo/name-c.ivar.md): Deprecated.
- [target](glktextureinfo/target-c.ivar.md): Deprecated.
- [textureOrigin](glktextureinfo/textureorigin-c.ivar.md): Deprecated.
- [width](glktextureinfo/width-c.ivar.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Texture Loading

- [GLKTextureLoader](glktextureloader.md): Deprecated. A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.
