> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/copycglpixelformat(fordisplaymask:)](https://developer.apple.com/documentation/quartzcore/caopengllayer/copycglpixelformat(fordisplaymask:))

# copyCGLPixelFormat(forDisplayMask:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func copyCGLPixelFormat(forDisplayMask mask: UInt32) -> CGLPixelFormatObj
```

## Parameters

- `mask`: The display mask the OpenGL content will be rendered on.

<a id="Discussion"></a>

## Discussion

This method is called when a pixel format object is needed for the receiver.  The default implementation returns a 32bpp fixed point pixelf format, with the `NoRecovery` and `Accelerated` flags set.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing Pixel Format

- [releaseCGLPixelFormat(\_:)](releasecglpixelformat%28__%29.md): Deprecated. Releases the specified OpenGL pixel format object.

# copyCGLPixelFormatForDisplayMask: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns the OpenGL pixel format suitable for rendering to the set of displays specified by the display mask.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGLPixelFormatObj) copyCGLPixelFormatForDisplayMask:(uint32_t) mask;
```

## Parameters

- `mask`: The display mask the OpenGL content will be rendered on.

<a id="Discussion"></a>

## Discussion

This method is called when a pixel format object is needed for the receiver.  The default implementation returns a 32bpp fixed point pixelf format, with the `NoRecovery` and `Accelerated` flags set.

You should not call this method directly, it is intended to be overridden by subclasses.

## See Also

### Managing Pixel Format

- [releaseCGLPixelFormat:](releasecglpixelformat%28__%29.md): Deprecated. Releases the specified OpenGL pixel format object.
