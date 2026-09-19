> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/ar_image_anchor_get_identifier

# ar_image_anchor_get_identifier

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 2.0+

## Declaration

```objectivec
extern void ar_image_anchor_get_identifier(ar_image_anchor_t anchor, uuid_t out_identifier);
```

## See Also

### Image anchor functions

- [ar_image_anchor_get_origin_from_anchor_transform](ar_image_anchor_get_origin_from_anchor_transform.md)
- [ar_image_anchor_get_timestamp](ar_image_anchor_get_timestamp.md)
- [ar_image_anchor_is_equal_to_image_anchor](ar_image_anchor_is_equal_to_image_anchor.md)
- [ar_image_anchor_is_tracked](ar_image_anchor_is_tracked.md)
