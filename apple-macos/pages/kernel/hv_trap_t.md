> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/hv_trap_t

# hv_trap_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.10+

## Declaration

```objectivec
typedef kern_return_t (*hv_trap_t)(void *target, uint64_t arg);
```
