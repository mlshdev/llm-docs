> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3727995-task_dyld_process_info_notify_de

# task_dyld_process_info_notify_deregister

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
kern_return_t task_dyld_process_info_notify_deregister(task_read_t target_task, mach_port_name_t notify);
```
