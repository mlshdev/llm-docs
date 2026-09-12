> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3728086-lz4raw_decode_buffer](https://developer.apple.com/documentation/kernel/3728086-lz4raw_decode_buffer)

# lz4raw_decode_buffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
size_t lz4raw_decode_buffer(uint8_t *dst_buffer, size_t dst_size, const uint8_t *src_buffer, size_t src_size, void *work);
```
