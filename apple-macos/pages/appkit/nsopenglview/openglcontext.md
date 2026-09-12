> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/openglcontext](https://developer.apple.com/documentation/appkit/nsopenglview/openglcontext)

# openGLContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.

> Please use MTKView instead.

## Declaration

```swift
var openGLContext: NSOpenGLContext? { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver has no associated context object, a new `NSOpenGLContext` object is created. The new object is initialized with the receiver’s pixel format information.

## See Also

### Related Documentation

- [pixelFormat](pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object associated with the receiver.

### Managing the NSOpenGLContext

- [prepareOpenGL()](prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [clearGLContext()](clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.

# openGLContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.

> Please use MTKView instead.

## Declaration

```objectivec
@property (strong, nullable) NSOpenGLContext * openGLContext;
```

<a id="Discussion"></a>

## Discussion

If the receiver has no associated context object, a new `NSOpenGLContext` object is created. The new object is initialized with the receiver’s pixel format information.

## See Also

### Related Documentation

- [pixelFormat](pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object associated with the receiver.

### Managing the NSOpenGLContext

- [prepareOpenGL](prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [clearGLContext](clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.
