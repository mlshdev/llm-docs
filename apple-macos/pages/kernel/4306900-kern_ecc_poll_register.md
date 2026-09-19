> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4306900-kern_ecc_poll_register

# kern_ecc_poll_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.2+

## Declaration

```objectivec
kern_return_t kern_ecc_poll_register(platform_error_handler_ecc_poll_t poll_func, uint32_t max_errors);
```
