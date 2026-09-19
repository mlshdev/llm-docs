> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1571401-set_cr3_composed

# set_cr3_composed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```objectivec
void set_cr3_composed(uintptr_t base, uint16_t pcid, uint64_t preserve);
```
