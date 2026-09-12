> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/flush()](https://developer.apple.com/documentation/coregraphics/cgcontext/flush())

# flush() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Forces all pending drawing operations in a window context to be rendered immediately to the destination device.

## Declaration

```swift
func flush()
```

<a id="Discussion"></a>

## Discussion

When you call this function, Core Graphics immediately flushes the current drawing to the destination device (for example, a screen). Because the system software flushes a context automatically at the appropriate times, calling this function could have an adverse effect on performance. Under normal conditions, you do not need to call this function.

## See Also

### Managing a Graphics Context

- [synchronize()](synchronize%28%29.md): Marks a window context for update.
- [setBlendMode(\_:)](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [setRenderingIntent(\_:)](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.

# CGContextFlush (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Forces all pending drawing operations in a window context to be rendered immediately to the destination device.

## Declaration

```objectivec
extern void CGContextFlush(CGContextRef c);
```

## Parameters

- `c`: The window context to flush. If you pass a PDF context or a bitmap context, this function does nothing.

<a id="Discussion"></a>

## Discussion

When you call this function, Core Graphics immediately flushes the current drawing to the destination device (for example, a screen). Because the system software flushes a context automatically at the appropriate times, calling this function could have an adverse effect on performance. Under normal conditions, you do not need to call this function.

## See Also

### Managing a Graphics Context

- [CGContextSynchronize](synchronize%28%29.md): Marks a window context for update.
- [CGContextSetBlendMode](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [CGContextSetRenderingIntent](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.
