> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3075341-receive_nspace_resolve_cancel

# receive_nspace_resolve_cancel

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t receive_nspace_resolve_cancel(mach_port_t nspace_handler_port, uint32_t req_id);
```
