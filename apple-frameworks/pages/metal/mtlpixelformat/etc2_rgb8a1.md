> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpixelformat/etc2_rgb8a1](https://developer.apple.com/documentation/metal/mtlpixelformat/etc2_rgb8a1)

# MTLPixelFormat.etc2_rgb8a1 (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS · visionOS 1.0+

Compressed format using ETC2 compression with four 8-bit components.

## Declaration

```swift
case etc2_rgb8a1
```

<a id="discussion"></a>

## Discussion

Only [MTLTextureType.type2D](../mtltexturetype/type2d.md), [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md), and [MTLTextureType.typeCube](../mtltexturetype/typecube.md) textures are supported.

## See Also

### Compressed EAC/ETC pixel formats

- [MTLPixelFormat.eac_r11Unorm](eac_r11unorm.md): Compressed format using EAC compression with one normalized unsigned integer component.
- [MTLPixelFormat.eac_r11Snorm](eac_r11snorm.md): Compressed format using EAC compression with one normalized signed integer component.
- [MTLPixelFormat.eac_rg11Unorm](eac_rg11unorm.md): Compressed format using EAC compression with two normalized unsigned integer components.
- [MTLPixelFormat.eac_rg11Snorm](eac_rg11snorm.md): Compressed format using EAC compression with two normalized signed integer components.
- [MTLPixelFormat.eac_rgba8](eac_rgba8.md): Compressed format using EAC compression with four 8-bit components.
- [MTLPixelFormat.eac_rgba8_srgb](eac_rgba8_srgb.md): Compressed format using EAC compression with four 8-bit components with conversion between sRGB and linear space.
- [MTLPixelFormat.etc2_rgb8](etc2_rgb8.md): Compressed format using ETC2 compression with three 8-bit components.
- [MTLPixelFormat.etc2_rgb8_srgb](etc2_rgb8_srgb.md): Compressed format using ETC2 compression with three 8-bit components with conversion between sRGB and linear space.
- [MTLPixelFormat.etc2_rgb8a1_srgb](etc2_rgb8a1_srgb.md): Compressed format using ETC2 compression with four 8-bit components with conversion between sRGB and linear space.

# MTLPixelFormatETC2_RGB8A1 (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS · visionOS 1.0+

Compressed format using ETC2 compression with four 8-bit components.

## Declaration

```objectivec
MTLPixelFormatETC2_RGB8A1
```

<a id="discussion"></a>

## Discussion

Only [MTLTextureType2D](../mtltexturetype/type2d.md), [MTLTextureType2DArray](../mtltexturetype/type2darray.md), and [MTLTextureTypeCube](../mtltexturetype/typecube.md) textures are supported.

## See Also

### Compressed EAC/ETC pixel formats

- [MTLPixelFormatEAC_R11Unorm](eac_r11unorm.md): Compressed format using EAC compression with one normalized unsigned integer component.
- [MTLPixelFormatEAC_R11Snorm](eac_r11snorm.md): Compressed format using EAC compression with one normalized signed integer component.
- [MTLPixelFormatEAC_RG11Unorm](eac_rg11unorm.md): Compressed format using EAC compression with two normalized unsigned integer components.
- [MTLPixelFormatEAC_RG11Snorm](eac_rg11snorm.md): Compressed format using EAC compression with two normalized signed integer components.
- [MTLPixelFormatEAC_RGBA8](eac_rgba8.md): Compressed format using EAC compression with four 8-bit components.
- [MTLPixelFormatEAC_RGBA8_sRGB](eac_rgba8_srgb.md): Compressed format using EAC compression with four 8-bit components with conversion between sRGB and linear space.
- [MTLPixelFormatETC2_RGB8](etc2_rgb8.md): Compressed format using ETC2 compression with three 8-bit components.
- [MTLPixelFormatETC2_RGB8_sRGB](etc2_rgb8_srgb.md): Compressed format using ETC2 compression with three 8-bit components with conversion between sRGB and linear space.
- [MTLPixelFormatETC2_RGB8A1_sRGB](etc2_rgb8a1_srgb.md): Compressed format using ETC2 compression with four 8-bit components with conversion between sRGB and linear space.
