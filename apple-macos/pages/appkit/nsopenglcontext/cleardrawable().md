> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/cleardrawable()](https://developer.apple.com/documentation/appkit/nsopenglcontext/cleardrawable())

# clearDrawable() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Disassociates the OpenGL context from its viewport.

> Please use Metal or MetalKit.

## Declaration

```swift
func clearDrawable()
```

<a id="Discussion"></a>

## Discussion

This method disassociates the receiver from any associated `NSView` object. If the receiver is in full-screen or offscreen mode, it exits that mode.

## See Also

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [update()](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.

# clearDrawable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Disassociates the OpenGL context from its viewport.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) clearDrawable;
```

<a id="Discussion"></a>

## Discussion

This method disassociates the receiver from any associated `NSView` object. If the receiver is in full-screen or offscreen mode, it exits that mode.

## See Also

### Related Documentation

- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.
- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [update](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.
