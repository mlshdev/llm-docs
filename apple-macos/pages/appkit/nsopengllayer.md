> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer](https://developer.apple.com/documentation/appkit/nsopengllayer)

# NSOpenGLLayer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+ (deprecated in 10.14)

A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```swift
class NSOpenGLLayer
```

<a id="overview"></a>

## Overview

Unlike [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer), [NSOpenGLLayer](nsopengllayer.md) uses AppKit types.

## Topics

### Drawing the Content

- [canDraw(in:pixelFormat:forLayerTime:displayTime:)](nsopengllayer/candraw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Invoked to ask the layer whether it can (or should) draw.
- [draw(in:pixelFormat:forLayerTime:displayTime:)](nsopengllayer/draw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

### Managing the Pixel Format

- [openGLPixelFormat](nsopengllayer/openglpixelformat.md): Deprecated. Provides access to the layer’s associated OpenGL pixel format.
- [openGLPixelFormat(forDisplayMask:)](nsopengllayer/openglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for the specified displays.

### Managing the Rendering Context

- [openGLContext](nsopengllayer/openglcontext.md): Deprecated. The layer’s OpenGL context.
- [openGLContext(for:)](nsopengllayer/openglcontext%28for_%29.md): Deprecated. Returns the OpenGL context to use for the requested pixel format.

### Accessing the Associated View

- [view](nsopengllayer/view.md): Deprecated. Returns the view associated with the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer)

### Conforms To

- [CAMediaTiming](https://developer.apple.com/documentation/quartzcore/camediatiming)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSOpenGLLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+ (deprecated in 10.14)

A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```objectivec
@interface NSOpenGLLayer : CAOpenGLLayer
```

<a id="overview"></a>

## Overview

Unlike [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer), [NSOpenGLLayer](nsopengllayer.md) uses AppKit types.

## Topics

### Drawing the Content

- [canDrawInOpenGLContext:pixelFormat:forLayerTime:displayTime:](nsopengllayer/candraw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Invoked to ask the layer whether it can (or should) draw.
- [drawInOpenGLContext:pixelFormat:forLayerTime:displayTime:](nsopengllayer/draw%28in_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

### Managing the Pixel Format

- [openGLPixelFormat](nsopengllayer/openglpixelformat.md): Deprecated. Provides access to the layer’s associated OpenGL pixel format.
- [openGLPixelFormatForDisplayMask:](nsopengllayer/openglpixelformat%28fordisplaymask_%29.md): Deprecated. Returns the OpenGL pixel format suitable for the specified displays.

### Managing the Rendering Context

- [openGLContext](nsopengllayer/openglcontext.md): Deprecated. The layer’s OpenGL context.
- [openGLContextForPixelFormat:](nsopengllayer/openglcontext%28for_%29.md): Deprecated. Returns the OpenGL context to use for the requested pixel format.

### Accessing the Associated View

- [view](nsopengllayer/view.md): Deprecated. Returns the view associated with the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
