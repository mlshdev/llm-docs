> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1571337-rdmsr_carefully

# rdmsr_carefully

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
int rdmsr_carefully(uint32_t msr, uint32_t *lo, uint32_t *hi);
```
