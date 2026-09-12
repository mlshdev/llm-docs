> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpixelformat/pvrtc_rgb_4bpp](https://developer.apple.com/documentation/metal/mtlpixelformat/pvrtc_rgb_4bpp)

# MTLPixelFormat.pvrtc_rgb_4bpp (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A compressed format that uses PVRTC compression and 4bpp for RGB components.

> Use one of the other formats with `astc`/`ASTC`, `etc2`/`ETC2`, or `bc`/`BC` instead.

## Declaration

```swift
case pvrtc_rgb_4bpp
```

<a id="discussion"></a>

## Discussion

The only texture types that support this format include:

- [MTLTextureType.type2D](../mtltexturetype/type2d.md)
- [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md)
- [MTLTextureType.typeCube](../mtltexturetype/typecube.md)

> **Note**

> The format doesn’t support subimages.

## See Also

### Compressed PVRTC pixel formats

- [MTLPixelFormat.pvrtc_rgb_2bpp](pvrtc_rgb_2bpp.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGB components.
- [MTLPixelFormat.pvrtc_rgb_2bpp_srgb](pvrtc_rgb_2bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGB components with a conversion between sRGB and linear space.
- [MTLPixelFormat.pvrtc_rgb_4bpp_srgb](pvrtc_rgb_4bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGB components with a conversion between sRGB and linear space.
- [MTLPixelFormat.pvrtc_rgba_2bpp](pvrtc_rgba_2bpp.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGBA components.
- [MTLPixelFormat.pvrtc_rgba_2bpp_srgb](pvrtc_rgba_2bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGBA components with a conversion between sRGB and linear space.
- [MTLPixelFormat.pvrtc_rgba_4bpp](pvrtc_rgba_4bpp.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGBA components.
- [MTLPixelFormat.pvrtc_rgba_4bpp_srgb](pvrtc_rgba_4bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGBA components with a conversion between sRGB and linear space.

# MTLPixelFormatPVRTC_RGB_4BPP (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A compressed format that uses PVRTC compression and 4bpp for RGB components.

> Use one of the other formats with `astc`/`ASTC`, `etc2`/`ETC2`, or `bc`/`BC` instead.

## Declaration

```objectivec
MTLPixelFormatPVRTC_RGB_4BPP
```

<a id="discussion"></a>

## Discussion

The only texture types that support this format include:

- [MTLTextureType2D](../mtltexturetype/type2d.md)
- [MTLTextureType2DArray](../mtltexturetype/type2darray.md)
- [MTLTextureTypeCube](../mtltexturetype/typecube.md)

> **Note**

> The format doesn’t support subimages.

## See Also

### Compressed PVRTC pixel formats

- [MTLPixelFormatPVRTC_RGB_2BPP](pvrtc_rgb_2bpp.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGB components.
- [MTLPixelFormatPVRTC_RGB_2BPP_sRGB](pvrtc_rgb_2bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGB components with a conversion between sRGB and linear space.
- [MTLPixelFormatPVRTC_RGB_4BPP_sRGB](pvrtc_rgb_4bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGB components with a conversion between sRGB and linear space.
- [MTLPixelFormatPVRTC_RGBA_2BPP](pvrtc_rgba_2bpp.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGBA components.
- [MTLPixelFormatPVRTC_RGBA_2BPP_sRGB](pvrtc_rgba_2bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 2bpp for RGBA components with a conversion between sRGB and linear space.
- [MTLPixelFormatPVRTC_RGBA_4BPP](pvrtc_rgba_4bpp.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGBA components.
- [MTLPixelFormatPVRTC_RGBA_4BPP_sRGB](pvrtc_rgba_4bpp_srgb.md): Deprecated. A compressed format that uses PVRTC compression and 4bpp for RGBA components with a conversion between sRGB and linear space.
