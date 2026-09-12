> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglpixelformat](https://developer.apple.com/documentation/appkit/nsopenglpixelformat)

# NSOpenGLPixelFormat (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

An object that specifies the types of buffers and other attributes of the OpenGL context.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```swift
class NSOpenGLPixelFormat
```

<a id="overview"></a>

## Overview

To render with OpenGL into an [NSOpenGLContext](nsopenglcontext.md), you must specify the context’s pixel format.

Every [NSOpenGLPixelFormat](nsopenglpixelformat.md) object wraps a low-level, platform-specific Core OpenGL (CGL) pixel format object. Your application can retrieve the CGL pixel format object by calling the [cglPixelFormatObj](nsopenglpixelformat/cglpixelformatobj.md) method. For more information on the underling CGL pixel format object, see `CGL`.

## Topics

### Creating an OpenGL Pixel Format

- [init(cglPixelFormatObj:)](nsopenglpixelformat/init%28cglpixelformatobj_%29-2zqw4.md): Deprecated. Returns an OpenGL pixel format object initialized with using an existing CGL pixel format object.
- [init(attributes:)](nsopenglpixelformat/init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.

### Managing the Pixel Format

- [cglPixelFormatObj](nsopenglpixelformat/cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [getValues(\_:forAttribute:forVirtualScreen:)](nsopenglpixelformat/getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.
- [numberOfVirtualScreens](nsopenglpixelformat/numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.

### Constants

- [NSOpenGLPixelFormatAttribute](nsopenglpixelformatattribute.md): Deprecated. Pixel format attributes for OpenGL.
- [OpenGL Pixel Format Attributes](opengl-pixel-format-attributes.md): Pixel format attributes for OpenGL.
- [OpenGL Profiles](opengl-profiles.md): Constants that specify the functionality provided by the renderer.

### Initializers

- [init(CGLPixelFormatObj:)](nsopenglpixelformat/init%28cglpixelformatobj_%29-6et9a.md): Deprecated.
- [init(coder:)](nsopenglpixelformat/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSOpenGLPixelFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

An object that specifies the types of buffers and other attributes of the OpenGL context.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```objectivec
@interface NSOpenGLPixelFormat : NSObject
```

<a id="overview"></a>

## Overview

To render with OpenGL into an [NSOpenGLContext](nsopenglcontext.md), you must specify the context’s pixel format.

Every [NSOpenGLPixelFormat](nsopenglpixelformat.md) object wraps a low-level, platform-specific Core OpenGL (CGL) pixel format object. Your application can retrieve the CGL pixel format object by calling the [CGLPixelFormatObj](nsopenglpixelformat/cglpixelformatobj.md) method. For more information on the underling CGL pixel format object, see `CGL`.

## Topics

### Creating an OpenGL Pixel Format

- [initWithCGLPixelFormatObj:](nsopenglpixelformat/init%28cglpixelformatobj_%29-2zqw4.md): Deprecated. Returns an OpenGL pixel format object initialized with using an existing CGL pixel format object.
- [initWithAttributes:](nsopenglpixelformat/init%28attributes_%29.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attributes.
- [initWithData:](nsopenglpixelformat/initwithdata_.md): Deprecated. Returns an OpenGL pixel format object initialized with specified pixel format attribute data.

### Managing the Pixel Format

- [CGLPixelFormatObj](nsopenglpixelformat/cglpixelformatobj.md): Deprecated. The low-level, platform-specific Core OpenGL (CGL) pixel format object represented by the receiver.
- [getValues:forAttribute:forVirtualScreen:](nsopenglpixelformat/getvalues%28__forattribute_forvirtualscreen_%29.md): Deprecated. Gets the value for the specified pixel format attribute.
- [numberOfVirtualScreens](nsopenglpixelformat/numberofvirtualscreens.md): Deprecated. The number of virtual screens associated with the OpenGL pixel format.

### Managing Attributes

- [attributes](nsopenglpixelformat/attributes.md): Deprecated. The attribute data for the pixel format object.
- [setAttributes:](nsopenglpixelformat/setattributes_.md): Deprecated. Sets the attribute data for the pixel format object.

### Constants

- [NSOpenGLPixelFormatAttribute](nsopenglpixelformatattribute.md): Deprecated. Pixel format attributes for OpenGL.
- [OpenGL Pixel Format Attributes](opengl-pixel-format-attributes.md): Pixel format attributes for OpenGL.
- [OpenGL Profiles](opengl-profiles.md): Constants that specify the functionality provided by the renderer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
