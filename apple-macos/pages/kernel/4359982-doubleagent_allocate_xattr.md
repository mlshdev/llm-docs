> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4359982-doubleagent_allocate_xattr](https://developer.apple.com/documentation/kernel/4359982-doubleagent_allocate_xattr)

# doubleagent_allocate_xattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
kern_return_t doubleagent_allocate_xattr(mach_port_t server, mach_port_t file_port, int64_t file_size, xattrname name, uint64_t size, uint32_t options, int *err, uint64_t *value_offset);
```
