> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_t](https://developer.apple.com/documentation/compositorservices/cp_drawable_t)

# cp_drawable_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides the textures and information you need to draw a frame of content.

## Declaration

```objectivec
typedef struct cp_drawable * cp_drawable_t;
```

<a id="discussion"></a>

## Discussion

When you draw a frame of content, the frame’s  [cp_drawable_t](cp_drawable_t.md) type provides the actual textures and rendering information you need. Do as much work as possible in advance to prepare for rendering, and retrieve the [cp_drawable_t](cp_drawable_t.md) only when you’re ready to start encoding commands into your Metal command buffers. The system recycles frames and their drawables for efficiency, so if you retrieve the drawable too early, it might not be ready to use.

Use the drawable’s [LayerRenderer.Drawable.View](layerrenderer/drawable/view.md) instances to determine where to draw your content in the provided textures. After you finish encoding your content, call [cp_drawable_encode_present](layerrenderer/drawable/encodepresent%28commandbuffer_%29.md) to add a presentation notification to your command buffer. This command tells Compositor Services when to display the frame, and is essential for displaying your frame on time.

## Topics

### Getting the views

- [cp_view_t](cp_view_t.md): A type that provides information on how to render content into the frame’s textures.

### Enqueueing a command buffer

- [cp_drawable_encode_present](layerrenderer/drawable/encodepresent%28commandbuffer_%29.md): Encodes a notification event to the specified command buffer to present the drawable’s content onscreen.

### Getting the projection matrix

- [cp_axis_direction_convention](axisdirectionconvention.md): Constants that indicate the axis and direction to use for a perspective projection matrix.

### Accessing pixel depth information

- [cp_drawable_get_depth_range](layerrenderer/drawable/depthrange.md): The distances to the far and near clipping planes from the person viewing the content, in meters.

### Managing the state machine

- [cp_drawable_get_state](layerrenderer/drawable/state-swift.property.md): The current operational state of a drawable instance.
- [cp_drawable_state](layerrenderer/drawable/state-swift.enum.md): The state of ownership for the drawable.

### Synchronizing the drawing operation

- [cp_drawable_get_frame_timing](layerrenderer/drawable/frametiming.md): The timing information for the drawable’s frame.
- [cp_drawable_get_presentation_frame_index](layerrenderer/drawable/presentationframeindex.md): The sequential index of a drawable’s frame.
