> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/clearglcontext()](https://developer.apple.com/documentation/appkit/nsopenglview/clearglcontext())

# clearGLContext() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.

> Please use MTKView instead.

## Declaration

```swift
func clearGLContext()
```

<a id="Discussion"></a>

## Discussion

If necessary, this method calls the [clearDrawable()](../nsopenglcontext/cleardrawable%28%29.md) method of the context object before releasing it.

## See Also

### Managing the NSOpenGLContext

- [prepareOpenGL()](prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [openGLContext](openglcontext.md): Deprecated. The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.

# clearGLContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Releases the [NSOpenGLContext](../nsopenglcontext.md) object associated with the view.

> Please use MTKView instead.

## Declaration

```objectivec
- (void) clearGLContext;
```

<a id="Discussion"></a>

## Discussion

If necessary, this method calls the [clearDrawable](../nsopenglcontext/cleardrawable%28%29.md) method of the context object before releasing it.

## See Also

### Managing the NSOpenGLContext

- [prepareOpenGL](prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [openGLContext](openglcontext.md): Deprecated. The [NSOpenGLContext](../nsopenglcontext.md) object associated with the receiver.
