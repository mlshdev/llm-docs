> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646121-anonymous/khfscatalogkeyminimumlength](https://developer.apple.com/documentation/kernel/1646121-anonymous/khfscatalogkeyminimumlength)

# kHFSCatalogKeyMinimumLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kHFSCatalogKeyMinimumLength = kHFSCatalogKeyMaximumLength - (kHFSMaxFileNameChars + 1) + sizeof(u_int8_t)
```
