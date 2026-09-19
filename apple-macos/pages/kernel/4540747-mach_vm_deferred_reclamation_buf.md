> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4540747-mach_vm_deferred_reclamation_buf

# mach_vm_deferred_reclamation_buffer_flush

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
kern_return_t mach_vm_deferred_reclamation_buffer_flush(task_t target_task, uint32_t num_entries_to_reclaim);
```
