> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/synchronize()](https://developer.apple.com/documentation/coregraphics/cgcontext/synchronize())

# synchronize() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Marks a window context for update.

## Declaration

```swift
func synchronize()
```

<a id="Discussion"></a>

## Discussion

When you call this function, all drawing operations since the last update are flushed at the next regular opportunity. Under normal conditions, you do not need to call this function.

## See Also

### Managing a Graphics Context

- [flush()](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [setBlendMode(\_:)](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [setRenderingIntent(\_:)](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.

# CGContextSynchronize (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Marks a window context for update.

## Declaration

```objectivec
extern void CGContextSynchronize(CGContextRef c);
```

## Parameters

- `c`: The window context to synchronize. If you pass a PDF context or a bitmap context, this function does nothing.

<a id="Discussion"></a>

## Discussion

When you call this function, all drawing operations since the last update are flushed at the next regular opportunity. Under normal conditions, you do not need to call this function.

## See Also

### Managing a Graphics Context

- [CGContextFlush](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [CGContextSetBlendMode](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [CGContextSetRenderingIntent](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.
