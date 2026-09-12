> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4160832-send_vfs_resolve_reparent_with_a](https://developer.apple.com/documentation/kernel/4160832-send_vfs_resolve_reparent_with_a)

# send_vfs_resolve_reparent_with_audit_token

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
kern_return_t send_vfs_resolve_reparent_with_audit_token(mach_port_t nspace_handler_port, uint32_t req_id, uint32_t op, nspace_path_t path, nspace_path_t dest_path, audit_token_t req_atoken);
```
