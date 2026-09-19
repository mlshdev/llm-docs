> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3943627-mach_vm_deferred_reclamation_buf

# mach_vm_deferred_reclamation_buffer_update_reclaimable_bytes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t mach_vm_deferred_reclamation_buffer_update_reclaimable_bytes(task_t target_task, mach_vm_size_t reclaimable_bytes);
```
