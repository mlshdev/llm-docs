> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4110482-kernel_mach_msg_send_with_builde

# kernel_mach_msg_send_with_builder

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.1+

## Declaration

```objectivec
mach_msg_return_t kernel_mach_msg_send_with_builder(mach_msg_size_t descriptor_count, mach_msg_size_t payload_size, void (^builder)(mach_msg_header_t *header, mach_msg_descriptor_t *descs, void *payload));
```
