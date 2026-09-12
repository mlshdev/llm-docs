> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/openglcontext(for:)](https://developer.apple.com/documentation/appkit/nsopengllayer/openglcontext(for:))

# openGLContext(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the OpenGL context to use for the requested pixel format.

> Please use CAMetalLayer instead.

## Declaration

```swift
func openGLContext(for pixelFormat: NSOpenGLPixelFormat) -> NSOpenGLContext
```

## Parameters

- `pixelFormat`: The pixel format.

<a id="return-value"></a>

## Return Value

An autoreleased [NSOpenGLContext](../nsopenglcontext.md).

## See Also

### Managing the Rendering Context

- [openGLContext](openglcontext.md): Deprecated. The layer’s OpenGL context.

# openGLContextForPixelFormat: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the OpenGL context to use for the requested pixel format.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
- (NSOpenGLContext *) openGLContextForPixelFormat:(NSOpenGLPixelFormat *) pixelFormat;
```

## Parameters

- `pixelFormat`: The pixel format.

<a id="return-value"></a>

## Return Value

An autoreleased [NSOpenGLContext](../nsopenglcontext.md).

## See Also

### Managing the Rendering Context

- [openGLContext](openglcontext.md): Deprecated. The layer’s OpenGL context.
