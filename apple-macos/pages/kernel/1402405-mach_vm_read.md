> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1402405-mach_vm_read](https://developer.apple.com/documentation/kernel/1402405-mach_vm_read)

# mach_vm_read

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
kern_return_t mach_vm_read(vm_map_read_t target_task, mach_vm_address_t address, mach_vm_size_t size, vm_offset_t *data, mach_msg_type_number_t *dataCnt);
```

## See Also

### Reads and Writes

- [mach_vm_write](1402070-mach_vm_write.md)
- [mach_vm_read_list](1402084-mach_vm_read_list.md)
- [mach_vm_read_overwrite](1402127-mach_vm_read_overwrite.md)
