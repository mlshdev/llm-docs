> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3753682-receive_vfs_resolve_dir](https://developer.apple.com/documentation/kernel/3753682-receive_vfs_resolve_dir)

# receive_vfs_resolve_dir

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t receive_vfs_resolve_dir(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t pid, uint32_t op, nspace_name_t file_name, nspace_path_t path);
```
