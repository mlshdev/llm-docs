> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext](https://developer.apple.com/documentation/appkit/nsopenglcontext)

# NSOpenGLContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```swift
class NSOpenGLContext
```

<a id="overview"></a>

## Overview

An OpenGL context is created using an [NSOpenGLPixelFormat](nsopenglpixelformat.md)object that specifies the context’s buffer types and other attributes. A context can be full-screen, offscreen, or associated with an [NSView](nsview.md) object. A context draws into its *drawable object*, which is the frame buffer that is the target of OpenGL drawing operations.

Every [NSOpenGLContext](nsopenglcontext.md) object wraps a low-level, platform-specific Core OpenGL (CGL) context. Your application can retrieve the CGL context by calling the [cglContextObj](nsopenglcontext/cglcontextobj.md) method. For more information on the underling CGL context, see `CGL`.

## Topics

### Creating Contexts

- [init(format:share:)](nsopenglcontext/init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.
- [init(cglContextObj:)](nsopenglcontext/init%28cglcontextobj_%29-30lqr.md): Deprecated. Initializes and returns an OpenGL context object using an existing CGL context.

### Managing the Current Context

- [clearCurrentContext()](nsopenglcontext/clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [current](nsopenglcontext/current.md): Deprecated. Returns the current OpenGL graphics context.
- [makeCurrentContext()](nsopenglcontext/makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.

### Managing the Drawable Object

- [view](nsopenglcontext/view.md): Deprecated. Returns the OpenGL context’s view.
- [clearDrawable()](nsopenglcontext/cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update()](nsopenglcontext/update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.

### Flushing the Drawing Buffer

- [flushBuffer()](nsopenglcontext/flushbuffer%28%29.md): Deprecated. Copies the back buffer to the front buffer of the OpenGL context.

### Context Parameter Handling

- [setValues(\_:for:)](nsopenglcontext/setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.
- [getValues(\_:for:)](nsopenglcontext/getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.

### Working with Virtual Screens

- [currentVirtualScreen](nsopenglcontext/currentvirtualscreen.md): Deprecated. Returns the current virtual screen for the OpenGL context.

### Getting the CGL Context Object

- [cglContextObj](nsopenglcontext/cglcontextobj.md): Deprecated. Returns the low-level, platform-specific Core OpenGL (CGL) context object represented by the receiver.

### Getting the Pixel Format

- [pixelFormat](nsopenglcontext/pixelformat.md): Deprecated. The pixel format of the OpenGL context.

### Getting the OpenGL Version

- [openGLVersion](nsopenglcontext/openglversion.md): Deprecated. The version of OpenGL.

### Constants

- [NSOpenGLContext.Parameter](nsopenglcontext/parameter.md): Deprecated. Constants that specify context parameters.

### Initializers

- [init(CGLContextObj:)](nsopenglcontext/init%28cglcontextobj_%29-4jlgm.md): Deprecated.
- [init(format:shareContext:)](nsopenglcontext/init%28format_sharecontext_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSLocking](https://developer.apple.com/documentation/foundation/nslocking)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSOpenGLContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```objectivec
@interface NSOpenGLContext : NSObject
```

<a id="overview"></a>

## Overview

An OpenGL context is created using an [NSOpenGLPixelFormat](nsopenglpixelformat.md)object that specifies the context’s buffer types and other attributes. A context can be full-screen, offscreen, or associated with an [NSView](nsview.md) object. A context draws into its *drawable object*, which is the frame buffer that is the target of OpenGL drawing operations.

Every [NSOpenGLContext](nsopenglcontext.md) object wraps a low-level, platform-specific Core OpenGL (CGL) context. Your application can retrieve the CGL context by calling the [CGLContextObj](nsopenglcontext/cglcontextobj.md) method. For more information on the underling CGL context, see `CGL`.

## Topics

### Creating Contexts

- [initWithFormat:shareContext:](nsopenglcontext/init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.
- [initWithCGLContextObj:](nsopenglcontext/init%28cglcontextobj_%29-30lqr.md): Deprecated. Initializes and returns an OpenGL context object using an existing CGL context.

### Managing the Current Context

- [clearCurrentContext](nsopenglcontext/clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [currentContext](nsopenglcontext/current.md): Deprecated. Returns the current OpenGL graphics context.
- [makeCurrentContext](nsopenglcontext/makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.

### Managing the Drawable Object

- [view](nsopenglcontext/view.md): Deprecated. Returns the OpenGL context’s view.
- [setFullScreen](nsopenglcontext/setfullscreen.md): Deprecated. Sets the OpenGL context to full-screen mode.
- [setOffScreen:width:height:rowbytes:](nsopenglcontext/setoffscreen_width_height_rowbytes_.md): Deprecated. Instructs the OpenGL context to render into an offscreen buffer with the specified attributes.
- [clearDrawable](nsopenglcontext/cleardrawable%28%29.md): Deprecated. Disassociates the OpenGL context from its viewport.
- [update](nsopenglcontext/update%28%29.md): Deprecated. Updates the OpenGL context’s drawable object.

### Flushing the Drawing Buffer

- [flushBuffer](nsopenglcontext/flushbuffer%28%29.md): Deprecated. Copies the back buffer to the front buffer of the OpenGL context.

### Copying Attributes

- [copyAttributesFromContext:withMask:](nsopenglcontext/copyattributesfromcontext_withmask_.md): Deprecated. Copies selected groups of state variables to the OpenGL context.

### Context Parameter Handling

- [setValues:forParameter:](nsopenglcontext/setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.
- [getValues:forParameter:](nsopenglcontext/getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.

### Working with Virtual Screens

- [currentVirtualScreen](nsopenglcontext/currentvirtualscreen.md): Deprecated. Returns the current virtual screen for the OpenGL context.

### Creating Textures

- [createTexture:fromView:internalFormat:](nsopenglcontext/createtexture_fromview_internalformat_.md): Deprecated. Creates a new texture from the contents of the specified view.

### Getting the CGL Context Object

- [CGLContextObj](nsopenglcontext/cglcontextobj.md): Deprecated. Returns the low-level, platform-specific Core OpenGL (CGL) context object represented by the receiver.

### Working with Pixel Buffers

- [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](nsopenglcontext/setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md): Deprecated. Attaches the specified pixel buffer to the OpenGL context.
- [pixelBuffer](nsopenglcontext/pixelbuffer.md): Deprecated. Returns the pixel-buffer object attached to the OpenGL context.
- [pixelBufferCubeMapFace](nsopenglcontext/pixelbuffercubemapface.md): Deprecated. Returns the cube map face of the pixel buffer attached to the OpenGL context.
- [pixelBufferMipMapLevel](nsopenglcontext/pixelbuffermipmaplevel.md): Deprecated. Returns the mipmap level of the pixel buffer attached to the OpenGL context.
- [setTextureImageToPixelBuffer:colorBuffer:](nsopenglcontext/settextureimagetopixelbuffer_colorbuffer_.md): Deprecated. Attaches the image data in the specified pixel buffer to the texture object currently bound by the OpenGL context.

### Getting the Pixel Format

- [pixelFormat](nsopenglcontext/pixelformat.md): Deprecated. The pixel format of the OpenGL context.

### Constants

- [NSOpenGLContextParameter](nsopenglcontext/parameter.md): Deprecated. Constants that specify context parameters.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSLocking](https://developer.apple.com/documentation/foundation/nslocking)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
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
