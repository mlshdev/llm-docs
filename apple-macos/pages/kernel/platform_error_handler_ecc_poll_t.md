> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/platform_error_handler_ecc_poll_t

# platform_error_handler_ecc_poll_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 14.2+

## Declaration

```objectivec
typedef int (*platform_error_handler_ecc_poll_t)(uint64_t *addrs, uint32_t *error_count);
```
