> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelbuffer](https://developer.apple.com/documentation/appkit/nsopenglpixelbuffer)

# NSOpenGLPixelBuffer

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.2+ (deprecated in 10.7)

An object that provides access to accelerated offscreen rendering.

## Declaration

```objectivec
@interface NSOpenGLPixelBuffer : NSObject
```

<a id="overview"></a>

## Overview

> **Deprecated**

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

Using offscreen rendering you could, for example, draw into the pixel buffer, then use the contents as a texture map elsewhere. Typically you initialize an [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md) object using the [initWithTextureTarget:textureInternalFormat:textureMaxMipMapLevel:pixelsWide:pixelsHigh:](nsopenglpixelbuffer/initwithtexturetarget_textureinternalformat_texturemaxmipmaplevel_pixelswide_pixelshigh_.md) method and attach the resulting object to an OpenGL context with the [setPixelBuffer:cubeMapFace:mipMapLevel:currentVirtualScreen:](nsopenglcontext/setpixelbuffer_cubemapface_mipmaplevel_currentvirtualscreen_.md) method of [NSOpenGLContext](nsopenglcontext.md).

Every [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md) object wraps a low-level, platform-specific Core OpenGL (CGL) pixel buffer object. Your application can retrieve the CGL pixel buffer by calling the [CGLPBufferObj](nsopenglpixelbuffer/cglpbufferobj.md) method. For more information on the underling CGL pixel buffer, see `CGL`.

## Topics

### Initializing an OpenGL Pixel Buffer

- [initWithTextureTarget:textureInternalFormat:textureMaxMipMapLevel:pixelsWide:pixelsHigh:](nsopenglpixelbuffer/initwithtexturetarget_textureinternalformat_texturemaxmipmaplevel_pixelswide_pixelshigh_.md): Deprecated. Returns an `NSOpenGLPixelBuffer` object initialized with the specified parameters.
- [initWithCGLPBufferObj:](nsopenglpixelbuffer/initwithcglpbufferobj_.md): Deprecated. Initializes and returns an OpenGL pixel buffer object that encapsulates an existing CGL pixel buffer object.

### Getting OpenGL Pixel Buffer Information

- [CGLPBufferObj](nsopenglpixelbuffer/cglpbufferobj.md): Deprecated. The underlying CGL pixel buffer object associated with the OpenGL pixel buffer object.
- [pixelsHigh](nsopenglpixelbuffer/pixelshigh.md): Deprecated. The height of the OpenGL pixel buffer’s texture (in pixels).
- [pixelsWide](nsopenglpixelbuffer/pixelswide.md): Deprecated. The width of the OpenGL pixel buffer’s texture, in pixels.
- [textureInternalFormat](nsopenglpixelbuffer/textureinternalformat.md): Deprecated. The internal format of the OpenGL pixel buffer’s texture.
- [textureMaxMipMapLevel](nsopenglpixelbuffer/texturemaxmipmaplevel.md): Deprecated. The maximum mipmap level of the OpenGL pixel buffer’s texture.
- [textureTarget](nsopenglpixelbuffer/texturetarget.md): Deprecated. The texture target of the OpenGL pixel buffer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
