> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_frame_binocular_frustum_matrix](https://developer.apple.com/documentation/compositorservices/cp_frame_binocular_frustum_matrix)

# cp_frame_binocular_frustum_matrix

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS · visionOS 2.0+ (deprecated in 26.0)

## Declaration

```objectivec
simd_float4x4 cp_frame_binocular_frustum_matrix(cp_frame_t frame, cp_axis_direction_convention convention, simd_float4 increase_tangents, simd_float2 depth_range);
```

## See Also

### Functions

- [cp_drawable_compute_projection](cp_drawable_compute_projection.md)
- [cp_frame_monocular_frustum_matrix](cp_frame_monocular_frustum_matrix.md): Deprecated.
- [cp_frame_timing_get_trackable_anchor_time](cp_frame_timing_get_trackable_anchor_time.md)
