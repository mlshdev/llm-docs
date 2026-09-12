> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_object_tracking_update_handler_t](https://developer.apple.com/documentation/arkit/ar_object_tracking_update_handler_t)

# ar_object_tracking_update_handler_t

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** visionOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_ar_object_anchors> *, NSObject<OS_ar_object_anchors> *, NSObject<OS_ar_object_anchors> *) ar_object_tracking_update_handler_t;
```

## See Also

### Object tracking data types

- [ar_object_tracking_configuration_t](ar_object_tracking_configuration_t.md)
- [ar_object_tracking_provider_t](ar_object_tracking_provider_t.md)
- [ar_object_tracking_update_handler_function_t](ar_object_tracking_update_handler_function_t.md)
