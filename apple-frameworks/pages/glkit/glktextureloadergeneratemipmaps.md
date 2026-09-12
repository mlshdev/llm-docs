> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloadergeneratemipmaps](https://developer.apple.com/documentation/glkit/glktextureloadergeneratemipmaps)

# GLKTextureLoaderGenerateMipmaps (Swift)

**Framework:** GLKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+ (deprecated in 12.0)

Whether or not to create mipmaps for a texture.

## Declaration

```swift
let GLKTextureLoaderGenerateMipmaps: String
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object that specifies a boolean value. If [false](https://developer.apple.com/documentation/swift/false), only the texture is loaded. If [true](https://developer.apple.com/documentation/swift/true), a full set of mipmap levels are generated for the texture when the texture is created. The `GL_TEXTURE_MIN_FILTER` parameter for the texture is changed to `GL_LINEAR_MIPMAP_LINEAR` when mipmaps are generated. If the key is not specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Constants

- [GLKTextureLoaderApplyPremultiplication](glktextureloaderapplypremultiplication.md): Deprecated. Whether image data should be premultiplied before being loaded into the sharegroup.
- [GLKTextureLoaderErrorDomain](glktextureloadererrordomain.md): Deprecated. The error domain used by GLKit when returning texture loading errors.
- [GLKTextureLoaderErrorKey](glktextureloadererrorkey.md): Deprecated. A key used to retrieve an error string from an error object userinfo dictionary.
- [GLKTextureLoaderGLErrorKey](glktextureloaderglerrorkey.md): Deprecated. A key used to retrieve additional information from an error object’s userinfo dictionary.
- [GLKTextureLoaderGrayscaleAsAlpha](glktextureloadergrayscaleasalpha.md): Whether or not to treat greyscale image data as alpha information.
- [GLKTextureLoaderOriginBottomLeft](glktextureloaderoriginbottomleft.md): Deprecated. Whether or not to vertically flip image data to match OpenGL’s coordinate system.
- [GLKTextureLoaderSRGB](glktextureloadersrgb.md): Deprecated. Whether or not to treat texture image data as sRGB data.
- [GLK_SSE3_INTRINSICS](glk_sse3_intrinsics.md)
- [kGLKModelErrorDomain](kglkmodelerrordomain.md): Deprecated.
- [kGLKModelErrorKey](kglkmodelerrorkey.md): Deprecated.

# GLKTextureLoaderGenerateMipmaps (Objective-C)

**Framework:** GLKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+ (deprecated in 12.0)

Whether or not to create mipmaps for a texture.

## Declaration

```objectivec
extern NSString * const GLKTextureLoaderGenerateMipmaps;
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object that specifies a boolean value. If [false](https://developer.apple.com/documentation/swift/false), only the texture is loaded. If [true](https://developer.apple.com/documentation/swift/true), a full set of mipmap levels are generated for the texture when the texture is created. The `GL_TEXTURE_MIN_FILTER` parameter for the texture is changed to `GL_LINEAR_MIPMAP_LINEAR` when mipmaps are generated. If the key is not specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Constants

- [GLKTextureLoaderApplyPremultiplication](glktextureloaderapplypremultiplication.md): Deprecated. Whether image data should be premultiplied before being loaded into the sharegroup.
- [GLKTextureLoaderErrorDomain](glktextureloadererrordomain.md): Deprecated. The error domain used by GLKit when returning texture loading errors.
- [GLKTextureLoaderErrorKey](glktextureloadererrorkey.md): Deprecated. A key used to retrieve an error string from an error object userinfo dictionary.
- [GLKTextureLoaderGLErrorKey](glktextureloaderglerrorkey.md): Deprecated. A key used to retrieve additional information from an error object’s userinfo dictionary.
- [GLKTextureLoaderGrayscaleAsAlpha](glktextureloadergrayscaleasalpha.md): Whether or not to treat greyscale image data as alpha information.
- [GLKTextureLoaderOriginBottomLeft](glktextureloaderoriginbottomleft.md): Deprecated. Whether or not to vertically flip image data to match OpenGL’s coordinate system.
- [GLKTextureLoaderSRGB](glktextureloadersrgb.md): Deprecated. Whether or not to treat texture image data as sRGB data.
- [GLK_SSE3_INTRINSICS](glk_sse3_intrinsics.md)
- [kGLKModelErrorDomain](kglkmodelerrordomain.md): Deprecated.
- [kGLKModelErrorKey](kglkmodelerrorkey.md): Deprecated.
