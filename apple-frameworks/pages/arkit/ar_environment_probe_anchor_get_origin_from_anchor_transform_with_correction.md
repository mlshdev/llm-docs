> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_environment_probe_anchor_get_origin_from_anchor_transform_with_correction](https://developer.apple.com/documentation/arkit/ar_environment_probe_anchor_get_origin_from_anchor_transform_with_correction)

# ar_environment_probe_anchor_get_origin_from_anchor_transform_with_correction

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 27.0+

Get the transform from an anchor to the origin coordinate system.

## Declaration

```objectivec
extern simd_float4x4 ar_environment_probe_anchor_get_origin_from_anchor_transform_with_correction(ar_environment_probe_anchor_t anchor, ar_transform_correction_t transform_correction);
```

## Parameters

- `anchor`: The anchor.
- `transform_correction`: The transform correction that should be applied.

<a id="return-value"></a>

## Return Value

The origin from anchor transform.

## See Also

### Environment probe functions

- [ar_environment_probe_anchor_get_environment_texture](ar_environment_probe_anchor_get_environment_texture.md)
- [ar_environment_probe_anchor_get_identifier](ar_environment_probe_anchor_get_identifier.md)
- [ar_environment_probe_anchor_get_origin_from_anchor_transform](ar_environment_probe_anchor_get_origin_from_anchor_transform.md)
- [ar_environment_probe_anchor_get_timestamp](ar_environment_probe_anchor_get_timestamp.md)
- [ar_environment_probe_anchor_is_equal_to_environment_probe_anchor](ar_environment_probe_anchor_is_equal_to_environment_probe_anchor.md)
- [ar_environment_probe_anchors_enumerate_anchors](ar_environment_probe_anchors_enumerate_anchors.md)
- [ar_environment_probe_anchors_enumerate_anchors_f](ar_environment_probe_anchors_enumerate_anchors_f.md)
- [ar_environment_probe_anchors_get_count](ar_environment_probe_anchors_get_count.md)
