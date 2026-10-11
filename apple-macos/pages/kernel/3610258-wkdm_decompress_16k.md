> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3610258-wkdm_decompress_16k

# WKdm_decompress_16k

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
void WKdm_decompress_16k(WK_word *src_buf, WK_word *dest_buf, WK_word *scratch, unsigned int bytes);
```
