> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/init(attributes:)](https://developer.apple.com/documentation/appkit/nsgraphicscontext/init(attributes:))

# init(attributes:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a graphics context using the specified attributes.

## Declaration

```swift
init?(attributes: [NSGraphicsContext.AttributeKey : Any] = [:])
```

## Parameters

- `attributes`: A dictionary of values associated with the keys described in [NSGraphicsContext.AttributeKey](attributekey.md). The attributes specify such things as representation format and destination.

<a id="return-value"></a>

## Return Value

A new [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a graphics context for a window or bitmap destination. If you want to create a graphics context for a PDF or PostScript destination, do not use this method; instead, use the [NSPrintOperation](../nsprintoperation.md) class to set up the printing environment needed to generate that type of information.

## See Also

### Creating a Graphics Context

- [init(bitmapImageRep:)](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [init(window:)](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [init(graphicsPort:flipped:)](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

# graphicsContextWithAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a graphics context using the specified attributes.

## Declaration

```objectivec
+ (NSGraphicsContext *) graphicsContextWithAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: A dictionary of values associated with the keys described in [NSGraphicsContextAttributeKey](attributekey.md). The attributes specify such things as representation format and destination.

<a id="return-value"></a>

## Return Value

A new [NSGraphicsContext](../nsgraphicscontext.md) object, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a graphics context for a window or bitmap destination. If you want to create a graphics context for a PDF or PostScript destination, do not use this method; instead, use the [NSPrintOperation](../nsprintoperation.md) class to set up the printing environment needed to generate that type of information.

## See Also

### Creating a Graphics Context

- [graphicsContextWithBitmapImageRep:](init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [graphicsContextWithWindow:](init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [graphicsContextWithGraphicsPort:flipped:](init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.
