> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/draw(in:pixelformat:forlayertime:displaytime:)](https://developer.apple.com/documentation/appkit/nsopengllayer/draw(in:pixelformat:forlayertime:displaytime:))

# draw(in:pixelFormat:forLayerTime:displayTime:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Draws the OpenGL content for the specified time.

> Please use CAMetalLayer instead.

## Declaration

```swift
func draw(in context: NSOpenGLContext, pixelFormat: NSOpenGLPixelFormat, forLayerTime t: CFTimeInterval, displayTime ts: UnsafePointer<CVTimeStamp>)
```

## Parameters

- `context`: The NSOpenGLContext in to which the OpenGL content would be drawn.
- `pixelFormat`: The pixel format used when the context was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with timeInterval. Can be `null`.

<a id="Discussion"></a>

## Discussion

This method is called when a new frame needs to be generated for the layer time specified by timeInterval.

## See Also

### Drawing the Content

- [canDraw(in:pixelFormat:forLayerTime:displayTime:)](candraw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Invoked to ask the layer whether it can (or should) draw.

# drawInOpenGLContext:pixelFormat:forLayerTime:displayTime: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Draws the OpenGL content for the specified time.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
- (void) drawInOpenGLContext:(NSOpenGLContext *) context pixelFormat:(NSOpenGLPixelFormat *) pixelFormat forLayerTime:(CFTimeInterval) t displayTime:(const CVTimeStamp *) ts;
```

## Parameters

- `context`: The NSOpenGLContext in to which the OpenGL content would be drawn.
- `pixelFormat`: The pixel format used when the context was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with timeInterval. Can be `null`.

<a id="Discussion"></a>

## Discussion

This method is called when a new frame needs to be generated for the layer time specified by timeInterval.

## See Also

### Drawing the Content

- [canDrawInOpenGLContext:pixelFormat:forLayerTime:displayTime:](candraw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Invoked to ask the layer whether it can (or should) draw.
