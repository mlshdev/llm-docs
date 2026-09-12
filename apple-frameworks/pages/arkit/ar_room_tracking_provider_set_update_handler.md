> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_room_tracking_provider_set_update_handler](https://developer.apple.com/documentation/arkit/ar_room_tracking_provider_set_update_handler)

# ar_room_tracking_provider_set_update_handler

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 2.0+

## Declaration

```objectivec
extern void ar_room_tracking_provider_set_update_handler(ar_room_tracking_provider_t room_tracking_provider, dispatch_queue_t room_tracking_updates_queue, ar_room_tracking_update_handler_t room_tracking_update_handler);
```

## See Also

### Room tracking functions

- [ar_room_tracking_configuration_create](ar_room_tracking_configuration_create.md)
- [ar_room_tracking_provider_copy_all_room_anchors](ar_room_tracking_provider_copy_all_room_anchors.md)
- [ar_room_tracking_provider_copy_current_room_anchor](ar_room_tracking_provider_copy_current_room_anchor.md)
- [ar_room_tracking_provider_create](ar_room_tracking_provider_create.md)
- [ar_room_tracking_provider_get_required_authorization_type](ar_room_tracking_provider_get_required_authorization_type.md)
- [ar_room_tracking_provider_is_supported](ar_room_tracking_provider_is_supported.md)
- [ar_room_tracking_provider_set_update_handler_f](ar_room_tracking_provider_set_update_handler_f.md)
