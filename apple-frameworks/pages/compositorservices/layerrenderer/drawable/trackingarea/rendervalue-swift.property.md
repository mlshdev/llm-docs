> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingarea/rendervalue-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingarea/rendervalue-swift.property)

# renderValue (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the render value for the tracking area.

## Declaration

```swift
var renderValue: LayerRenderer.Drawable.TrackingArea.RenderValue { get }
```

<a id="discussion"></a>

## Discussion

Use the returned value in the render pass of [cp_drawable_get_tracking_areas_texture](../../../cp_drawable_get_tracking_areas_texture.md) for the pixel value of the tracking area identifier.

# cp_tracking_area_get_render_value (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the render value for the tracking area.

## Declaration

```objectivec
cp_tracking_area_render_value cp_tracking_area_get_render_value(cp_tracking_area_t tracking_area);
```

## Parameters

- `tracking_area`: The tracking area for a frame.

<a id="return-value"></a>

## Return Value

The render value for the tracking area for this frame. This value is what should be used in this frames render pass to identify the tracking area of given identifier.

<a id="discussion"></a>

## Discussion

Use the returned value in the render pass of [cp_drawable_get_tracking_areas_texture](../../../cp_drawable_get_tracking_areas_texture.md) for the pixel value of the tracking area identifier.
