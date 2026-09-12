> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/flushbuffer()](https://developer.apple.com/documentation/appkit/nsopenglcontext/flushbuffer())

# flushBuffer() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Copies the back buffer to the front buffer of the OpenGL context.

> Please use Metal or MetalKit.

## Declaration

```swift
func flushBuffer()
```

<a id="Discussion"></a>

## Discussion

If the receiver is not a double-buffered context, this call does nothing.

If the [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object used to create the context had a [false](https://developer.apple.com/documentation/swift/false) backing store attribute (`NSOpenGLPFABackingStore`), the buffers may be exchanged rather than copied. This is often the case in full-screen mode.

According to the swap interval context attribute (see [NSOpenGLCPSwapInterval](../nsopenglcpswapinterval.md)), the copy may take place during the vertical retrace of the monitor, rather than immediately after [flushBuffer()](flushbuffer%28%29.md) is called. An implicit `glFlush` is done by [flushBuffer()](flushbuffer%28%29.md) before it returns. For optimal performance, an application should not call `glFlush` immediately before calling [flushBuffer()](flushbuffer%28%29.md). Subsequent OpenGL commands can be issued immediately after calling [flushBuffer()](flushbuffer%28%29.md), but are not executed until the buffer copy is completed.

## See Also

### Related Documentation

- [getValues(\_:for:)](getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.
- [init(format:share:)](init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.
- [setValues(\_:for:)](setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.

# flushBuffer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Copies the back buffer to the front buffer of the OpenGL context.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) flushBuffer;
```

<a id="Discussion"></a>

## Discussion

If the receiver is not a double-buffered context, this call does nothing.

If the [NSOpenGLPixelFormat](../nsopenglpixelformat.md) object used to create the context had a [false](https://developer.apple.com/documentation/swift/false) backing store attribute (`NSOpenGLPFABackingStore`), the buffers may be exchanged rather than copied. This is often the case in full-screen mode.

According to the swap interval context attribute (see [NSOpenGLCPSwapInterval](../nsopenglcpswapinterval.md)), the copy may take place during the vertical retrace of the monitor, rather than immediately after [flushBuffer](flushbuffer%28%29.md) is called. An implicit `glFlush` is done by [flushBuffer](flushbuffer%28%29.md) before it returns. For optimal performance, an application should not call `glFlush` immediately before calling [flushBuffer](flushbuffer%28%29.md). Subsequent OpenGL commands can be issued immediately after calling [flushBuffer](flushbuffer%28%29.md), but are not executed until the buffer copy is completed.

## See Also

### Related Documentation

- [getValues:forParameter:](getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.
- [initWithFormat:shareContext:](init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.
- [setValues:forParameter:](setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.
