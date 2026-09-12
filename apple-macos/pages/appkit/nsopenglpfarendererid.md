> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpfarendererid](https://developer.apple.com/documentation/appkit/nsopenglpfarendererid)

# NSOpenGLPFARendererID (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```swift
var NSOpenGLPFARendererID: Int { get }
```

<a id="Discussion"></a>

## Discussion

Value is a nonnegative renderer ID number. OpenGL renderers that match the specified ID are preferred. Constants to select specific renderers are provided in the `CGLRenderers.h` header of the OpenGL framework. Of note is `kCGLRendererGenericID` which selects the Apple software renderer. The other constants select renderers for specific hardware vendors.

## See Also

### Constants

- [NSOpenGLPFAAccelerated](nsopenglpfaaccelerated.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only hardware-accelerated renderers are considered. If not present, accelerated renderers are still preferred.
- [NSOpenGLPFAAcceleratedCompute](nsopenglpfaacceleratedcompute.md): Deprecated. If present, this attribute indicates that only renderers that can execute OpenCL programs should be used.
- [NSOpenGLPFAAccumSize](nsopenglpfaaccumsize.md): Deprecated. Value is a nonnegative buffer size specification. An accumulation buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFAAllRenderers](nsopenglpfaallrenderers.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format selection is open to all available renderers, including debug and special-purpose renderers that are not OpenGL compliant.
- [NSOpenGLPFAAllowOfflineRenderers](nsopenglpfaallowofflinerenderers.md): Deprecated. A Boolean attribute. If present, this attribute indicates that offline renderers may be used.
- [NSOpenGLPFAAlphaSize](nsopenglpfaalphasize.md): Deprecated. Value is a nonnegative buffer size specification. An alpha buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFAAuxBuffers](nsopenglpfaauxbuffers.md): Deprecated. Value is a nonnegative integer that indicates the desired number of auxiliary buffers. Pixel formats with the smallest number of auxiliary buffers that meets or exceeds the specified number are preferred.
- [NSOpenGLPFAAuxDepthStencil](nsopenglpfaauxdepthstencil.md): Deprecated. Each auxiliary buffer has its own depth stencil.
- [NSOpenGLPFABackingStore](nsopenglpfabackingstore.md): Deprecated. A Boolean attribute. If present, this attribute indicates that OpenGL only considers renderers that have a back color buffer the full size of the drawable (regardless of window visibility) and that guarantee the back buffer contents to be valid after a call to `NSOpenGLContext` object’s [flushBuffer()](nsopenglcontext/flushbuffer%28%29.md).
- [NSOpenGLPFAClosestPolicy](nsopenglpfaclosestpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color buffer such that the buffer closest to the requested size is preferred, regardless of the actual color buffer depth of the supported graphics device.
- [NSOpenGLPFAColorFloat](nsopenglpfacolorfloat.md): Deprecated.
- [NSOpenGLPFAColorSize](nsopenglpfacolorsize.md): Deprecated. Value is a nonnegative buffer size specification. A color buffer that most closely matches the specified size is preferred. If unspecified, OpenGL chooses a color size that matches the screen.
- [NSOpenGLPFADepthSize](nsopenglpfadepthsize.md): Deprecated. Value is a nonnegative depth buffer size specification. A depth buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFADoubleBuffer](nsopenglpfadoublebuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only double-buffered pixel formats are considered. Otherwise, only single-buffered pixel formats are considered.
- [NSOpenGLPFAMaximumPolicy](nsopenglpfamaximumpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color, depth, and accumulation buffers such that, if a nonzero buffer size is requested, the largest available buffer is preferred.

# NSOpenGLPFARendererID (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.14)

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```objectivec
NSOpenGLPFARendererID
```

<a id="Discussion"></a>

## Discussion

Value is a nonnegative renderer ID number. OpenGL renderers that match the specified ID are preferred. Constants to select specific renderers are provided in the `CGLRenderers.h` header of the OpenGL framework. Of note is `kCGLRendererGenericID` which selects the Apple software renderer. The other constants select renderers for specific hardware vendors.

## See Also

### Constants

- [NSOpenGLPFAAccelerated](nsopenglpfaaccelerated.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only hardware-accelerated renderers are considered. If not present, accelerated renderers are still preferred.
- [NSOpenGLPFAAcceleratedCompute](nsopenglpfaacceleratedcompute.md): Deprecated. If present, this attribute indicates that only renderers that can execute OpenCL programs should be used.
- [NSOpenGLPFAAccumSize](nsopenglpfaaccumsize.md): Deprecated. Value is a nonnegative buffer size specification. An accumulation buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFAAllRenderers](nsopenglpfaallrenderers.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format selection is open to all available renderers, including debug and special-purpose renderers that are not OpenGL compliant.
- [NSOpenGLPFAAllowOfflineRenderers](nsopenglpfaallowofflinerenderers.md): Deprecated. A Boolean attribute. If present, this attribute indicates that offline renderers may be used.
- [NSOpenGLPFAAlphaSize](nsopenglpfaalphasize.md): Deprecated. Value is a nonnegative buffer size specification. An alpha buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFAAuxBuffers](nsopenglpfaauxbuffers.md): Deprecated. Value is a nonnegative integer that indicates the desired number of auxiliary buffers. Pixel formats with the smallest number of auxiliary buffers that meets or exceeds the specified number are preferred.
- [NSOpenGLPFAAuxDepthStencil](nsopenglpfaauxdepthstencil.md): Deprecated. Each auxiliary buffer has its own depth stencil.
- [NSOpenGLPFABackingStore](nsopenglpfabackingstore.md): Deprecated. A Boolean attribute. If present, this attribute indicates that OpenGL only considers renderers that have a back color buffer the full size of the drawable (regardless of window visibility) and that guarantee the back buffer contents to be valid after a call to `NSOpenGLContext` object’s [flushBuffer](nsopenglcontext/flushbuffer%28%29.md).
- [NSOpenGLPFAClosestPolicy](nsopenglpfaclosestpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color buffer such that the buffer closest to the requested size is preferred, regardless of the actual color buffer depth of the supported graphics device.
- [NSOpenGLPFAColorFloat](nsopenglpfacolorfloat.md): Deprecated.
- [NSOpenGLPFAColorSize](nsopenglpfacolorsize.md): Deprecated. Value is a nonnegative buffer size specification. A color buffer that most closely matches the specified size is preferred. If unspecified, OpenGL chooses a color size that matches the screen.
- [NSOpenGLPFACompliant](nsopenglpfacompliant.md): Deprecated. A Boolean attribute. If present, this attribute indicates that pixel format selection is only open to OpenGL-compliant renderers. This attribute is implied unless `NSOpenGLPFAAllRenderers` is specified. This attribute is not useful in the attribute array.
- [NSOpenGLPFADepthSize](nsopenglpfadepthsize.md): Deprecated. Value is a nonnegative depth buffer size specification. A depth buffer that most closely matches the specified size is preferred.
- [NSOpenGLPFADoubleBuffer](nsopenglpfadoublebuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only double-buffered pixel formats are considered. Otherwise, only single-buffered pixel formats are considered.
