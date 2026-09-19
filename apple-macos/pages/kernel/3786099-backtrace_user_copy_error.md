> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3786099-backtrace_user_copy_error

# backtrace_user_copy_error

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
errno_t backtrace_user_copy_error(void *ctx, void *dst, user_addr_t src, size_t size);
```
