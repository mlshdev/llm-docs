> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3753683-receive_vfs_resolve_file

# receive_vfs_resolve_file

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t receive_vfs_resolve_file(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t pid, uint32_t op, int64_t offset, int64_t size, nspace_path_t path);
```
