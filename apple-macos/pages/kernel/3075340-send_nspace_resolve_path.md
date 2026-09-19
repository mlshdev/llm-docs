> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3075340-send_nspace_resolve_path

# send_nspace_resolve_path

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t send_nspace_resolve_path(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t pid, uint32_t op, nspace_path_t path, int *resolve_error);
```
