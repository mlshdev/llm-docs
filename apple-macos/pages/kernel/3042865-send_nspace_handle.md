> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3042865-send_nspace_handle

# send_nspace_handle

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t send_nspace_handle(mach_port_t nspace_handler_port, uint32_t pid, vfs_path_t path, int *handler_error);
```
