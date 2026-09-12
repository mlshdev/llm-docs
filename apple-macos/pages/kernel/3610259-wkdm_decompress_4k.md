> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3610259-wkdm_decompress_4k](https://developer.apple.com/documentation/kernel/3610259-wkdm_decompress_4k)

# WKdm_decompress_4k

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
void WKdm_decompress_4k(const WK_word *src_buf, WK_word *dest_buf, WK_word *scratch, unsigned int bytes);
```
