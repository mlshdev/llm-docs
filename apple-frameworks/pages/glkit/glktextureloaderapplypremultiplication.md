> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloaderapplypremultiplication](https://developer.apple.com/documentation/glkit/glktextureloaderapplypremultiplication)

# GLKTextureLoaderApplyPremultiplication (Swift)

**Framework:** GLKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+ (deprecated in 12.0)

Whether image data should be premultiplied before being loaded into the sharegroup.

## Declaration

```swift
let GLKTextureLoaderApplyPremultiplication: String
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object that specifies a boolean value. If [false](https://developer.apple.com/documentation/swift/false), the data is loaded into the sharegroup without being modified. If [true](https://developer.apple.com/documentation/swift/true), the red, green and blue components of each pixel are multiplied by the alpha value. If the key is not specified, the default value is [false](https://developer.apple.com/documentation/swift/false). Never specify [true](https://developer.apple.com/documentation/swift/true) for a texture that is in a compressed format.

## See Also

### Constants

- [GLKTextureLoaderErrorDomain](glktextureloadererrordomain.md): Deprecated. The error domain used by GLKit when returning texture loading errors.
- [GLKTextureLoaderErrorKey](glktextureloadererrorkey.md): Deprecated. A key used to retrieve an error string from an error object userinfo dictionary.
- [GLKTextureLoaderGLErrorKey](glktextureloaderglerrorkey.md): Deprecated. A key used to retrieve additional information from an error object’s userinfo dictionary.
- [GLKTextureLoaderGenerateMipmaps](glktextureloadergeneratemipmaps.md): Deprecated. Whether or not to create mipmaps for a texture.
- [GLKTextureLoaderGrayscaleAsAlpha](glktextureloadergrayscaleasalpha.md): Whether or not to treat greyscale image data as alpha information.
- [GLKTextureLoaderOriginBottomLeft](glktextureloaderoriginbottomleft.md): Deprecated. Whether or not to vertically flip image data to match OpenGL’s coordinate system.
- [GLKTextureLoaderSRGB](glktextureloadersrgb.md): Deprecated. Whether or not to treat texture image data as sRGB data.
- [GLK_SSE3_INTRINSICS](glk_sse3_intrinsics.md)
- [kGLKModelErrorDomain](kglkmodelerrordomain.md): Deprecated.
- [kGLKModelErrorKey](kglkmodelerrorkey.md): Deprecated.

# GLKTextureLoaderApplyPremultiplication (Objective-C)

**Framework:** GLKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+ (deprecated in 12.0)

Whether image data should be premultiplied before being loaded into the sharegroup.

## Declaration

```objectivec
extern NSString * const GLKTextureLoaderApplyPremultiplication;
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object that specifies a boolean value. If [false](https://developer.apple.com/documentation/swift/false), the data is loaded into the sharegroup without being modified. If [true](https://developer.apple.com/documentation/swift/true), the red, green and blue components of each pixel are multiplied by the alpha value. If the key is not specified, the default value is [false](https://developer.apple.com/documentation/swift/false). Never specify [true](https://developer.apple.com/documentation/swift/true) for a texture that is in a compressed format.

## See Also

### Constants

- [GLKTextureLoaderErrorDomain](glktextureloadererrordomain.md): Deprecated. The error domain used by GLKit when returning texture loading errors.
- [GLKTextureLoaderErrorKey](glktextureloadererrorkey.md): Deprecated. A key used to retrieve an error string from an error object userinfo dictionary.
- [GLKTextureLoaderGLErrorKey](glktextureloaderglerrorkey.md): Deprecated. A key used to retrieve additional information from an error object’s userinfo dictionary.
- [GLKTextureLoaderGenerateMipmaps](glktextureloadergeneratemipmaps.md): Deprecated. Whether or not to create mipmaps for a texture.
- [GLKTextureLoaderGrayscaleAsAlpha](glktextureloadergrayscaleasalpha.md): Whether or not to treat greyscale image data as alpha information.
- [GLKTextureLoaderOriginBottomLeft](glktextureloaderoriginbottomleft.md): Deprecated. Whether or not to vertically flip image data to match OpenGL’s coordinate system.
- [GLKTextureLoaderSRGB](glktextureloadersrgb.md): Deprecated. Whether or not to treat texture image data as sRGB data.
- [GLK_SSE3_INTRINSICS](glk_sse3_intrinsics.md)
- [kGLKModelErrorDomain](kglkmodelerrordomain.md): Deprecated.
- [kGLKModelErrorKey](kglkmodelerrorkey.md): Deprecated.
