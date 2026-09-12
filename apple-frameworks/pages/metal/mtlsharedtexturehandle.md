> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedtexturehandle](https://developer.apple.com/documentation/metal/mtlsharedtexturehandle)

# MTLSharedTextureHandle (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A texture handle that can be shared across process address space boundaries.

## Declaration

```swift
class MTLSharedTextureHandle
```

<a id="overview"></a>

## Overview

`MTLSharedTextureHandle` objects may be passed between processes using XPC connections and then used to create a reference to the texture in another process. The texture in the other process needs to be created using the same [MTLDevice](mtldevice.md) on which the shared texture was originally created. To identify which device it was created on, you can use the [device](mtlsharedtexturehandle/device.md) property of the `MTLSharedTextureHandle` object.

## Topics

### Identifying the shared texture handle

- [device](mtlsharedtexturehandle/device.md): The device object that created the texture.
- [label](mtlsharedtexturehandle/label.md): A string that identifies the texture.

### Initializers

- [init(coder:)](mtlsharedtexturehandle/init%28coder_%29.md)

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

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.

# MTLSharedTextureHandle (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A texture handle that can be shared across process address space boundaries.

## Declaration

```objectivec
@interface MTLSharedTextureHandle : NSObject
```

<a id="overview"></a>

## Overview

`MTLSharedTextureHandle` objects may be passed between processes using XPC connections and then used to create a reference to the texture in another process. The texture in the other process needs to be created using the same [MTLDevice](mtldevice.md) on which the shared texture was originally created. To identify which device it was created on, you can use the [device](mtlsharedtexturehandle/device.md) property of the `MTLSharedTextureHandle` object.

## Topics

### Identifying the shared texture handle

- [device](mtlsharedtexturehandle/device.md): The device object that created the texture.
- [label](mtlsharedtexturehandle/label.md): A string that identifies the texture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureCompressionType](mtltexturecompressiontype.md)
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
