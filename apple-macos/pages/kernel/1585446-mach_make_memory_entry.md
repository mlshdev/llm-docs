> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585446-mach_make_memory_entry](https://developer.apple.com/documentation/kernel/1585446-mach_make_memory_entry)

# mach_make_memory_entry

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t mach_make_memory_entry(vm_map_t target_task, vm_size_t *size, vm_offset_t offset, vm_prot_t permission, mem_entry_name_port_t *object_handle, mem_entry_name_port_t parent_entry);
```

## See Also

### Memory Mapping

- [vm_map](1585510-vm_map.md)
- [vm_map_64](1585418-vm_map_64.md)
- [vm_map_exec_lockdown](2937355-vm_map_exec_lockdown.md)
- [vm_map_page_query](1585356-vm_map_page_query.md)
- [vm_mapped_pages_info](1585469-vm_mapped_pages_info.md)
- [vm_remap](1585336-vm_remap.md)
- [mach_make_memory_entry_64](1585405-mach_make_memory_entry_64.md)
- [mach_memory_entry_access_tracking](2967371-mach_memory_entry_access_trackin.md)
- [mach_memory_entry_ownership](3143277-mach_memory_entry_ownership.md)
- [mach_memory_entry_purgable_control](2967372-mach_memory_entry_purgable_contr.md)
