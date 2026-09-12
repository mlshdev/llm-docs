> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpixelformat/depth16unorm](https://developer.apple.com/documentation/metal/mtlpixelformat/depth16unorm)

# MTLPixelFormat.depth16Unorm (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 13.0+ · visionOS 1.0+

A pixel format for a depth-render target that has a 16-bit normalized, unsigned-integer component.

## Declaration

```swift
case depth16Unorm
```

<a id="discussion"></a>

## Discussion

If you need to apply depth bias, choose a different depth format. Setting a depth bias with this format, such as with [setDepthBias(\_:slopeScale:clamp:)](../mtlrendercommandencoder/setdepthbias%28__slopescale_clamp_%29.md), generates incorrect results for apps that run on a device with an Apple A8 or earlier GPU.

## See Also

### Depth and stencil pixel formats

- [MTLPixelFormat.depth32Float](depth32float.md): A pixel format with one 32-bit floating-point component, used for a depth render target.
- [MTLPixelFormat.stencil8](stencil8.md): A pixel format with an 8-bit unsigned integer component, used for a stencil render target.
- [MTLPixelFormat.depth24Unorm_stencil8](depth24unorm_stencil8.md): Deprecated. A 32-bit combined depth and stencil pixel format with a 24-bit normalized unsigned integer for depth and an 8-bit unsigned integer for stencil.
- [MTLPixelFormat.depth32Float_stencil8](depth32float_stencil8.md): A 40-bit combined depth and stencil pixel format with a 32-bit floating-point value for depth and an 8-bit unsigned integer for stencil.
- [MTLPixelFormat.x32_stencil8](x32_stencil8.md): A stencil pixel format used to read the stencil value from a texture with a combined 32-bit depth and 8-bit stencil value.
- [MTLPixelFormat.x24_stencil8](x24_stencil8.md): Deprecated. A stencil pixel format used to read the stencil value from a texture with a combined 24-bit depth and 8-bit stencil value.

# MTLPixelFormatDepth16Unorm (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 13.0+ · visionOS 1.0+

A pixel format for a depth-render target that has a 16-bit normalized, unsigned-integer component.

## Declaration

```objectivec
MTLPixelFormatDepth16Unorm
```

<a id="discussion"></a>

## Discussion

If you need to apply depth bias, choose a different depth format. Setting a depth bias with this format, such as with [setDepthBias:slopeScale:clamp:](../mtlrendercommandencoder/setdepthbias%28__slopescale_clamp_%29.md), generates incorrect results for apps that run on a device with an Apple A8 or earlier GPU.

## See Also

### Depth and stencil pixel formats

- [MTLPixelFormatDepth32Float](depth32float.md): A pixel format with one 32-bit floating-point component, used for a depth render target.
- [MTLPixelFormatStencil8](stencil8.md): A pixel format with an 8-bit unsigned integer component, used for a stencil render target.
- [MTLPixelFormatDepth24Unorm_Stencil8](depth24unorm_stencil8.md): Deprecated. A 32-bit combined depth and stencil pixel format with a 24-bit normalized unsigned integer for depth and an 8-bit unsigned integer for stencil.
- [MTLPixelFormatDepth32Float_Stencil8](depth32float_stencil8.md): A 40-bit combined depth and stencil pixel format with a 32-bit floating-point value for depth and an 8-bit unsigned integer for stencil.
- [MTLPixelFormatX32_Stencil8](x32_stencil8.md): A stencil pixel format used to read the stencil value from a texture with a combined 32-bit depth and 8-bit stencil value.
- [MTLPixelFormatX24_Stencil8](x24_stencil8.md): Deprecated. A stencil pixel format used to read the stencil value from a texture with a combined 24-bit depth and 8-bit stencil value.
