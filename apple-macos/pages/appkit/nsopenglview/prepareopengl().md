> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/prepareopengl()](https://developer.apple.com/documentation/appkit/nsopenglview/prepareopengl())

# prepareOpenGL() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Used by subclasses to initialize OpenGL state.

> Please use MTKView instead.

## Declaration

```swift
func prepareOpenGL()
```

<a id="Discussion"></a>

## Discussion

This method is called only once after the OpenGL context is made the current context. Subclasses that implement this method can use it to configure the Open GL state in preparation for drawing.

## See Also

### Managing the NSOpenGLContext

- [clearGLContext()](clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.
- [openGLContext](openglcontext.md): Deprecated. The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.

# prepareOpenGL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Used by subclasses to initialize OpenGL state.

> Please use MTKView instead.

## Declaration

```objectivec
- (void) prepareOpenGL;
```

<a id="Discussion"></a>

## Discussion

This method is called only once after the OpenGL context is made the current context. Subclasses that implement this method can use it to configure the Open GL state in preparation for drawing.

## See Also

### Managing the NSOpenGLContext

- [clearGLContext](clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.
- [openGLContext](openglcontext.md): Deprecated. The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.
