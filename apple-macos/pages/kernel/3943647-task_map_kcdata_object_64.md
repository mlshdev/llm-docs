> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3943647-task_map_kcdata_object_64](https://developer.apple.com/documentation/kernel/3943647-task_map_kcdata_object_64)

# task_map_kcdata_object_64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
kern_return_t task_map_kcdata_object_64(task_t task, kcdata_object_t kcdata_object, mach_vm_address_t *kcd_addr_begin, mach_vm_size_t *kcd_size);
```
