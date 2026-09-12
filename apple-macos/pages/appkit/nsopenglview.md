> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview](https://developer.apple.com/documentation/appkit/nsopenglview)

# NSOpenGLView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A view that displays OpenGL content in a view.

> Please use MTKView instead.

## Declaration

```swift
class NSOpenGLView
```

<a id="overview"></a>

## Overview

An [NSOpenGLView](nsopenglview.md) object maintains an [NSOpenGLPixelFormat](nsopenglpixelformat.md) and [NSOpenGLContext](nsopenglcontext.md) object into which OpenGL calls can be rendered. The view provides methods for accessing and managing the [NSOpenGLPixelFormat](nsopenglpixelformat.md) and [NSOpenGLContext](nsopenglcontext.md) objects, as well as notifications of visible region changes.

An `NSOpenGLView` object cannot have subviews. You can, however, divide a single `NSOpenGLView` into multiple rendering areas using the `glViewport` function.

When creating an `NSOpenGLView` object in Interface Builder, you use the inspector window to specify the pixel format attributes you want for the view. Only those attributes listed in the Interface Builder inspector are set when the view is instantiated.

> **Note**

>  In versions of the Xcode Tools that shipped prior to OS X v10.4, the Interface Builder inspector does not list any pixel format attributes for `NSOpenGLView`.

## Topics

### Initializing an NSOpenGLView

- [init(frame:pixelFormat:)](nsopenglview/init%28frame_pixelformat_%29.md): Deprecated. Returns an `NSOpenGLView` object initialized with the specified frame rectangle and pixel format.

### Managing the NSOpenGLPixelFormat

- [defaultPixelFormat()](nsopenglview/defaultpixelformat%28%29.md): Deprecated. Returns a default [NSOpenGLPixelFormat](nsopenglpixelformat.md) object.
- [pixelFormat](nsopenglview/pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](nsopenglpixelformat.md) object associated with the receiver.

### Managing the NSOpenGLContext

- [prepareOpenGL()](nsopenglview/prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [clearGLContext()](nsopenglview/clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](nsopenglcontext.md) object associated with the view.
- [openGLContext](nsopenglview/openglcontext.md): Deprecated. The [NSOpenGLContext](nsopenglcontext.md) object associated with the receiver.

### Managing the Visible Region

- [reshape()](nsopenglview/reshape%28%29.md): Deprecated. Called by Cocoa when the view’s visible rectangle or bounds change.
- [update()](nsopenglview/update%28%29.md): Deprecated. Called by Cocoa when the view’s window moves or when the view itself moves or is resized.

### Extended Dynamic Range

- [wantsExtendedDynamicRangeOpenGLSurface](nsopenglview/wantsextendeddynamicrangeopenglsurface.md): Deprecated. Enables extended dynamic range values on the screen.

### Instance Properties

- [wantsBestResolutionOpenGLSurface](nsopenglview/wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.
- [wantsExtendedDynamicRangeOpenGLSurface](nsopenglview/wantsextendeddynamicrangeopenglsurface.md): Deprecated. Enables extended dynamic range values on the screen.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSOpenGLView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A view that displays OpenGL content in a view.

> Please use MTKView instead.

## Declaration

```objectivec
@interface NSOpenGLView : NSView
```

<a id="overview"></a>

## Overview

An [NSOpenGLView](nsopenglview.md) object maintains an [NSOpenGLPixelFormat](nsopenglpixelformat.md) and [NSOpenGLContext](nsopenglcontext.md) object into which OpenGL calls can be rendered. The view provides methods for accessing and managing the [NSOpenGLPixelFormat](nsopenglpixelformat.md) and [NSOpenGLContext](nsopenglcontext.md) objects, as well as notifications of visible region changes.

An `NSOpenGLView` object cannot have subviews. You can, however, divide a single `NSOpenGLView` into multiple rendering areas using the `glViewport` function.

When creating an `NSOpenGLView` object in Interface Builder, you use the inspector window to specify the pixel format attributes you want for the view. Only those attributes listed in the Interface Builder inspector are set when the view is instantiated.

> **Note**

>  In versions of the Xcode Tools that shipped prior to OS X v10.4, the Interface Builder inspector does not list any pixel format attributes for `NSOpenGLView`.

## Topics

### Initializing an NSOpenGLView

- [initWithFrame:pixelFormat:](nsopenglview/init%28frame_pixelformat_%29.md): Deprecated. Returns an `NSOpenGLView` object initialized with the specified frame rectangle and pixel format.

### Managing the NSOpenGLPixelFormat

- [defaultPixelFormat](nsopenglview/defaultpixelformat%28%29.md): Deprecated. Returns a default [NSOpenGLPixelFormat](nsopenglpixelformat.md) object.
- [pixelFormat](nsopenglview/pixelformat.md): Deprecated. The [NSOpenGLPixelFormat](nsopenglpixelformat.md) object associated with the receiver.

### Managing the NSOpenGLContext

- [prepareOpenGL](nsopenglview/prepareopengl%28%29.md): Deprecated. Used by subclasses to initialize OpenGL state.
- [clearGLContext](nsopenglview/clearglcontext%28%29.md): Deprecated. Releases the [NSOpenGLContext](nsopenglcontext.md) object associated with the view.
- [openGLContext](nsopenglview/openglcontext.md): Deprecated. The [NSOpenGLContext](nsopenglcontext.md) object associated with the receiver.

### Managing the Visible Region

- [reshape](nsopenglview/reshape%28%29.md): Deprecated. Called by Cocoa when the view’s visible rectangle or bounds change.
- [update](nsopenglview/update%28%29.md): Deprecated. Called by Cocoa when the view’s window moves or when the view itself moves or is resized.

### Extended Dynamic Range

- [wantsExtendedDynamicRangeOpenGLSurface](nsopenglview/wantsextendeddynamicrangeopenglsurface.md): Deprecated. Enables extended dynamic range values on the screen.

### Instance Properties

- [wantsBestResolutionOpenGLSurface](nsopenglview/wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.
- [wantsExtendedDynamicRangeOpenGLSurface](nsopenglview/wantsextendeddynamicrangeopenglsurface.md): Deprecated. Enables extended dynamic range values on the screen.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Classes

- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
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
