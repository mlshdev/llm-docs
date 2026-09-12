> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/releasecglcontext(_:)](https://developer.apple.com/documentation/quartzcore/caopengllayer/releasecglcontext(_:))

# releaseCGLContext(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Releases the specified rendering context.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func releaseCGLContext(_ ctx: CGLContextObj)
```

## Parameters

- `ctx`: The rendering context to release.

<a id="Discussion"></a>

## Discussion

This method is called when the OpenGL context that was previously returned by [copyCGLContext(forPixelFormat:)](copycglcontext%28forpixelformat_%29.md) is no longer needed.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing the Rendering Context

- [copyCGLContext(forPixelFormat:)](copycglcontext%28forpixelformat_%29.md): Deprecated. Returns the rendering context the receiver requires for the specified pixel format.

# releaseCGLContext: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Releases the specified rendering context.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) releaseCGLContext:(CGLContextObj) ctx;
```

## Parameters

- `ctx`: The rendering context to release.

<a id="Discussion"></a>

## Discussion

This method is called when the OpenGL context that was previously returned by [copyCGLContextForPixelFormat:](copycglcontext%28forpixelformat_%29.md) is no longer needed.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing the Rendering Context

- [copyCGLContextForPixelFormat:](copycglcontext%28forpixelformat_%29.md): Deprecated. Returns the rendering context the receiver requires for the specified pixel format.
