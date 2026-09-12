> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646121-anonymous/khfspluscatalogkeyminimumlength](https://developer.apple.com/documentation/kernel/1646121-anonymous/khfspluscatalogkeyminimumlength)

# kHFSPlusCatalogKeyMinimumLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kHFSPlusCatalogKeyMinimumLength = kHFSPlusCatalogKeyMaximumLength - sizeof(HFSUniStr255) + sizeof(u_int16_t)
```
