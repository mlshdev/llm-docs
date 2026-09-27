> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4359985-doubleagent_remove_xattr

# doubleagent_remove_xattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
kern_return_t doubleagent_remove_xattr(mach_port_t server, mach_port_t file_port, int64_t file_size, xattrname name, int *err, boolean_t *is_empty);
```
