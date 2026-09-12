> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/hfs_to_unicode_func_t](https://developer.apple.com/documentation/kernel/hfs_to_unicode_func_t)

# hfs_to_unicode_func_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.12+

## Declaration

```objectivec
typedef int (*hfs_to_unicode_func_t)(const uint8_t hfs_str[32], uint16_t *uni_str, u_int32_t maxCharLen, u_int32_t *usedCharLen);
```
