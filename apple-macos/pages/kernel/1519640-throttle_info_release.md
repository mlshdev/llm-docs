> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1519640-throttle_info_release](https://developer.apple.com/documentation/kernel/1519640-throttle_info_release)

# throttle_info_release

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
void throttle_info_release(void *throttle_info);
```

## See Also

### throttle

- [throttle_info_create](1519622-throttle_info_create.md)
- [throttle_info_disable_throttle](1519606-throttle_info_disable_throttle.md)
- [throttle_info_io_will_be_throttled](1519647-throttle_info_io_will_be_throttl.md)
- [throttle_info_mount_ref](1519621-throttle_info_mount_ref.md)
- [throttle_info_mount_rel](1519613-throttle_info_mount_rel.md)
- [throttle_info_ref_by_mask](1519602-throttle_info_ref_by_mask.md)
- [throttle_info_rel_by_mask](1519618-throttle_info_rel_by_mask.md)
- [throttle_info_update](1519620-throttle_info_update.md)
- [throttle_info_update_by_mask](1519642-throttle_info_update_by_mask.md)
- [throttle_lowpri_io](1519650-throttle_lowpri_io.md)
- [throttle_lowpri_io_will_be_throttled](3192010-throttle_lowpri_io_will_be_throt.md)
- [throttle_set_thread_io_policy](1519605-throttle_set_thread_io_policy.md)
