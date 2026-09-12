> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/candraw(incglcontext:pixelformat:forlayertime:displaytime:)](https://developer.apple.com/documentation/quartzcore/caopengllayer/candraw(incglcontext:pixelformat:forlayertime:displaytime:))

# canDraw(inCGLContext:pixelFormat:forLayerTime:displayTime:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns whether the receiver should draw OpenGL content for the specified time.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func canDraw(inCGLContext ctx: CGLContextObj, pixelFormat pf: CGLPixelFormatObj, forLayerTime t: CFTimeInterval, displayTime ts: UnsafePointer<CVTimeStamp>?) -> Bool
```

## Parameters

- `ctx`: The `CGLContextObj` in to which the OpenGL content would be drawn.
- `pf`: The pixel format used when the `glContext` was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with `timeInterval`. Can be `null`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver should render OpenGL content, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is called before attempting to render the frame for the layer time specified by `timeInterval`. If the method returns [false](https://developer.apple.com/documentation/swift/false), the frame is skipped. The default implementation always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing Layer Content

- [isAsynchronous](isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [draw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

# canDrawInCGLContext:pixelFormat:forLayerTime:displayTime: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Returns whether the receiver should draw OpenGL content for the specified time.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) canDrawInCGLContext:(CGLContextObj) ctx pixelFormat:(CGLPixelFormatObj) pf forLayerTime:(CFTimeInterval) t displayTime:(const CVTimeStamp *) ts;
```

## Parameters

- `ctx`: The `CGLContextObj` in to which the OpenGL content would be drawn.
- `pf`: The pixel format used when the `glContext` was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with `timeInterval`. Can be `null`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver should render OpenGL content, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is called before attempting to render the frame for the layer time specified by `timeInterval`. If the method returns [false](https://developer.apple.com/documentation/swift/false), the frame is skipped. The default implementation always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing Layer Content

- [asynchronous](isasynchronous.md): Deprecated. Determines when the contents of the layer are updated.
- [drawInCGLContext:pixelFormat:forLayerTime:displayTime:](draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.
