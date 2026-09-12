> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/openglcontext](https://developer.apple.com/documentation/appkit/nsopengllayer/openglcontext)

# openGLContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

The layer’s OpenGL context.

> Please use CAMetalLayer instead.

## Declaration

```swift
var openGLContext: NSOpenGLContext? { get set }
```

<a id="Discussion"></a>

## Discussion

Provides access to the layer’s associated [NSOpenGLContext](../nsopenglcontext.md).  Subclasses shouldn’t invoke `setOpenGLContext:`, but can override it if desired to intercept assignment of the layer’s context.

## See Also

### Managing the Rendering Context

- [openGLContext(for:)](openglcontext%28for_%29.md): Deprecated. Returns the OpenGL context to use for the requested pixel format.

# openGLContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

The layer’s OpenGL context.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
@property (strong, nullable) NSOpenGLContext * openGLContext;
```

<a id="Discussion"></a>

## Discussion

Provides access to the layer’s associated [NSOpenGLContext](../nsopenglcontext.md).  Subclasses shouldn’t invoke `setOpenGLContext:`, but can override it if desired to intercept assignment of the layer’s context.

## See Also

### Managing the Rendering Context

- [openGLContextForPixelFormat:](openglcontext%28for_%29.md): Deprecated. Returns the OpenGL context to use for the requested pixel format.
