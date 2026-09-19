> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3852615-ubc_upl_map_range

# ubc_upl_map_range

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
int ubc_upl_map_range(upl_t, vm_offset_t, vm_size_t, vm_prot_t, vm_offset_t *);
```
