> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_tracking_area_add_automatic_hover_effect](https://developer.apple.com/documentation/compositorservices/cp_tracking_area_add_automatic_hover_effect)

# cp_tracking_area_add_automatic_hover_effect

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the hover effect opaque object for the tracking area for this frame.

## Declaration

```objectivec
cp_hover_effect_tcp_tracking_area_add_automatic_hover_effect(cp_tracking_area_t tracking_area);
```

## Parameters

- `tracking_area`: The tracking area for a frame.

<a id="return-value"></a>

## Return Value

The hover effect for the tracking area.

<a id="discussion"></a>

## Discussion

The hover effect contains information used to render the hover effect using the tracking area textures and gaze once application render pass has completed. Can only create 1 hover effect per-tracking area, to destroy and disable the hover effect see `cp_hover_effect_destroy`
