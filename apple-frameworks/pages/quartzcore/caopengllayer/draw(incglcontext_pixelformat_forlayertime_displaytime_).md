> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/draw(incglcontext:pixelformat:forlayertime:displaytime:)](https://developer.apple.com/documentation/quartzcore/caopengllayer/draw(incglcontext:pixelformat:forlayertime:displaytime:))

# draw(inCGLContext:pixelFormat:forLayerTime:displayTime:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Draws the OpenGL content for the specified time.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func draw(inCGLContext ctx: CGLContextObj, pixelFormat pf: CGLPixelFormatObj, forLayerTime t: CFTimeInterval, displayTime ts: UnsafePointer<CVTimeStamp>?)
```

## Parameters

- `ctx`: The rendering context in to which the OpenGL content should be rendered.
- `pf`: The pixel format used when the `glContext` was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with `timeInterval`. Can be `null`.

<a id="Discussion"></a>

## Discussion

This method is called when a new frame needs to be generated for the layer time specified by `timeInterval`. The viewport of `glContext` is set correctly for the size of the layer. No other state is defined. If the method enables OpenGL features, it should disable them before returning.

The default implementation of the method flushes the context.

## See Also

### Drawing Layer Content

- [isAsynchronous](isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [canDraw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.

# drawInCGLContext:pixelFormat:forLayerTime:displayTime: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Draws the OpenGL content for the specified time.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) drawInCGLContext:(CGLContextObj) ctx pixelFormat:(CGLPixelFormatObj) pf forLayerTime:(CFTimeInterval) t displayTime:(const CVTimeStamp *) ts;
```

## Parameters

- `ctx`: The rendering context in to which the OpenGL content should be rendered.
- `pf`: The pixel format used when the `glContext` was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with `timeInterval`. Can be `null`.

<a id="Discussion"></a>

## Discussion

This method is called when a new frame needs to be generated for the layer time specified by `timeInterval`. The viewport of `glContext` is set correctly for the size of the layer. No other state is defined. If the method enables OpenGL features, it should disable them before returning.

The default implementation of the method flushes the context.

## See Also

### Drawing Layer Content

- [asynchronous](isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [canDrawInCGLContext:pixelFormat:forLayerTime:displayTime:](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.
