> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3553754-os_log_coprocessor](https://developer.apple.com/documentation/kernel/3553754-os_log_coprocessor)

# os_log_coprocessor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
bool os_log_coprocessor(void *buff, uint64_t buff_len, os_log_type_t type, const char *uuid, uint64_t timestamp, uint32_t offset, bool stream_log);
```
