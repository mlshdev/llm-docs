> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4360028-task_register_hardened_exception

# task_register_hardened_exception_handler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
kern_return_t task_register_hardened_exception_handler(task_t task, uint32_t signed_pc_key, exception_mask_t exceptions_allowed, exception_behavior_t behaviors_allowed, thread_state_flavor_t flavors_allowed, mach_port_t new_exception_port);
```
