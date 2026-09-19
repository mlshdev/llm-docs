> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4360032-thread_adopt_exception_handler

# thread_adopt_exception_handler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
kern_return_t thread_adopt_exception_handler(thread_t thread, mach_port_t exc_port, exception_mask_t exc_mask, exception_behavior_t behavior_mask, thread_state_flavor_t flavor_mask);
```
