> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/openglcontext()](https://developer.apple.com/documentation/quartz/qcview/openglcontext())

# openGLContext() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the OpenGL context used by the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func openGLContext() -> NSOpenGLContext!
```

<a id="return-value"></a>

## Return Value

An `NSOpenGLContext` object.

<a id="Discussion"></a>

## Discussion

This context as a read-only object . Do not attempt to change any of its settings. If you subclass `QCView` so that you can perform custom OpenGL drawing, you’ll need to use this method to retrieve the view’s OpenGL context.

## See Also

### Related Documentation

- [render(atTime:arguments:)](render%28attime_arguments_%29.md): Deprecated. Overrides to perform your custom operations prior to or after rendering a frame of a composition.

### Working With OpenGL

- [openGLPixelFormat()](openglpixelformat%28%29.md): Deprecated. Returns the OpenGL pixel format used by the view.

# openGLContext (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the OpenGL context used by the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSOpenGLContext *) openGLContext;
```

<a id="return-value"></a>

## Return Value

An `NSOpenGLContext` object.

<a id="Discussion"></a>

## Discussion

This context as a read-only object . Do not attempt to change any of its settings. If you subclass `QCView` so that you can perform custom OpenGL drawing, you’ll need to use this method to retrieve the view’s OpenGL context.

## See Also

### Related Documentation

- [renderAtTime:arguments:](render%28attime_arguments_%29.md): Deprecated. Overrides to perform your custom operations prior to or after rendering a frame of a composition.

### Working With OpenGL

- [openGLPixelFormat](openglpixelformat%28%29.md): Deprecated. Returns the OpenGL pixel format used by the view.
