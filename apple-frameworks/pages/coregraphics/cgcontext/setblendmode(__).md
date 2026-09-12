> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setblendmode(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setblendmode(_:))

# setBlendMode(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets how sample values are composited by a graphics context.

## Declaration

```swift
func setBlendMode(_ mode: CGBlendMode)
```

## Parameters

- `mode`: A blend mode. See [CGBlendMode](../cgblendmode.md) for a list of the constants you can supply.

## See Also

### Managing a Graphics Context

- [flush()](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [synchronize()](synchronize%28%29.md): Marks a window context for update.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [setRenderingIntent(\_:)](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.

# CGContextSetBlendMode (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets how sample values are composited by a graphics context.

## Declaration

```objectivec
extern void CGContextSetBlendMode(CGContextRef c, CGBlendMode mode);
```

## Parameters

- `c`: The graphics context to modify.
- `mode`: A blend mode. See [CGBlendMode](../cgblendmode.md) for a list of the constants you can supply.

## See Also

### Managing a Graphics Context

- [CGContextFlush](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [CGContextSynchronize](synchronize%28%29.md): Marks a window context for update.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
- [CGContextSetRenderingIntent](setrenderingintent%28__%29.md): Sets the rendering intent in the current graphics state.
