> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/cgcontext](https://developer.apple.com/documentation/appkit/nsgraphicscontext/cgcontext)

# cgContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The Core Graphics context, which is a low-level, platform-specific graphics context.

## Declaration

```swift
var cgContext: CGContext { get }
```

## See Also

### Managing the Current Context

- [current](current.md): Returns the current graphics context of the current thread.
- [graphicsPort](graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.

# CGContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The Core Graphics context, which is a low-level, platform-specific graphics context.

## Declaration

```objectivec
@property (readonly) CGContextRef CGContext;
```

## See Also

### Managing the Current Context

- [currentContext](current.md): Returns the current graphics context of the current thread.
- [graphicsPort](graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.
