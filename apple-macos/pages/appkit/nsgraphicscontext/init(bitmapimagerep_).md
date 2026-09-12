> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/init(bitmapimagerep:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init(bitmapimagerep:))

# init(bitmapImageRep:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a new graphics context using the specified bitmap image representation object as the context destination.

## Declaration

```swift
init?(bitmapImageRep bitmapRep: NSBitmapImageRep)
```

## Parameters

- `bitmapRep`: The [NSBitmapImageRep](../nsbitmapimagerep.md) object to use as the destination.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method accepts only single plane [NSBitmapImageRep](../nsbitmapimagerep.md) instances. It is the equivalent of using [init(attributes:)](init%28attributes_%29.md) and passing `bitmapRep` as the value for the dictionary’s [destination](attributekey/destination.md) key.

## See Also

### Creating a Graphics Context

- [init(attributes:)](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [init(window:)](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [init(graphicsPort:flipped:)](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

# graphicsContextWithBitmapImageRep: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a new graphics context using the specified bitmap image representation object as the context destination.

## Declaration

```objectivec
+ (NSGraphicsContext *) graphicsContextWithBitmapImageRep:(NSBitmapImageRep *) bitmapRep;
```

## Parameters

- `bitmapRep`: The [NSBitmapImageRep](../nsbitmapimagerep.md) object to use as the destination.

<a id="return-value"></a>

## Return Value

The created [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method accepts only single plane [NSBitmapImageRep](../nsbitmapimagerep.md) instances. It is the equivalent of using [graphicsContextWithAttributes:](init%28attributes_%29.md) and passing `bitmapRep` as the value for the dictionary’s [NSGraphicsContextDestinationAttributeName](attributekey/destination.md) key.

## See Also

### Creating a Graphics Context

- [graphicsContextWithAttributes:](init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [graphicsContextWithWindow:](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [graphicsContextWithGraphicsPort:flipped:](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.
