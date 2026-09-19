> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3609304-ml_static_protect

# ml_static_protect

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t ml_static_protect(vm_offset_t start, vm_size_t size, vm_prot_t new_prot);
```
