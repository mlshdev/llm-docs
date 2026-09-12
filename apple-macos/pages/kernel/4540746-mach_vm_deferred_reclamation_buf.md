> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4540746-mach_vm_deferred_reclamation_buf](https://developer.apple.com/documentation/kernel/4540746-mach_vm_deferred_reclamation_buf)

# mach_vm_deferred_reclamation_buffer_allocate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
kern_return_t mach_vm_deferred_reclamation_buffer_allocate(task_t target_task, mach_vm_address_t *address, uint32_t len, uint32_t max_len);
```
