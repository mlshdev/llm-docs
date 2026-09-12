> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_barcode_anchor_get_origin_from_anchor_transform_with_correction](https://developer.apple.com/documentation/arkit/ar_barcode_anchor_get_origin_from_anchor_transform_with_correction)

# ar_barcode_anchor_get_origin_from_anchor_transform_with_correction

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 27.0+

Get the transform from an anchor to the origin coordinate system with a transform correction option.

## Declaration

```objectivec
extern simd_float4x4 ar_barcode_anchor_get_origin_from_anchor_transform_with_correction(ar_barcode_anchor_t anchor, ar_transform_correction_t transform_correction);
```

## Parameters

- `anchor`: The anchor.
- `transform_correction`: The transform correction to apply.

<a id="return-value"></a>

## Return Value

The origin from anchor transform with the specified correction.

## See Also

### Barcode functions

- [ar_barcode_anchor_copy_payload_data](ar_barcode_anchor_copy_payload_data.md)
- [ar_barcode_anchor_get_extent](ar_barcode_anchor_get_extent.md)
- [ar_barcode_anchor_get_identifier](ar_barcode_anchor_get_identifier.md)
- [ar_barcode_anchor_get_origin_from_anchor_transform](ar_barcode_anchor_get_origin_from_anchor_transform.md)
- [ar_barcode_anchor_get_payload_string_value](ar_barcode_anchor_get_payload_string_value.md)
- [ar_barcode_anchor_get_symbology](ar_barcode_anchor_get_symbology.md)
- [ar_barcode_anchor_get_timestamp](ar_barcode_anchor_get_timestamp.md)
- [ar_barcode_anchors_enumerate_anchors](ar_barcode_anchors_enumerate_anchors.md)
- [ar_barcode_anchors_enumerate_anchors_f](ar_barcode_anchors_enumerate_anchors_f.md)
- [ar_barcode_anchors_get_count](ar_barcode_anchors_get_count.md)
- [ar_barcode_detection_configuration_create](ar_barcode_detection_configuration_create.md)
- [ar_barcode_detection_configuration_set_detection_symbology](ar_barcode_detection_configuration_set_detection_symbology.md)
- [ar_barcode_detection_provider_create](ar_barcode_detection_provider_create.md)
- [ar_barcode_detection_provider_get_required_authorization_type](ar_barcode_detection_provider_get_required_authorization_type.md)
- [ar_barcode_detection_provider_is_supported](ar_barcode_detection_provider_is_supported.md)
