> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/init(graphicsport:flipped:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init(graphicsport:flipped:))

# init(graphicsPort:flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new graphics context from the specified graphics port.

> Use [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md) instead.

## Declaration

```swift
init(graphicsPort: UnsafeMutableRawPointer, flipped initialFlippedState: Bool)
```

## Parameters

- `graphicsPort`: The graphics port used to create the graphics-context object. Typically `graphicsPort` is a [CGContext](https://developer.apple.com/documentation/coregraphics/cgcontext) (opaque type) object.
- `initialFlippedState`: Specifies the receiver’s initial flipped state. This is the value returned by [isFlipped](isflipped.md) when no view has focus.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [init(attributes:)](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [init(bitmapImageRep:)](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [init(window:)](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.

# graphicsContextWithGraphicsPort:flipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new graphics context from the specified graphics port.

> Use [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md) instead.

## Declaration

```objectivec
+ (NSGraphicsContext *) graphicsContextWithGraphicsPort:(void *) graphicsPort flipped:(BOOL) initialFlippedState;
```

## Parameters

- `graphicsPort`: The graphics port used to create the graphics-context object. Typically `graphicsPort` is a [CGContextRef](https://developer.apple.com/documentation/coregraphics/cgcontext) (opaque type) object.
- `initialFlippedState`: Specifies the receiver’s initial flipped state. This is the value returned by [flipped](isflipped.md) when no view has focus.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [graphicsContextWithAttributes:](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [graphicsContextWithBitmapImageRep:](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [graphicsContextWithWindow:](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
