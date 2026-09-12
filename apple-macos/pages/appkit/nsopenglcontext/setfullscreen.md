> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/setfullscreen](https://developer.apple.com/documentation/appkit/nsopenglcontext/setfullscreen)

# setFullScreen

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the OpenGL context to full-screen mode.

> Full-screen mode contexts are deprecated. See [Drawing to the Full Screen](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_fullscreen/opengl_cgl.html#//apple_ref/doc/uid/TP40001987-CH210).

## Declaration

```objectivec
- (void) setFullScreen;
```

<a id="Discussion"></a>

## Discussion

In full-screen mode, the receiver renders onto the entire screen. The receiver’s viewport is set to the full size of the screen. Call the [clearDrawable](cleardrawable%28%29.md) method to exit full-screen mode.

The `NSOpenGLPFAFullScreen` attribute must have been specified in the receiver’s [NSOpenGLPixelFormat](../nsopenglpixelformat.md). Some OpenGL renderers, like the software renderer, do not support full-screen mode. The following code determines if a full-screen pixel format is possible on a given system:

```objc
NSOpenGLPixelFormatAttribute attrs[] =
{
    NSOpenGLPFAFullScreen,
    nil
};
 
NSOpenGLPixelFormat* pixFmt = [[NSOpenGLPixelFormat alloc] initWithAttributes:attrs];
 
/* Check if initWithAttributes succeeded. */
if(pixFmt == nil) {
    /* initWithAttributes failed. There is no full-screen renderer.  */
}
```

> **Note**

>  Use Core Graphics’s **Direct Display** API to capture the display before entering full-screen mode and release it after exiting. A captured display prevents contention from other applications and system services. In addition, applications are not notified of display changes, preventing them from repositioning their windows and the Finder from repositioning desktop icons.

## See Also

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [clearDrawable](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.
