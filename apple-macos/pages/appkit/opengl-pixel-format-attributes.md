> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/opengl-pixel-format-attributes](https://developer.apple.com/documentation/appkit/opengl-pixel-format-attributes)

# OpenGL Pixel Format Attributes (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Pixel format attributes for OpenGL.

## Topics

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
- [NSOpenGLPFAMinimumPolicy](nsopenglpfaminimumpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color, depth, and accumulation buffers such that only buffers of size greater than or equal to the desired size are considered.
- [NSOpenGLPFAMultisample](nsopenglpfamultisample.md): Deprecated.
- [NSOpenGLPFANoRecovery](nsopenglpfanorecovery.md): Deprecated.
- [NSOpenGLPFAOpenGLProfile](nsopenglpfaopenglprofile.md): Deprecated. A constant that represents an OpenGL profile.
- [NSOpenGLPFARendererID](nsopenglpfarendererid.md): Deprecated.
- [NSOpenGLPFASampleAlpha](nsopenglpfasamplealpha.md): Deprecated. A Boolean attribute. If present and used with [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md) and [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md), this attribute hints to OpenGL to update multi-sample alpha values to ensure the most accurate rendering. If pixel format is not requesting antialiasing then this hint does nothing.
- [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md): Deprecated. Value is a nonnegative number indicating the number of multisample buffers.
- [NSOpenGLPFASamples](nsopenglpfasamples.md): Deprecated. Value is a nonnegative indicating the number of samples per multisample buffer.
- [NSOpenGLPFAScreenMask](nsopenglpfascreenmask.md): Deprecated.
- [NSOpenGLPFAStencilSize](nsopenglpfastencilsize.md): Deprecated. Value is a nonnegative integer that indicates the desired number of stencil bitplanes. The smallest stencil buffer of at least the specified size is preferred.
- [NSOpenGLPFAStereo](nsopenglpfastereo.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only stereo pixel formats are considered. Otherwise, only monoscopic pixel formats are considered.
- [NSOpenGLPFASupersample](nsopenglpfasupersample.md): Deprecated.
- [NSOpenGLPFATripleBuffer](nsopenglpfatriplebuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only triple-buffered pixel formats are considered. Otherwise, only single-buffered pixel formats are considered.
- [NSOpenGLPFAVirtualScreenCount](nsopenglpfavirtualscreencount.md): Deprecated. The number of virtual screens in this format.

## See Also

### Constants

- [NSOpenGLPixelFormatAttribute](nsopenglpixelformatattribute.md): Deprecated. Pixel format attributes for OpenGL.
- [OpenGL Profiles](opengl-profiles.md): Constants that specify the functionality provided by the renderer.

# OpenGL Pixel Format Attributes (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Pixel format attributes for OpenGL.

## Topics

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
- [NSOpenGLPFAFullScreen](nsopenglpfafullscreen.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only renderers that are capable of rendering to a full-screen drawable are considered. The `NSOpenGLPFASingleRenderer` attribute is implied.
- [NSOpenGLPFAMPSafe](nsopenglpfampsafe.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the renderer is multi-processor safe.
- [NSOpenGLPFAMaximumPolicy](nsopenglpfamaximumpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color, depth, and accumulation buffers such that, if a nonzero buffer size is requested, the largest available buffer is preferred.
- [NSOpenGLPFAMinimumPolicy](nsopenglpfaminimumpolicy.md): Deprecated. A Boolean attribute. If present, this attribute indicates that the pixel format choosing policy is altered for the color, depth, and accumulation buffers such that only buffers of size greater than or equal to the desired size are considered.
- [NSOpenGLPFAMultiScreen](nsopenglpfamultiscreen.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only renderers capable of driving multiple screens are considered. This attribute is not generally useful.
- [NSOpenGLPFAMultisample](nsopenglpfamultisample.md): Deprecated.
- [NSOpenGLPFANoRecovery](nsopenglpfanorecovery.md): Deprecated.
- [NSOpenGLPFAOffScreen](nsopenglpfaoffscreen.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only renderers that are capable of rendering to an offscreen memory area and have buffer depth exactly equal to the desired buffer depth are considered. The `NSOpenGLPFAClosestPolicy` attribute is implied.
- [NSOpenGLPFAOpenGLProfile](nsopenglpfaopenglprofile.md): Deprecated. A constant that represents an OpenGL profile.
- [NSOpenGLPFAPixelBuffer](nsopenglpfapixelbuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that rendering to a pixel buffer is enabled.
- [NSOpenGLPFARemotePixelBuffer](nsopenglpfaremotepixelbuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that rendering to a pixel buffer on an offline renderer is enabled.
- [NSOpenGLPFARendererID](nsopenglpfarendererid.md): Deprecated.
- [NSOpenGLPFARobust](nsopenglpfarobust.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only renderers that do not have any failure modes associated with a lack of video card resources are considered. This attribute is not generally useful.
- [NSOpenGLPFASampleAlpha](nsopenglpfasamplealpha.md): Deprecated. A Boolean attribute. If present and used with [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md) and [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md), this attribute hints to OpenGL to update multi-sample alpha values to ensure the most accurate rendering. If pixel format is not requesting antialiasing then this hint does nothing.
- [NSOpenGLPFASampleBuffers](nsopenglpfasamplebuffers.md): Deprecated. Value is a nonnegative number indicating the number of multisample buffers.
- [NSOpenGLPFASamples](nsopenglpfasamples.md): Deprecated. Value is a nonnegative indicating the number of samples per multisample buffer.
- [NSOpenGLPFAScreenMask](nsopenglpfascreenmask.md): Deprecated.
- [NSOpenGLPFASingleRenderer](nsopenglpfasinglerenderer.md): Deprecated.
- [NSOpenGLPFAStencilSize](nsopenglpfastencilsize.md): Deprecated. Value is a nonnegative integer that indicates the desired number of stencil bitplanes. The smallest stencil buffer of at least the specified size is preferred.
- [NSOpenGLPFAStereo](nsopenglpfastereo.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only stereo pixel formats are considered. Otherwise, only monoscopic pixel formats are considered.
- [NSOpenGLPFASupersample](nsopenglpfasupersample.md): Deprecated.
- [NSOpenGLPFATripleBuffer](nsopenglpfatriplebuffer.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only triple-buffered pixel formats are considered. Otherwise, only single-buffered pixel formats are considered.
- [NSOpenGLPFAVirtualScreenCount](nsopenglpfavirtualscreencount.md): Deprecated. The number of virtual screens in this format.
- [NSOpenGLPFAWindow](nsopenglpfawindow.md): Deprecated. A Boolean attribute. If present, this attribute indicates that only renderers that are capable of rendering to a window are considered. This attribute is implied if neither `NSOpenGLPFAFullScreen` nor `NSOpenGLPFAOffScreen` is specified.

## See Also

### Constants

- [NSOpenGLPixelFormatAttribute](nsopenglpixelformatattribute.md): Deprecated. Pixel format attributes for OpenGL.
- [OpenGL Profiles](opengl-profiles.md): Constants that specify the functionality provided by the renderer.
