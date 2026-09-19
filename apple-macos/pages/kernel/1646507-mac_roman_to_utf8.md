> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646507-mac_roman_to_utf8

# mac_roman_to_utf8

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int mac_roman_to_utf8(const uint8_t hfs_str[32], uint32_t maxDstLen, uint32_t *actualDstLen, unsigned char *dstStr);
```
