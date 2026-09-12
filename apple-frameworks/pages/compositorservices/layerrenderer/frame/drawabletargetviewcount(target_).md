> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/drawabletargetviewcount(target:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/drawabletargetviewcount(target:))

# drawableTargetViewCount(target:) (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of view in the drawable target.

## Declaration

```swift
func drawableTargetViewCount(target drawable_target: LayerRenderer.Drawable.Target) -> Int
```

## Parameters

- `drawable_target`: Whether this is intended for `built_in` or `recorder`drawable

<a id="return-value"></a>

## Return Value

The number of views available for drawing. For example, a return value of `2` indicates there are two views for this target drawable in this frame. value of `0` indicates there is no view available for this target drawable in this frame.

<a id="discussion"></a>

## Discussion

Use the returned value as the maximum number of views to retrieve from the [cp_frame_binocular_frustum_matrix_for_drawable_target](../../cp_frame_binocular_frustum_matrix_for_drawable_target.md) or [cp_frame_monocular_frustum_matrix_for_drawable_target](../../cp_frame_monocular_frustum_matrix_for_drawable_target.md) functions.

# cp_frame_get_drawable_target_view_count (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of view in the drawable target.

## Declaration

```objectivec
size_t cp_frame_get_drawable_target_view_count(cp_frame_t frame, cp_drawable_target drawable_target);
```

## Parameters

- `frame`: Frame: The frame you finished preparing.
- `drawable_target`: Whether this is intended for `built_in` or `recorder`drawable

<a id="return-value"></a>

## Return Value

The number of views available for drawing. For example, a return value of `2` indicates there are two views for this target drawable in this frame. value of `0` indicates there is no view available for this target drawable in this frame.

<a id="discussion"></a>

## Discussion

Use the returned value as the maximum number of views to retrieve from the [cp_frame_binocular_frustum_matrix_for_drawable_target](../../cp_frame_binocular_frustum_matrix_for_drawable_target.md) or [cp_frame_monocular_frustum_matrix_for_drawable_target](../../cp_frame_monocular_frustum_matrix_for_drawable_target.md) functions.
