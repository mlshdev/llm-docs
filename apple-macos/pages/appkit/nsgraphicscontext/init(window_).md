> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/init(window:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init(window:))

# init(window:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new graphics context for drawing into a window.

> Add instances of NSView to display content in a window

## Declaration

```swift
init(window: NSWindow)
```

## Parameters

- `window`: The window object representing the window to use for drawing.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [init(attributes:)](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [init(bitmapImageRep:)](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [init(graphicsPort:flipped:)](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

# graphicsContextWithWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new graphics context for drawing into a window.

> Add instances of NSView to display content in a window

## Declaration

```objectivec
+ (NSGraphicsContext *) graphicsContextWithWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window object representing the window to use for drawing.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

## See Also

### Creating a Graphics Context

- [graphicsContextWithAttributes:](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [graphicsContextWithBitmapImageRep:](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [graphicsContextWithGraphicsPort:flipped:](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.
