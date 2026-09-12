> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3917660-backtrace_packed](https://developer.apple.com/documentation/kernel/3917660-backtrace_packed)

# backtrace_packed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.3+

## Declaration

```objectivec
size_t backtrace_packed(backtrace_pack_t packing, uint8_t *bt, size_t btsize, struct backtrace_control *ctl, backtrace_info_t *info_out);
```
