> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1402342-mach_vm_copy](https://developer.apple.com/documentation/kernel/1402342-mach_vm_copy)

# mach_vm_copy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
kern_return_t mach_vm_copy(vm_map_t target_task, mach_vm_address_t source_address, mach_vm_size_t size, mach_vm_address_t dest_address);
```

## See Also

### Creation and Destruction

- [vm_allocate](1585381-vm_allocate.md)
- [vm_allocate_cpm](1588863-vm_allocate_cpm.md)
- [vm_deallocate](1585284-vm_deallocate.md)
- [vm_copy](1585277-vm_copy.md)
