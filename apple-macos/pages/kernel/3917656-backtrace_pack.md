> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3917656-backtrace_pack](https://developer.apple.com/documentation/kernel/3917656-backtrace_pack)

# backtrace_pack

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.3+

## Declaration

```objectivec
size_t backtrace_pack(backtrace_pack_t packing, uint8_t *dst, size_t dst_size, const uintptr_t *src, unsigned int src_len);
```
