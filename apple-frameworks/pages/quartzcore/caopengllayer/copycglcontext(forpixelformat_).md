> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/copycglcontext(forpixelformat:)](https://developer.apple.com/documentation/quartzcore/caopengllayer/copycglcontext(forpixelformat:))

# copyCGLContext(forPixelFormat:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns the rendering context the receiver requires for the specified pixel format.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func copyCGLContext(forPixelFormat pf: CGLPixelFormatObj) -> CGLContextObj
```

## Parameters

- `pf`: The pixel format for the rendering context.

<a id="return-value"></a>

## Return Value

A new `CGLContext` with renderers for `pixelFormat`.

<a id="Discussion"></a>

## Discussion

This method is called when a rendering context is needed by the receiver. The default implementation allocates a new context with a null share context.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing the Rendering Context

- [releaseCGLContext(\_:)](releasecglcontext%28__%29.md): Deprecated. Releases the specified rendering context.

# copyCGLContextForPixelFormat: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns the rendering context the receiver requires for the specified pixel format.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGLContextObj) copyCGLContextForPixelFormat:(CGLPixelFormatObj) pf;
```

## Parameters

- `pf`: The pixel format for the rendering context.

<a id="return-value"></a>

## Return Value

A new `CGLContext` with renderers for `pixelFormat`.

<a id="Discussion"></a>

## Discussion

This method is called when a rendering context is needed by the receiver. The default implementation allocates a new context with a null share context.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing the Rendering Context

- [releaseCGLContext:](releasecglcontext%28__%29.md): Deprecated. Releases the specified rendering context.
