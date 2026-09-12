> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585381-vm_allocate](https://developer.apple.com/documentation/kernel/1585381-vm_allocate)

# vm_allocate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t vm_allocate(vm_map_t target_task, vm_address_t *address, vm_size_t size, int flags);
```

## See Also

### Creation and Destruction

- [vm_allocate_cpm](1588863-vm_allocate_cpm.md)
- [vm_deallocate](1585284-vm_deallocate.md)
- [vm_copy](1585277-vm_copy.md)
- [mach_vm_copy](1402342-mach_vm_copy.md)
