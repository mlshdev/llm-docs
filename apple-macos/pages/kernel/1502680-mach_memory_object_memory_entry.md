> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1502680-mach_memory_object_memory_entry](https://developer.apple.com/documentation/kernel/1502680-mach_memory_object_memory_entry)

# mach_memory_object_memory_entry

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t mach_memory_object_memory_entry(host_t host, boolean_t internal, vm_size_t size, vm_prot_t permission, memory_object_t pager, mach_port_t *entry_handle);
```

## See Also

### Memory Objects

- [mach_memory_object_memory_entry_64](1502560-mach_memory_object_memory_entry_.md)
