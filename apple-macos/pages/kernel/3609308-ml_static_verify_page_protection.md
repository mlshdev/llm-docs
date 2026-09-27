> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3609308-ml_static_verify_page_protection

# ml_static_verify_page_protections

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t ml_static_verify_page_protections(uint64_t base, uint64_t size, vm_prot_t prot);
```
