> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646121-anonymous/khfspluscatalogkeyminimumlength

# kHFSPlusCatalogKeyMinimumLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kHFSPlusCatalogKeyMinimumLength = kHFSPlusCatalogKeyMaximumLength - sizeof(HFSUniStr255) + sizeof(u_int16_t)
```
