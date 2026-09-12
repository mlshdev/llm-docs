> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1402114-mach_vm_region_recurse](https://developer.apple.com/documentation/kernel/1402114-mach_vm_region_recurse)

# mach_vm_region_recurse

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
kern_return_t mach_vm_region_recurse(vm_map_read_t target_task, mach_vm_address_t *address, mach_vm_size_t *size, natural_t *nesting_depth, vm_region_recurse_info_t info, mach_msg_type_number_t *infoCnt);
```

## See Also

### Regions

- [mach_vm_region](1402149-mach_vm_region.md)
- [mach_vm_region_info](1585270-mach_vm_region_info.md)
- [mach_vm_region_info_64](1585170-mach_vm_region_info_64.md)
