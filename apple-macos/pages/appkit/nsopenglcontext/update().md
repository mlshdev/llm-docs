> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/update()](https://developer.apple.com/documentation/appkit/nsopenglcontext/update())

# update() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Updates the OpenGL context’s drawable object.

> Please use Metal or MetalKit.

## Declaration

```swift
@MainActor func update()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the receiver’s drawable object changes size or location. A multithreaded application must synchronize all threads that access the same drawable object and call [update()](update%28%29.md) for each thread’s context serially.

## See Also

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [clearDrawable()](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.

# update (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Updates the OpenGL context’s drawable object.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) update;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the receiver’s drawable object changes size or location. A multithreaded application must synchronize all threads that access the same drawable object and call [update](update%28%29.md) for each thread’s context serially.

## See Also

### Managing the Drawable Object

- [view](view.md): Deprecated. Returns the OpenGL context’s view.
- [setFullScreen](setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.
- [setOffScreen:width:height:rowbytes:](setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [clearDrawable](cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
