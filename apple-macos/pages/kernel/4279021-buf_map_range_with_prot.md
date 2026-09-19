> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4279021-buf_map_range_with_prot

# buf_map_range_with_prot

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
errno_t buf_map_range_with_prot(buf_t bp, caddr_t *io_addr, vm_prot_t prot);
```
