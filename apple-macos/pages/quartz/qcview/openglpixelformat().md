> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/openglpixelformat()](https://developer.apple.com/documentation/quartz/qcview/openglpixelformat())

# openGLPixelFormat() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the OpenGL pixel format used by the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func openGLPixelFormat() -> NSOpenGLPixelFormat!
```

<a id="return-value"></a>

## Return Value

An `NSOpenGLPixelFormat` object.

<a id="Discussion"></a>

## Discussion

This pixel format as a read-only object. Do not attempt to change any of its settings.

## See Also

### Working With OpenGL

- [openGLContext()](openglcontext%28%29.md): Deprecated. Returns the OpenGL context used by the view.

# openGLPixelFormat (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the OpenGL pixel format used by the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSOpenGLPixelFormat *) openGLPixelFormat;
```

<a id="return-value"></a>

## Return Value

An `NSOpenGLPixelFormat` object.

<a id="Discussion"></a>

## Discussion

This pixel format as a read-only object. Do not attempt to change any of its settings.

## See Also

### Working With OpenGL

- [openGLContext](openglcontext%28%29.md): Deprecated. Returns the OpenGL context used by the view.
