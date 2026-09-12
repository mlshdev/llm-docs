> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3917661-backtrace_unpack](https://developer.apple.com/documentation/kernel/3917661-backtrace_unpack)

# backtrace_unpack

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.3+

## Declaration

```objectivec
unsigned int backtrace_unpack(backtrace_pack_t packing, uintptr_t *dst, unsigned int dst_len, const uint8_t *src, size_t src_size);
```
