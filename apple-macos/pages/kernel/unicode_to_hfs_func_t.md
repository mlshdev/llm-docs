> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/unicode_to_hfs_func_t

# unicode_to_hfs_func_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.12+

## Declaration

```objectivec
typedef int (*unicode_to_hfs_func_t)(uint16_t *uni_str, u_int32_t unicodeChars, uint8_t hfs_str[32]);
```
