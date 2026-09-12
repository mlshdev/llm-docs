> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview](https://developer.apple.com/documentation/metalkit/mtkview)

# MTKView (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A specialized view that creates, configures, and displays Metal objects.

## Declaration

```swift
@MainActor class MTKView
```

<a id="overview"></a>

## Overview

The [MTKView](mtkview.md) class provides a default implementation of a Metal-aware view that you can use to render graphics using Metal and display them onscreen. When asked, the view provides a [MTLRenderPassDescriptor](../metal/mtlrenderpassdescriptor.md) object that points at a texture for you to render new contents into. Optionally, an [MTKView](mtkview.md) can create depth and stencil textures for you and any intermediate textures needed for antialiasing. The view uses a [CAMetalLayer](../quartzcore/cametallayer.md) to manage the Metal drawable objects.

The view requires a [MTLDevice](../metal/mtldevice.md) object to manage the Metal objects it creates for you. You must set the [device](mtkview/device.md) property and, optionally, modify the view’s drawable properties before drawing.

<a id="Configuring-the-Drawing-Behavior"></a>

### Configuring the Drawing Behavior

The MTKView class supports three drawing modes:

- Timed updates: The view redraws its contents based on an internal timer. In this case, which is the default behavior, both [isPaused](mtkview/ispaused.md) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) are set to [false](https://developer.apple.com/documentation/swift/false). Use this mode for games and other animated content that’s regularly updated.
- Draw notifications: The view redraws itself when something invalidates its contents, usually because of a call to [setNeedsDisplay()](../uikit/uiview/setneedsdisplay%28%29.md) or some other view-related behavior. In this case, set [isPaused](mtkview/ispaused.md) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) to [true](https://developer.apple.com/documentation/swift/true). Use this mode for apps with a more traditional workflow, where updates happen when data changes, but not on a regular timed interval.
- Explicit drawing: The view redraws its contents only when you explicitly call the [draw()](mtkview/draw%28%29.md) method. In this case, set [isPaused](mtkview/ispaused.md) to [true](https://developer.apple.com/documentation/swift/true) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) to [false](https://developer.apple.com/documentation/swift/false). Use this mode to create your own custom workflow.

<a id="Drawing-the-Views-Contents"></a>

### Drawing the View’s Contents

Regardless of drawing mode, when the view needs to update its contents, it calls the [draw(\_:)](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method when that method has been overridden by a subclass, or [draw(in:)](mtkviewdelegate/draw%28in_%29.md) on the view’s delegate if the subclass doesn’t override it. You should either subclass [MTKView](mtkview.md) or provide a delegate, but not both.

In your drawing method, you obtain a render pass descriptor from the view, render into it, and then present the associated drawable.

<a id="Obtaining-a-Drawable-from-a-MetalKit-View"></a>

### Obtaining a Drawable from a MetalKit View

Each [MTKView](mtkview.md) is backed by a [CAMetalLayer](../quartzcore/cametallayer.md). In your renderer, implement the [MTKViewDelegate](mtkviewdelegate.md) protocol to interact with a MetalKit view. Call the MetalKit view’s [currentRenderPassDescriptor](mtkview/currentrenderpassdescriptor.md) property to obtain a render pass descriptor configured for the current frame:

**Swift**

```swift
// BEGIN encoding your onscreen render pass.
// Obtain a render pass descriptor generated from the drawable's texture.
// (`currentRenderPassDescriptor` implicitly obtains the current drawable.)
// If there's a valid render pass descriptor, use it to render to the current drawable.
if let onscreenDescriptor = view.currentRenderPassDescriptor
```

**Objective-C**

```objc
// BEGIN encoding your onscreen render pass.
// Obtain a render pass descriptor generated from the drawable's texture.
// (`currentRenderPassDescriptor` implicitly obtains the current drawable.)
MTLRenderPassDescriptor* onscreenDescriptor = view.currentRenderPassDescriptor;
```

When you read this property, Core Animation implicitly obtains a drawable for the current frame and stores it in the [currentDrawable](mtkview/currentdrawable.md) property. It then configures a render pass descriptor to draw into that drawable, including any depth, stencil, and antialiasing textures as necessary. The view configures this render pass using the default store and load actions. You can adjust the descriptor further before using it to create a [MTLRenderCommandEncoder](../metal/mtlrendercommandencoder.md).

Obtain drawables as late as possible; preferably, immediately before encoding your onscreen render pass.

<a id="Registering-the-Drawables-Presentation"></a>

### Registering the Drawable’s Presentation

After rendering the contents, you must present the drawable to update the view’s contents. The most convenient way to present the content is to call the [present(\_:)](../metal/mtlcommandbuffer/present%28__%29.md) method on the command buffer. Then, call the [commit()](../metal/mtlcommandbuffer/commit%28%29.md) method to submit the command buffer to a GPU:

**Swift**

```swift
if let onscreenDescriptor = view.currentRenderPassDescriptor,
let onscreenCommandEncoder = onscreenCommandBuffer.makeRenderCommandEncoder(descriptor: onscreenDescriptor) {
    /* Set render state and resources.
       ...
     */
    /* Issue draw calls.
       ...
     */
    onscreenCommandEncoder.endEncoding()
    // END encoding your onscreen render pass.
    
    // Register the drawable's presentation.
    if let currentDrawable = view.currentDrawable {
        onscreenCommandBuffer.present(currentDrawable)
    }
}

// Finalize your onscreen CPU work and commit the command buffer to a GPU.
onscreenCommandBuffer.commit()
```

**Objective-C**

```objc
// If there's a valid render pass descriptor, use it to render to the current drawable.
if(onscreenDescriptor != nil) {
    id<MTLRenderCommandEncoder> onscreenCommandEncoder = [onscreenCommandBuffer renderCommandEncoderWithDescriptor:onscreenDescriptor];
    /* Set render state and resources.
       ...
     */
    /* Issue draw calls.
       ...
     */
    [onscreenCommandEncoder endEncoding];
    // END encoding your onscreen render pass.

    // Register the drawable's presentation.
    [onscreenCommandBuffer presentDrawable:view.currentDrawable];
}

// Finalize your onscreen CPU work and commit the command buffer to a GPU.
[onscreenCommandBuffer commit];
```

When a command queue schedules a command buffer for execution, the drawable tracks all render or write requests on itself in that command buffer. The operating system doesn’t present the drawable onscreen until the commands have finished executing. By asking the command buffer to present the drawable, you guarantee that presentation happens after the command queue has scheduled this command buffer. Don’t wait for the command buffer to finish executing before registering the drawable’s presentation.

> **Tip**

>  For better performance, only retrieve the render pass descriptor when you’re ready to render the contents, and hold onto it and the related drawable object as little as possible. Release it as soon as you finish with it. For more information, see [CAMetalLayer](../quartzcore/cametallayer.md).

## Topics

### Creating a View

- [init(coder:)](mtkview/init%28coder_%29.md): Initializes a view from data in a given unarchiver.
- [init(frame:device:)](mtkview/init%28frame_device_%29.md): Initializes a view with the specified frame rectangle and Metal device.

### Configuring the Delegate

- [delegate](mtkview/delegate.md): The view’s delegate.

### Configuring the Metal Device

- [device](mtkview/device.md): The device object the view uses to create its Metal objects.
- [preferredDevice](mtkview/preferreddevice.md): The device object that the system recommends using for this view.

### Configuring the Color Render Target

- [colorPixelFormat](mtkview/colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](mtkview/colorspace.md): The color space of the rendered content.
- [framebufferOnly](mtkview/framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](mtkview/drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](mtkview/preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](mtkview/autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](mtkview/clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

### Configuring the Render Target Properties

- [depthStencilPixelFormat](mtkview/depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](mtkview/depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](mtkview/depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](mtkview/cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](mtkview/clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.

### Configuring Multisampling

- [sampleCount](mtkview/samplecount.md): The sample count used to generate the [multisampleColorTexture](mtkview/multisamplecolortexture.md) object.
- [multisampleColorAttachmentTextureUsage](mtkview/multisamplecolorattachmenttextureusage.md): The texture usage characteristics that the view uses when creating multisample textures.

### Retrieving Render Target Information

- [currentRenderPassDescriptor](mtkview/currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](mtkview/currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](mtkview/depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](mtkview/depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](mtkview/multisamplecolortexture.md): The multisample color sample texture to render into.

### Configuring Drawing Behavior

- [preferredFramesPerSecond](mtkview/preferredframespersecond.md): The rate at which the view redraws its contents.
- [isPaused](mtkview/ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../uikit/uiview/setneedsdisplay%28%29.md).
- [draw()](mtkview/draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](mtkview/presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

### Releasing Memory

- [releaseDrawables()](mtkview/releasedrawables%28%29.md): Releases the [depthStencilTexture](mtkview/depthstenciltexture.md) and [multisampleColorTexture](mtkview/multisamplecolortexture.md) objects.

### Instance Properties

- [currentMTL4RenderPassDescriptor](mtkview/currentmtl4renderpassdescriptor.md)
- [residencySet](mtkview/residencyset.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
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
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
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

### View Management

- [MTKViewDelegate](mtkviewdelegate.md): Methods for responding to a MetalKit view’s drawing and resizing events.

# MTKView (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A specialized view that creates, configures, and displays Metal objects.

## Declaration

```objectivec
@interface MTKView : UIView
```

```objectivec
@interface MTKView : NSView
```

<a id="overview"></a>

## Overview

The [MTKView](mtkview.md) class provides a default implementation of a Metal-aware view that you can use to render graphics using Metal and display them onscreen. When asked, the view provides a [MTLRenderPassDescriptor](../metal/mtlrenderpassdescriptor.md) object that points at a texture for you to render new contents into. Optionally, an [MTKView](mtkview.md) can create depth and stencil textures for you and any intermediate textures needed for antialiasing. The view uses a [CAMetalLayer](../quartzcore/cametallayer.md) to manage the Metal drawable objects.

The view requires a [MTLDevice](../metal/mtldevice.md) object to manage the Metal objects it creates for you. You must set the [device](mtkview/device.md) property and, optionally, modify the view’s drawable properties before drawing.

<a id="Configuring-the-Drawing-Behavior"></a>

### Configuring the Drawing Behavior

The MTKView class supports three drawing modes:

- Timed updates: The view redraws its contents based on an internal timer. In this case, which is the default behavior, both [paused](mtkview/ispaused.md) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) are set to [false](https://developer.apple.com/documentation/swift/false). Use this mode for games and other animated content that’s regularly updated.
- Draw notifications: The view redraws itself when something invalidates its contents, usually because of a call to [setNeedsDisplay](../uikit/uiview/setneedsdisplay%28%29.md) or some other view-related behavior. In this case, set [paused](mtkview/ispaused.md) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) to [true](https://developer.apple.com/documentation/swift/true). Use this mode for apps with a more traditional workflow, where updates happen when data changes, but not on a regular timed interval.
- Explicit drawing: The view redraws its contents only when you explicitly call the [draw](mtkview/draw%28%29.md) method. In this case, set [paused](mtkview/ispaused.md) to [true](https://developer.apple.com/documentation/swift/true) and [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md) to [false](https://developer.apple.com/documentation/swift/false). Use this mode to create your own custom workflow.

<a id="Drawing-the-Views-Contents"></a>

### Drawing the View’s Contents

Regardless of drawing mode, when the view needs to update its contents, it calls the [drawRect:](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method when that method has been overridden by a subclass, or [drawInMTKView:](mtkviewdelegate/draw%28in_%29.md) on the view’s delegate if the subclass doesn’t override it. You should either subclass [MTKView](mtkview.md) or provide a delegate, but not both.

In your drawing method, you obtain a render pass descriptor from the view, render into it, and then present the associated drawable.

<a id="Obtaining-a-Drawable-from-a-MetalKit-View"></a>

### Obtaining a Drawable from a MetalKit View

Each [MTKView](mtkview.md) is backed by a [CAMetalLayer](../quartzcore/cametallayer.md). In your renderer, implement the [MTKViewDelegate](mtkviewdelegate.md) protocol to interact with a MetalKit view. Call the MetalKit view’s [currentRenderPassDescriptor](mtkview/currentrenderpassdescriptor.md) property to obtain a render pass descriptor configured for the current frame:

**Swift**

```swift
// BEGIN encoding your onscreen render pass.
// Obtain a render pass descriptor generated from the drawable's texture.
// (`currentRenderPassDescriptor` implicitly obtains the current drawable.)
// If there's a valid render pass descriptor, use it to render to the current drawable.
if let onscreenDescriptor = view.currentRenderPassDescriptor
```

**Objective-C**

```objc
// BEGIN encoding your onscreen render pass.
// Obtain a render pass descriptor generated from the drawable's texture.
// (`currentRenderPassDescriptor` implicitly obtains the current drawable.)
MTLRenderPassDescriptor* onscreenDescriptor = view.currentRenderPassDescriptor;
```

When you read this property, Core Animation implicitly obtains a drawable for the current frame and stores it in the [currentDrawable](mtkview/currentdrawable.md) property. It then configures a render pass descriptor to draw into that drawable, including any depth, stencil, and antialiasing textures as necessary. The view configures this render pass using the default store and load actions. You can adjust the descriptor further before using it to create a [MTLRenderCommandEncoder](../metal/mtlrendercommandencoder.md).

Obtain drawables as late as possible; preferably, immediately before encoding your onscreen render pass.

<a id="Registering-the-Drawables-Presentation"></a>

### Registering the Drawable’s Presentation

After rendering the contents, you must present the drawable to update the view’s contents. The most convenient way to present the content is to call the [presentDrawable:](../metal/mtlcommandbuffer/present%28__%29.md) method on the command buffer. Then, call the [commit](../metal/mtlcommandbuffer/commit%28%29.md) method to submit the command buffer to a GPU:

**Swift**

```swift
if let onscreenDescriptor = view.currentRenderPassDescriptor,
let onscreenCommandEncoder = onscreenCommandBuffer.makeRenderCommandEncoder(descriptor: onscreenDescriptor) {
    /* Set render state and resources.
       ...
     */
    /* Issue draw calls.
       ...
     */
    onscreenCommandEncoder.endEncoding()
    // END encoding your onscreen render pass.
    
    // Register the drawable's presentation.
    if let currentDrawable = view.currentDrawable {
        onscreenCommandBuffer.present(currentDrawable)
    }
}

// Finalize your onscreen CPU work and commit the command buffer to a GPU.
onscreenCommandBuffer.commit()
```

**Objective-C**

```objc
// If there's a valid render pass descriptor, use it to render to the current drawable.
if(onscreenDescriptor != nil) {
    id<MTLRenderCommandEncoder> onscreenCommandEncoder = [onscreenCommandBuffer renderCommandEncoderWithDescriptor:onscreenDescriptor];
    /* Set render state and resources.
       ...
     */
    /* Issue draw calls.
       ...
     */
    [onscreenCommandEncoder endEncoding];
    // END encoding your onscreen render pass.

    // Register the drawable's presentation.
    [onscreenCommandBuffer presentDrawable:view.currentDrawable];
}

// Finalize your onscreen CPU work and commit the command buffer to a GPU.
[onscreenCommandBuffer commit];
```

When a command queue schedules a command buffer for execution, the drawable tracks all render or write requests on itself in that command buffer. The operating system doesn’t present the drawable onscreen until the commands have finished executing. By asking the command buffer to present the drawable, you guarantee that presentation happens after the command queue has scheduled this command buffer. Don’t wait for the command buffer to finish executing before registering the drawable’s presentation.

> **Tip**

>  For better performance, only retrieve the render pass descriptor when you’re ready to render the contents, and hold onto it and the related drawable object as little as possible. Release it as soon as you finish with it. For more information, see [CAMetalLayer](../quartzcore/cametallayer.md).

## Topics

### Creating a View

- [initWithCoder:](mtkview/init%28coder_%29.md): Initializes a view from data in a given unarchiver.
- [initWithFrame:device:](mtkview/init%28frame_device_%29.md): Initializes a view with the specified frame rectangle and Metal device.

### Configuring the Delegate

- [delegate](mtkview/delegate.md): The view’s delegate.

### Configuring the Metal Device

- [device](mtkview/device.md): The device object the view uses to create its Metal objects.
- [preferredDevice](mtkview/preferreddevice.md): The device object that the system recommends using for this view.

### Configuring the Color Render Target

- [colorPixelFormat](mtkview/colorpixelformat.md): The color pixel format for the current drawable’s texture.
- [colorspace](mtkview/colorspace.md): The color space of the rendered content.
- [framebufferOnly](mtkview/framebufferonly.md): A Boolean value that determines whether the drawable’s textures are used only for rendering.
- [drawableSize](mtkview/drawablesize.md): The current size of drawable textures.
- [preferredDrawableSize](mtkview/preferreddrawablesize.md): The recommended dimensions of the drawable.
- [autoResizeDrawable](mtkview/autoresizedrawable.md): A Boolean value that controls whether to resize the drawable as the view changes size.
- [clearColor](mtkview/clearcolor.md): The color to use to clear the color target when creating a render pass descriptor.

### Configuring the Render Target Properties

- [depthStencilPixelFormat](mtkview/depthstencilpixelformat.md): The format used to generate the [depthStencilTexture](mtkview/depthstenciltexture.md) object.
- [depthStencilAttachmentTextureUsage](mtkview/depthstencilattachmenttextureusage.md): The texture usage characteristics that the view uses when creating the depth and stencil textures.
- [clearDepth](mtkview/cleardepth.md): The depth value to use to clear the depth target when creating a render pass descriptor.
- [clearStencil](mtkview/clearstencil.md): The stencil value to use to clear the stencil target when creating a render pass descriptor.

### Configuring Multisampling

- [sampleCount](mtkview/samplecount.md): The sample count used to generate the [multisampleColorTexture](mtkview/multisamplecolortexture.md) object.
- [multisampleColorAttachmentTextureUsage](mtkview/multisamplecolorattachmenttextureusage.md): The texture usage characteristics that the view uses when creating multisample textures.

### Retrieving Render Target Information

- [currentRenderPassDescriptor](mtkview/currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [currentDrawable](mtkview/currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](mtkview/depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](mtkview/depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](mtkview/multisamplecolortexture.md): The multisample color sample texture to render into.

### Configuring Drawing Behavior

- [preferredFramesPerSecond](mtkview/preferredframespersecond.md): The rate at which the view redraws its contents.
- [paused](mtkview/ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](mtkview/enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay](../uikit/uiview/setneedsdisplay%28%29.md).
- [draw](mtkview/draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](mtkview/presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

### Releasing Memory

- [releaseDrawables](mtkview/releasedrawables%28%29.md): Releases the [depthStencilTexture](mtkview/depthstenciltexture.md) and [multisampleColorTexture](mtkview/multisamplecolortexture.md) objects.

### Instance Properties

- [currentMTL4RenderPassDescriptor](mtkview/currentmtl4renderpassdescriptor.md)
- [residencySet](mtkview/residencyset.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [NSCoding](../foundation/nscoding.md)

## See Also

### View Management

- [MTKViewDelegate](mtkviewdelegate.md): Methods for responding to a MetalKit view’s drawing and resizing events.
