> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/caopengllayer/releasecglpixelformat(_:)

# releaseCGLPixelFormat(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Releases the specified OpenGL pixel format object.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func releaseCGLPixelFormat(_ pf: CGLPixelFormatObj)
```

## Parameters

- `pf`: The pixel format object to release.

<a id="Discussion"></a>

## Discussion

This method is called when the OpenGL pixel format that was previously returned by [copyCGLContext(forPixelFormat:)](copycglcontext%28forpixelformat_%29.md).

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing Pixel Format

- [copyCGLPixelFormat(forDisplayMask:)](copycglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.

# releaseCGLPixelFormat: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Releases the specified OpenGL pixel format object.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) releaseCGLPixelFormat:(CGLPixelFormatObj) pf;
```

## Parameters

- `pf`: The pixel format object to release.

<a id="Discussion"></a>

## Discussion

This method is called when the OpenGL pixel format that was previously returned by [copyCGLContextForPixelFormat:](copycglcontext%28forpixelformat_%29.md).

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing Pixel Format

- [copyCGLPixelFormatForDisplayMask:](copycglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.
