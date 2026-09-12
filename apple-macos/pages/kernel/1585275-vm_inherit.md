> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585275-vm_inherit](https://developer.apple.com/documentation/kernel/1585275-vm_inherit)

# vm_inherit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t vm_inherit(vm_map_t target_task, vm_address_t address, vm_size_t size, vm_inherit_t new_inheritance);
```

## See Also

### Configuration

- [vm_protect](1585294-vm_protect.md)
- [vm_wire](1588985-vm_wire.md)
- [mach_memory_info](1502832-mach_memory_info.md)
- [vm_behavior_set](1585236-vm_behavior_set.md)
- [vm_machine_attribute](1585354-vm_machine_attribute.md)
- [vm_purgable_control](1585267-vm_purgable_control.md)
- [vm_msync](1585201-vm_msync.md)
