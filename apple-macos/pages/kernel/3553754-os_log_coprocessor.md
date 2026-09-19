> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3553754-os_log_coprocessor

# os_log_coprocessor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
bool os_log_coprocessor(void *buff, uint64_t buff_len, os_log_type_t type, const char *uuid, uint64_t timestamp, uint32_t offset, bool stream_log);
```
