> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4540746-mach_vm_deferred_reclamation_buf

# mach_vm_deferred_reclamation_buffer_allocate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
kern_return_t mach_vm_deferred_reclamation_buffer_allocate(task_t target_task, mach_vm_address_t *address, uint32_t len, uint32_t max_len);
```
