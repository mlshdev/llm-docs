> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646513-mac_roman_to_unicode](https://developer.apple.com/documentation/kernel/1646513-mac_roman_to_unicode)

# mac_roman_to_unicode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int mac_roman_to_unicode(const uint8_t hfs_str[32], uint16_t *uni_str, u_int32_t maxCharLen, u_int32_t *usedCharLen);
```
