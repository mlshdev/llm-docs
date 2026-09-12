> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/setoffscreen:width:height:rowbytes:](https://developer.apple.com/documentation/appkit/nsopenglcontext/setoffscreen:width:height:rowbytes:)

# setOffScreen:width:height:rowbytes:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.

> Use a OpenGL framebuffer object instead.

## Declaration

```objectivec
- (void) setOffScreen:(void *) baseaddr width:(GLsizei) width height:(GLsizei) height rowbytes:(GLint) rowbytes;
```

## Parameters

- `baseaddr`: The base address of the buffer in memory. This buffer must contain at least `rowbytes` `*` `height` bytes.
- `width`: The width of the memory buffer, measured in pixels.
- `height`: The height of the memory buffer, measured in pixels.
- `rowbytes`: The number of bytes in a single row of the buffer. This value must be greater than or equal to the value in `width` times the number of bytes per pixel.

<a id="Discussion"></a>

## Discussion

The receiver’s viewport is set to the full size of the offscreen area. Call the [clearDrawable](cleardrawable%28%29.md) method to exit offscreen mode.

The `NSOpenGLPFAOffScreen` attribute must have been specified in the receiver’s pixel format object.

> **Note**

>  To obtain behavior similar to offscreen mode on renderers that do not support accelerated offscreen contexts, attach the context to a hidden window and use `glReadPixels`.

## See Also

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.
- [clearDrawable](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.
