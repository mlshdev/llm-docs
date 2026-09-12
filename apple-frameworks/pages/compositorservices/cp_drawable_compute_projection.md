> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_compute_projection](https://developer.apple.com/documentation/compositorservices/cp_drawable_compute_projection)

# cp_drawable_compute_projection

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 2.0+

## Declaration

```objectivec
simd_float4x4 cp_drawable_compute_projection(cp_drawable_t drawable, cp_axis_direction_convention normalized_device_coordinates_convension, size_t view_index);
```

## See Also

### Functions

- [cp_frame_binocular_frustum_matrix](cp_frame_binocular_frustum_matrix.md): Deprecated.
- [cp_frame_monocular_frustum_matrix](cp_frame_monocular_frustum_matrix.md): Deprecated.
- [cp_frame_timing_get_trackable_anchor_time](cp_frame_timing_get_trackable_anchor_time.md)
