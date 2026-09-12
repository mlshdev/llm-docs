> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/current](https://developer.apple.com/documentation/appkit/nsgraphicscontext/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the current graphics context of the current thread.

## Declaration

```swift
class var current: NSGraphicsContext? { get set }
```

<a id="return-value"></a>

## Return Value

The current graphics context of the current thread.

<a id="Discussion"></a>

## Discussion

Returns an instance of a concrete subclass of [NSGraphicsContext](../nsgraphicscontext.md).

## See Also

### Managing the Current Context

- [cgContext](cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.
- [graphicsPort](graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.

# currentContext (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the current graphics context of the current thread.

## Declaration

```objectivec
@property (class, strong, nullable) NSGraphicsContext * currentContext;
```

<a id="return-value"></a>

## Return Value

The current graphics context of the current thread.

<a id="Discussion"></a>

## Discussion

Returns an instance of a concrete subclass of [NSGraphicsContext](../nsgraphicscontext.md).

## See Also

### Managing the Current Context

- [CGContext](cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.
- [graphicsPort](graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.
