> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/view](https://developer.apple.com/documentation/appkit/nsopenglcontext/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the OpenGL context’s view.

## Declaration

```swift
@MainActor weak var view: NSView? { get set }
```

<a id="return-value"></a>

## Return Value

The view, or `nil` if the receiver has no drawable object, is in full-screen mode, or is in offscreen mode.

## See Also

### Managing the Drawable Object

- [clearDrawable()](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update()](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the OpenGL context’s view.

## Declaration

```objectivec
@property (weak, nullable) NSView * view;
```

<a id="return-value"></a>

## Return Value

The view, or `nil` if the receiver has no drawable object, is in full-screen mode, or is in offscreen mode.

## See Also

### Related Documentation

- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.

### Managing the Drawable Object

- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.
- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [clearDrawable](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update](update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.
