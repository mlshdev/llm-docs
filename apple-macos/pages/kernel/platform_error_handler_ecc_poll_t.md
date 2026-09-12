> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/platform_error_handler_ecc_poll_t](https://developer.apple.com/documentation/kernel/platform_error_handler_ecc_poll_t)

# platform_error_handler_ecc_poll_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 14.2+

## Declaration

```objectivec
typedef int (*platform_error_handler_ecc_poll_t)(uint64_t *addrs, uint32_t *error_count);
```
