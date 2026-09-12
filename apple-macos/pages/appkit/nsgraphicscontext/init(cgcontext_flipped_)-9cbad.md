> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/init(cgcontext:flipped:)-9cbad](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init(cgcontext:flipped:)-9cbad)

# init(cgContext:flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new graphics context from the specified Core Graphics context and the initial flipped state.

## Declaration

```swift
init(cgContext graphicsPort: CGContext, flipped initialFlippedState: Bool)
```

## Parameters

- `graphicsPort`: The graphics port used to create the graphics-context object, as a [CGContext](https://developer.apple.com/documentation/coregraphics/cgcontext) (opaque type) object.
- `initialFlippedState`: Specifies the receiver’s initial flipped state. This is the value returned by [isFlipped](isflipped.md) when no view has focus.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [init(attributes:)](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [init(bitmapImageRep:)](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [init(window:)](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [init(graphicsPort:flipped:)](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

# graphicsContextWithCGContext:flipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Creates a new graphics context from the specified Core Graphics context and the initial flipped state.

## Declaration

```objectivec
+ (NSGraphicsContext *) graphicsContextWithCGContext:(CGContextRef) graphicsPort flipped:(BOOL) initialFlippedState;
```

## Parameters

- `graphicsPort`: The graphics port used to create the graphics-context object, as a [CGContextRef](https://developer.apple.com/documentation/coregraphics/cgcontext) (opaque type) object.
- `initialFlippedState`: Specifies the receiver’s initial flipped state. This is the value returned by [flipped](isflipped.md) when no view has focus.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [graphicsContextWithAttributes:](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [graphicsContextWithBitmapImageRep:](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [graphicsContextWithWindow:](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [graphicsContextWithGraphicsPort:flipped:](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.
