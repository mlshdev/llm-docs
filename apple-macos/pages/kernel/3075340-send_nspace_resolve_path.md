> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3075340-send_nspace_resolve_path](https://developer.apple.com/documentation/kernel/3075340-send_nspace_resolve_path)

# send_nspace_resolve_path

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t send_nspace_resolve_path(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t pid, uint32_t op, nspace_path_t path, int *resolve_error);
```
