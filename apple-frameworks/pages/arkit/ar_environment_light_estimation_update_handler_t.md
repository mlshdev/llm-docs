> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_environment_light_estimation_update_handler_t](https://developer.apple.com/documentation/arkit/ar_environment_light_estimation_update_handler_t)

# ar_environment_light_estimation_update_handler_t

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** visionOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_ar_environment_probe_anchors> *, NSObject<OS_ar_environment_probe_anchors> *, NSObject<OS_ar_environment_probe_anchors> *) ar_environment_light_estimation_update_handler_t;
```

## See Also

### Environment light estimation data types

- [ar_environment_light_estimation_configuration_t](ar_environment_light_estimation_configuration_t.md)
- [ar_environment_light_estimation_provider_t](ar_environment_light_estimation_provider_t.md)
- [ar_environment_light_estimation_update_handler_function_t](ar_environment_light_estimation_update_handler_function_t.md)
- [ar_environment_probe_anchor_t](ar_environment_probe_anchor_t.md)
- [ar_environment_probe_anchors_enumerator_function_t](ar_environment_probe_anchors_enumerator_function_t.md)
- [ar_environment_probe_anchors_enumerator_t](ar_environment_probe_anchors_enumerator_t.md)
- [ar_environment_probe_anchors_t](ar_environment_probe_anchors_t.md)
- [ar_environment_probe_anchor_get_camera_scale_reference](ar_environment_probe_anchor_get_camera_scale_reference.md)
