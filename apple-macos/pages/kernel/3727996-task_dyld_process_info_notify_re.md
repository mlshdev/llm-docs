> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3727996-task_dyld_process_info_notify_re

# task_dyld_process_info_notify_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
kern_return_t task_dyld_process_info_notify_register(task_read_t target_task, mach_port_t notify);
```
