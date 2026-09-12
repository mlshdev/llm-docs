> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscachedimagerep](https://developer.apple.com/documentation/appkit/nscachedimagerep)

# NSCachedImageRep

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.6)

An object that stores image data in a form that can be readily transferred to the screen.

## Declaration

```objectivec
@interface NSCachedImageRep : NSImageRep
```

<a id="overview"></a>

## Overview

An [NSCachedImageRep](nscachedimagerep.md) object differs from other image representation objects in that it simply stores the already rendered image, whereas other image representation objects generally have knowledge about how to render the image from source data.

You typically do not use this class directly. Instead, [NSImage](nsimage.md) and its other image representation objects create instances of [NSCachedImageRep](nscachedimagerep.md) as needed to cache versions of the rendered image. This caching speeds up screen-based drawing for existing images during subsequent rendering operations. Cached image representations are also used to capture drawing commands for images created programmatically by locking focus on an image.

## Topics

### Initializing Cached Representations of Images

- [initWithSize:depth:separate:alpha:](nscachedimagerep/initwithsize_depth_separate_alpha_.md): Deprecated. Returns a cached image representation initialized with the specified image characteristics.
- [initWithWindow:rect:](nscachedimagerep/initwithwindow_rect_.md): Deprecated. Returns a cached image representation initialized for drawing in the specified window.

### Getting Data

- [rect](nscachedimagerep/rect.md): Deprecated. Returns the rectangle where the representation is cached.
- [window](nscachedimagerep/window.md): Deprecated. Returns the window where the representation is cached.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
