> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3753680-send_vfs_resolve_dir

# send_vfs_resolve_dir

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t send_vfs_resolve_dir(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t pid, uint32_t op, nspace_name_t file_name, nspace_path_t path);
```
