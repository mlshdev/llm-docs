> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable)

# LayerRenderer.Drawable

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides the textures and information you need to draw a frame of content.

## Declaration

```swift
struct Drawable
```

## Mentioned In

- [Drawing fully immersive content using Metal](../drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

When you draw a frame of content, the frame’s  [LayerRenderer.Drawable](drawable.md) type provides the actual textures and rendering information you need. Do as much work as possible in advance to prepare for rendering, and retrieve the [LayerRenderer.Drawable](drawable.md) only when you’re ready to start encoding commands into your Metal command buffers. The system recycles frames and their drawables for efficiency, so if you retrieve the drawable too early, it might not be ready to use.

Use the drawable’s [LayerRenderer.Drawable.View](drawable/view.md) instances to determine where to draw your content in the provided textures. After you finish encoding your content, call [encodePresent(commandBuffer:)](drawable/encodepresent%28commandbuffer_%29.md) to add a presentation notification to your command buffer. This command tells Compositor Services when to display the frame, and is essential for displaying your frame on time.

## Topics

### Getting the views

- [views](drawable/views.md): An array of viewports that tell you how to draw to the drawable’s textures
- [LayerRenderer.Drawable.View](drawable/view.md): A type that provides information on how to render content into the frame’s textures.

### Accessing the device orientation

- [deviceAnchor](drawable/deviceanchor.md): The device position and orientation you used to render the frame.

### Getting the render textures

- [colorTextures](drawable/colortextures.md): An array of color textures to use to render the current frame.
- [depthTextures](drawable/depthtextures.md): An array of depth textures to use to render the current frame.

### Enqueueing a command buffer

- [encodePresent(commandBuffer:)](drawable/encodepresent%28commandbuffer_%29.md): Encodes a notification event to the specified command buffer to present the drawable’s content onscreen.

### Getting the rasterization rate map

- [rasterizationRateMaps](drawable/rasterizationratemaps.md): The rasterization rate maps to use when rendering the frame.
- [flippedRasterizationRateMaps](drawable/flippedrasterizationratemaps.md): The rasterization rate maps that are flipped around the y-axis.

### Getting the projection matrix

- [AxisDirectionConvention](../axisdirectionconvention.md): Constants that indicate the axis and direction to use for a perspective projection matrix.

### Accessing pixel depth information

- [depthRange](drawable/depthrange.md): The distances to the far and near clipping planes from the person viewing the content, in meters.

### Managing the state machine

- [state](drawable/state-swift.property.md): The current operational state of a drawable instance.
- [LayerRenderer.Drawable.State](drawable/state-swift.enum.md): The state of ownership for the drawable.

### Synchronizing the drawing operation

- [frameTiming](drawable/frametiming.md): The timing information for the drawable’s frame.
- [presentationFrameIndex](drawable/presentationframeindex.md): The sequential index of a drawable’s frame.

### Retrieving the target

- [target](drawable/target-swift.property.md): Returns a value that indicates the target of the drawable type.
- [LayerRenderer.Drawable.Target](drawable/target-swift.enum.md): The target where the drawable will be displayed/used.

### Creating a drawable

- [init()](drawable/init%28%29.md): Creates an uninitialized drawable.

### Adding a render context

- [LayerRenderer.Drawable.RenderContext](drawable/rendercontext.md): An object the compositer uses for rendering all effects associated with a layer renderer drawable.
- [addRenderContext(commandBuffer:)](drawable/addrendercontext%28commandbuffer_%29.md): Adds and returns a render context to a `LayerRenderer.Drawable` providing a metal command buffer.
- [addRenderContext()](drawable/addrendercontext%28%29.md): Adds and returns a render context to a `LayerRenderer.Drawable` that draws any content required by the compositor.

### Structures

- [LayerRenderer.Drawable.TrackingArea](drawable/trackingarea.md)

### Instance Properties

- [isContentCaptureProtected](drawable/iscontentcaptureprotected.md): Returns whether content capture is protected and it is safe to draw content that should be protected from capture.
- [trackingAreasTextures](drawable/trackingareastextures.md): Use the returned texture in your render pipeline to store the tracking areas ID used for hover effects and indirect gestures. The layer’s texture topology determines the layout and content for each texture. The drawable’s views contain information about how those views map to the textures.

### Instance Methods

- [addTrackingArea(identifier:)](drawable/addtrackingarea%28identifier_%29.md): Returns a tracking area which is create on the drawable’s list of tracking areas.
- [computeProjection(convention:viewIndex:)](drawable/computeprojection%28convention_viewindex_%29.md)
- [encodePresent()](drawable/encodepresent%28%29.md): Encodes a notification event to the specified command buffer to present the drawable’s content onscreen.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Drawing environment

- [LayerRenderer.Drawable.View](drawable/view.md): A type that provides information on how to render content into the frame’s textures.
