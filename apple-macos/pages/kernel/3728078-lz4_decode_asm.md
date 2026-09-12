> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3728078-lz4_decode_asm](https://developer.apple.com/documentation/kernel/3728078-lz4_decode_asm)

# lz4_decode_asm

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
int lz4_decode_asm(uint8_t **dst_ptr, uint8_t *dst_begin, uint8_t *dst_end, const uint8_t **src_ptr, const uint8_t *src_end);
```
