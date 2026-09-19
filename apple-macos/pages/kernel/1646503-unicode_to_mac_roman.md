> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646503-unicode_to_mac_roman

# unicode_to_mac_roman

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int unicode_to_mac_roman(uint16_t *uni_str, u_int32_t unicodeChars, uint8_t hfs_str[32]);
```
