> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/candraw(in:pixelformat:forlayertime:displaytime:)](https://developer.apple.com/documentation/appkit/nsopengllayer/candraw(in:pixelformat:forlayertime:displaytime:))

# canDraw(in:pixelFormat:forLayerTime:displayTime:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Invoked to ask the layer whether it can (or should) draw.

> Please use CAMetalLayer instead.

## Declaration

```swift
func canDraw(in context: NSOpenGLContext, pixelFormat: NSOpenGLPixelFormat, forLayerTime t: CFTimeInterval, displayTime ts: UnsafePointer<CVTimeStamp>) -> Bool
```

## Parameters

- `context`: The NSOpenGLContext in to which the OpenGL content would be drawn.
- `pixelFormat`: The pixel format used when the context was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with timeInterval. Can be `null`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver should render OpenGL content, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is called before attempting to render the frame for the layer time specified by `timeInterval`. If the method returns [false](https://developer.apple.com/documentation/swift/false), the frame is skipped. The default implementation always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Drawing the Content

- [draw(in:pixelFormat:forLayerTime:displayTime:)](draw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

# canDrawInOpenGLContext:pixelFormat:forLayerTime:displayTime: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Invoked to ask the layer whether it can (or should) draw.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
- (BOOL) canDrawInOpenGLContext:(NSOpenGLContext *) context pixelFormat:(NSOpenGLPixelFormat *) pixelFormat forLayerTime:(CFTimeInterval) t displayTime:(const CVTimeStamp *) ts;
```

## Parameters

- `context`: The NSOpenGLContext in to which the OpenGL content would be drawn.
- `pixelFormat`: The pixel format used when the context was created.
- `t`: The current layer time.
- `ts`: The display timestamp associated with timeInterval. Can be `null`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver should render OpenGL content, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This method is called before attempting to render the frame for the layer time specified by `timeInterval`. If the method returns [false](https://developer.apple.com/documentation/swift/false), the frame is skipped. The default implementation always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Drawing the Content

- [drawInOpenGLContext:pixelFormat:forLayerTime:displayTime:](draw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.
