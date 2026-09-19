> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/ar_device_anchor_get_tracking_state

# ar_device_anchor_get_tracking_state

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 2.0+

Gets the tracking state of the device anchor.

## Declaration

```objectivec
extern ar_device_anchor_tracking_state_t ar_device_anchor_get_tracking_state(ar_device_anchor_t anchor);
```

## Parameters

- `anchor`: The anchor.

<a id="return-value"></a>

## Return Value

The tracking state of this anchor.

## See Also

### Device anchor functions

- [ar_device_anchor_get_identifier](ar_device_anchor_get_identifier.md)
- [ar_device_anchor_get_origin_from_anchor_transform](ar_device_anchor_get_origin_from_anchor_transform.md)
- [ar_device_anchor_get_timestamp](ar_device_anchor_get_timestamp.md)
- [ar_device_anchor_is_tracked](ar_device_anchor_is_tracked.md)
- [ar_device_anchor_get_origin_from_anchor_transform_with_correction](ar_device_anchor_get_origin_from_anchor_transform_with_correction.md): Get the transform from an anchor to the origin coordinate system.
