> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3610256-wkdm_compress_16k

# WKdm_compress_16k

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int WKdm_compress_16k(WK_word *src_buf, WK_word *dest_buf, WK_word *scratch, unsigned int limit);
```
