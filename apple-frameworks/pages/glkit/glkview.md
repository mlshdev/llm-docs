> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview](https://developer.apple.com/documentation/glkit/glkview)

# GLKView (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A default implementation for views that draw their content using OpenGL ES.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKView
```

<a id="overview"></a>

## Overview

The [GLKView](glkview.md) class simplifies the effort required to create an OpenGL ES application by  directly managing a framebuffer object on your behalf; your application simply needs to draw into the framebuffer when the contents need to be updated.

To use this class in your application, create a new [GLKView](glkview.md) object and provide it an OpenGL ES context. Then, modify the view’s [drawableColorFormat](glkview/drawablecolorformat.md), [drawableDepthFormat](glkview/drawabledepthformat.md), [drawableStencilFormat](glkview/drawablestencilformat.md), and [drawableMultisample](glkview/drawablemultisample.md) properties to configure the format of the drawable’s framebuffer object. After this, the view automatically creates or updates the framebuffer object whenever the view must be redrawn. A [GLKView](glkview.md) object uses the regular view drawing cycle for a [UIView](../uikit/uiview.md)object, calling its [draw(\_:)](../uikit/uiview/draw%28__%29.md) method whenever the contents of the view need to be updated. Before calling its `draw `method, the view makes its [EAGLContext](../opengles/eaglcontext.md) object the current OpenGL ES context and binds its framebuffer object to the OpenGL ES context as the target for rendering commands. Your application’s implementation of the `draw` method should call one or more OpenGL ES functions to render an image into the framebuffer object. Then, the view resolves any multisampling that you may have enabled and delivers the finished results.

> **Important**

>  Your drawing method should only modify the contents of the framebuffer object. Never attempt to read the pixel information from the underlying framebuffer object, modify or dispose of the framebuffer object, or read its other properties by calling OpenGL ES functions. Instead, rely on the properties and methods provided by the [GLKView](glkview.md) class.

The [GLKView](glkview.md) class can be used in conjunction with a [GLKViewController](glkviewcontroller.md) object to create an animation rendering loop that redraws the contents of the view at a specified frame rate.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Typically, there is no need to subclass the [GLKView](glkview.md) class. Instead, provide a delegate object to draw the view’s contents. See [GLKViewDelegate](glkviewdelegate.md).

## Topics

### Initializing the View

- [init(frame:context:)](glkview/init%28frame_context_%29.md): Deprecated. Initializes a new view.

### Delegate

- [delegate](glkview/delegate.md): Deprecated. The view’s delegate.

### Configuring the Framebuffer Object

- [drawableColorFormat](glkview/drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](glkview/drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](glkview/drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.
- [drawableMultisample](glkview/drawablemultisample.md): Deprecated. The format of the multisampling buffer.

### Read-only Framebuffer Properties

- [drawableHeight](glkview/drawableheight.md): Deprecated. The height, in pixels, of the underlying framebuffer object.
- [drawableWidth](glkview/drawablewidth.md): Deprecated. The width, in pixels, of the underlying framebuffer object.

### Drawing Your View’s Contents

- [context](glkview/context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable()](glkview/binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](glkview/enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display()](glkview/display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](glkview/snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

### Deleting the View’s Underlying Framebuffer Object

- [deleteDrawable()](glkview/deletedrawable%28%29.md): Deprecated. Deletes the drawable object associated with the view.

### Constants

- [GLKViewDrawableColorFormat](glkviewdrawablecolorformat.md): The format of the color renderbuffer.
- [GLKViewDrawableDepthFormat](glkviewdrawabledepthformat.md): The format of the depth renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.
- [GLKViewDrawableMultisample](glkviewdrawablemultisample.md): The format of the multisampling buffer.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### OpenGL ES View Rendering

- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.

# GLKView (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A default implementation for views that draw their content using OpenGL ES.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKView : UIView
```

<a id="overview"></a>

## Overview

The [GLKView](glkview.md) class simplifies the effort required to create an OpenGL ES application by  directly managing a framebuffer object on your behalf; your application simply needs to draw into the framebuffer when the contents need to be updated.

To use this class in your application, create a new [GLKView](glkview.md) object and provide it an OpenGL ES context. Then, modify the view’s [drawableColorFormat](glkview/drawablecolorformat.md), [drawableDepthFormat](glkview/drawabledepthformat.md), [drawableStencilFormat](glkview/drawablestencilformat.md), and [drawableMultisample](glkview/drawablemultisample.md) properties to configure the format of the drawable’s framebuffer object. After this, the view automatically creates or updates the framebuffer object whenever the view must be redrawn. A [GLKView](glkview.md) object uses the regular view drawing cycle for a [UIView](../uikit/uiview.md)object, calling its [drawRect:](../uikit/uiview/draw%28__%29.md) method whenever the contents of the view need to be updated. Before calling its `draw `method, the view makes its [EAGLContext](../opengles/eaglcontext.md) object the current OpenGL ES context and binds its framebuffer object to the OpenGL ES context as the target for rendering commands. Your application’s implementation of the `draw` method should call one or more OpenGL ES functions to render an image into the framebuffer object. Then, the view resolves any multisampling that you may have enabled and delivers the finished results.

> **Important**

>  Your drawing method should only modify the contents of the framebuffer object. Never attempt to read the pixel information from the underlying framebuffer object, modify or dispose of the framebuffer object, or read its other properties by calling OpenGL ES functions. Instead, rely on the properties and methods provided by the [GLKView](glkview.md) class.

The [GLKView](glkview.md) class can be used in conjunction with a [GLKViewController](glkviewcontroller.md) object to create an animation rendering loop that redraws the contents of the view at a specified frame rate.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Typically, there is no need to subclass the [GLKView](glkview.md) class. Instead, provide a delegate object to draw the view’s contents. See [GLKViewDelegate](glkviewdelegate.md).

## Topics

### Initializing the View

- [initWithFrame:context:](glkview/init%28frame_context_%29.md): Deprecated. Initializes a new view.

### Delegate

- [delegate](glkview/delegate.md): Deprecated. The view’s delegate.

### Configuring the Framebuffer Object

- [drawableColorFormat](glkview/drawablecolorformat.md): Deprecated. The format of the color renderbuffer.
- [drawableDepthFormat](glkview/drawabledepthformat.md): Deprecated. The format of the depth renderbuffer
- [drawableStencilFormat](glkview/drawablestencilformat.md): Deprecated. The format of the stencil renderbuffer.
- [drawableMultisample](glkview/drawablemultisample.md): Deprecated. The format of the multisampling buffer.

### Read-only Framebuffer Properties

- [drawableHeight](glkview/drawableheight.md): Deprecated. The height, in pixels, of the underlying framebuffer object.
- [drawableWidth](glkview/drawablewidth.md): Deprecated. The width, in pixels, of the underlying framebuffer object.

### Drawing Your View’s Contents

- [context](glkview/context.md): Deprecated. The OpenGL ES context used when drawing the view’s contents.
- [bindDrawable](glkview/binddrawable%28%29.md): Deprecated. Binds the underlying framebuffer object to OpenGL ES.
- [enableSetNeedsDisplay](glkview/enablesetneedsdisplay.md): Deprecated. A Boolean value that indicates whether the view responds to messages that invalidate the view’s contents.
- [display](glkview/display%28%29.md): Deprecated. Redraws the view’s contents immediately.
- [snapshot](glkview/snapshot.md): Deprecated. Draws the contents of the view and returns them as a new image object.

### Deleting the View’s Underlying Framebuffer Object

- [deleteDrawable](glkview/deletedrawable%28%29.md): Deprecated. Deletes the drawable object associated with the view.

### Constants

- [GLKViewDrawableColorFormat](glkviewdrawablecolorformat.md): The format of the color renderbuffer.
- [GLKViewDrawableDepthFormat](glkviewdrawabledepthformat.md): The format of the depth renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.
- [GLKViewDrawableMultisample](glkviewdrawablemultisample.md): The format of the multisampling buffer.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### OpenGL ES View Rendering

- [GLKViewDelegate](glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkview.md) object.
- [GLKViewController](glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkviewcontroller.md) object.
