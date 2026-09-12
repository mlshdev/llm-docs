> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/graphicsport](https://developer.apple.com/documentation/appkit/nsgraphicscontext/graphicsport)

# graphicsPort (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The low-level, platform-specific graphics context represented by the graphic port.

> Use [cgContext](cgcontext.md) instead.

## Declaration

```swift
var graphicsPort: UnsafeMutableRawPointer { get }
```

<a id="Discussion"></a>

## Discussion

In macOS, this is the Core Graphics context, a [CGContext](https://developer.apple.com/documentation/coregraphics/cgcontext) object (opaque type).

## See Also

### Managing the Current Context

- [current](current.md): Returns the current graphics context of the current thread.
- [cgContext](cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.

# graphicsPort (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The low-level, platform-specific graphics context represented by the graphic port.

> Use [CGContext](cgcontext.md) instead.

## Declaration

```objectivec
@property (readonly) void * graphicsPort;
```

<a id="Discussion"></a>

## Discussion

In macOS, this is the Core Graphics context, a [CGContextRef](https://developer.apple.com/documentation/coregraphics/cgcontext) object (opaque type).

## See Also

### Managing the Current Context

- [currentContext](current.md): Returns the current graphics context of the current thread.
- [CGContext](cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.
