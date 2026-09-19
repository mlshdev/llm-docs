> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4445093-pe_mark_hwaccess_data

# PE_mark_hwaccess_data

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
void PE_mark_hwaccess_data(uint8_t type, uint8_t size, uint64_t paddr);
```
