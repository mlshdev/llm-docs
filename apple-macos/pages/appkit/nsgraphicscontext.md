> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext](https://developer.apple.com/documentation/appkit/nsgraphicscontext)

# NSGraphicsContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that represents a graphics context.

## Declaration

```swift
class NSGraphicsContext
```

<a id="overview"></a>

## Overview

You can think of a graphics context as a destination to which drawing and graphics state operations are sent for execution. Each graphics context contains its own graphics environment and state.

The [NSGraphicsContext](nsgraphicscontext.md) class is an abstract superclass for destination-specific graphics contexts. You obtain instances of concrete subclasses with the class methods [current](nsgraphicscontext/current.md), [init(attributes:)](nsgraphicscontext/init%28attributes_%29.md), [init(bitmapImageRep:)](nsgraphicscontext/init%28bitmapimagerep_%29.md), [init(cgContext:flipped:)](nsgraphicscontext/init%28cgcontext_flipped_%29-9cbad.md), and [init(window:)](nsgraphicscontext/init%28window_%29.md).

At any time there is the notion of the current context. The current context for the current thread may be set using [current](nsgraphicscontext/current.md).

Graphics contexts are maintained on a stack. You push a graphics context onto the stack by sending it a [saveGraphicsState()](nsgraphicscontext/savegraphicsstate%28%29-swift.method.md) message, and pop it off the stack by sending it a [restoreGraphicsState()](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md) message. By sending [restoreGraphicsState()](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md) to a graphics context object you remove it from the stack, and the next graphics context on the stack becomes the current graphics context.

## Topics

### Creating a Graphics Context

- [init(attributes:)](nsgraphicscontext/init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [init(bitmapImageRep:)](nsgraphicscontext/init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [init(cgContext:flipped:)](nsgraphicscontext/init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [init(window:)](nsgraphicscontext/init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [init(graphicsPort:flipped:)](nsgraphicscontext/init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

### Managing the Current Context

- [current](nsgraphicscontext/current.md): Returns the current graphics context of the current thread.
- [cgContext](nsgraphicscontext/cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.
- [graphicsPort](nsgraphicscontext/graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.

### Managing the Graphics State

- [restoreGraphicsState()](nsgraphicscontext/restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState()](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState()](nsgraphicscontext/savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState()](nsgraphicscontext/savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState(\_:)](nsgraphicscontext/setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.

### Testing the Drawing Destination

- [currentContextDrawingToScreen()](nsgraphicscontext/currentcontextdrawingtoscreen%28%29.md): Returns a Boolean value that indicates whether the current context is drawing to the screen.
- [isDrawingToScreen](nsgraphicscontext/isdrawingtoscreen.md): A Boolean value that indicates whether the drawing destination is the screen.

### Getting Information About the Context

- [attributes](nsgraphicscontext/attributes.md): The attributes used to create this instance.
- [NSGraphicsContext.AttributeKey](nsgraphicscontext/attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContext.RepresentationFormatName](nsgraphicscontext/representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [isFlipped](nsgraphicscontext/isflipped.md): A Boolean value that indicates the graphics context’s flipped state.

### Flushing Graphics to the Context

- [flushGraphics()](nsgraphicscontext/flushgraphics%28%29.md): Forces any buffered operations or data to be sent to the graphics context’s destination.

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.

### Getting the Context for Rendering Core Image Objects

- [ciContext](nsgraphicscontext/cicontext.md): A context for Core Image objects that you can use to render into the graphics context.

### Managing Color Rendering

- [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md): The color rendering intent in the graphics context’s graphics state.
- [NSColorRenderingIntent](nscolorrenderingintent.md): Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.

### Initializers

- [init(CGContext:flipped:)](nsgraphicscontext/init%28cgcontext_flipped_%29-4txqw.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSGraphicsContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that represents a graphics context.

## Declaration

```objectivec
@interface NSGraphicsContext : NSObject
```

<a id="overview"></a>

## Overview

You can think of a graphics context as a destination to which drawing and graphics state operations are sent for execution. Each graphics context contains its own graphics environment and state.

The [NSGraphicsContext](nsgraphicscontext.md) class is an abstract superclass for destination-specific graphics contexts. You obtain instances of concrete subclasses with the class methods [currentContext](nsgraphicscontext/current.md), [graphicsContextWithAttributes:](nsgraphicscontext/init%28attributes_%29.md), [graphicsContextWithBitmapImageRep:](nsgraphicscontext/init%28bitmapimagerep_%29.md), [graphicsContextWithCGContext:flipped:](nsgraphicscontext/init%28cgcontext_flipped_%29-9cbad.md), and [graphicsContextWithWindow:](nsgraphicscontext/init%28window_%29.md).

At any time there is the notion of the current context. The current context for the current thread may be set using [currentContext](nsgraphicscontext/current.md).

Graphics contexts are maintained on a stack. You push a graphics context onto the stack by sending it a [saveGraphicsState](nsgraphicscontext/savegraphicsstate%28%29-swift.method.md) message, and pop it off the stack by sending it a [restoreGraphicsState](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md) message. By sending [restoreGraphicsState](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md) to a graphics context object you remove it from the stack, and the next graphics context on the stack becomes the current graphics context.

## Topics

### Creating a Graphics Context

- [graphicsContextWithAttributes:](nsgraphicscontext/init%28attributes_%29.md): Creates a graphics context using the specified attributes.
- [graphicsContextWithBitmapImageRep:](nsgraphicscontext/init%28bitmapimagerep_%29.md): Creates a new graphics context using the specified bitmap image representation object as the context destination.
- [graphicsContextWithCGContext:flipped:](nsgraphicscontext/init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.
- [graphicsContextWithWindow:](nsgraphicscontext/init%28window_%29.md): Deprecated. Creates a new graphics context for drawing into a window.
- [graphicsContextWithGraphicsPort:flipped:](nsgraphicscontext/init%28graphicsport_flipped_%29.md): Deprecated. Creates a new graphics context from the specified graphics port.

### Managing the Current Context

- [currentContext](nsgraphicscontext/current.md): Returns the current graphics context of the current thread.
- [CGContext](nsgraphicscontext/cgcontext.md): The Core Graphics context, which is a low-level, platform-specific graphics context.
- [graphicsPort](nsgraphicscontext/graphicsport.md): Deprecated. The low-level, platform-specific graphics context represented by the graphic port.

### Managing the Graphics State

- [restoreGraphicsState](nsgraphicscontext/restoregraphicsstate%28%29-swift.type.method.md): Pops a graphics context from the per-thread stack, makes it current, and sends the context a restore graphics state message.
- [restoreGraphicsState](nsgraphicscontext/restoregraphicsstate%28%29-swift.method.md): Removes the context’s graphics state from the top of the graphics state stack and makes the next graphics state the current graphics state.
- [saveGraphicsState](nsgraphicscontext/savegraphicsstate%28%29-swift.type.method.md): Saves the graphics state of the current graphics context.
- [saveGraphicsState](nsgraphicscontext/savegraphicsstate%28%29-swift.method.md): Saves the current graphics state and creates a new graphics state on the top of the stack.
- [setGraphicsState:](nsgraphicscontext/setgraphicsstate%28__%29.md): Deprecated. Makes the graphics context of the specified graphics state current, and resets graphics state.

### Testing the Drawing Destination

- [currentContextDrawingToScreen](nsgraphicscontext/currentcontextdrawingtoscreen%28%29.md): Returns a Boolean value that indicates whether the current context is drawing to the screen.
- [drawingToScreen](nsgraphicscontext/isdrawingtoscreen.md): A Boolean value that indicates whether the drawing destination is the screen.

### Getting Information About the Context

- [attributes](nsgraphicscontext/attributes.md): The attributes used to create this instance.
- [NSGraphicsContextAttributeKey](nsgraphicscontext/attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContextRepresentationFormatName](nsgraphicscontext/representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [flipped](nsgraphicscontext/isflipped.md): A Boolean value that indicates the graphics context’s flipped state.

### Flushing Graphics to the Context

- [flushGraphics](nsgraphicscontext/flushgraphics%28%29.md): Forces any buffered operations or data to be sent to the graphics context’s destination.

### Managing the Focus Stack

- [focusStack](nsgraphicscontext/focusstack.md): Deprecated. Returns the object used by the context to track the hierarchy of views with locked focus.
- [setFocusStack:](nsgraphicscontext/setfocusstack_.md): Deprecated. Sets the object used by the receiver to track the hierarchy of views with locked focus.

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.

### Getting the Context for Rendering Core Image Objects

- [CIContext](nsgraphicscontext/cicontext.md): A context for Core Image objects that you can use to render into the graphics context.

### Managing Color Rendering

- [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md): The color rendering intent in the graphics context’s graphics state.
- [NSColorRenderingIntent](nscolorrenderingintent.md): Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
