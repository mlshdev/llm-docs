> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/backtrace_user_copy_fn

# backtrace_user_copy_fn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 12.0+

## Declaration

```objectivec
typedef errno_t (*backtrace_user_copy_fn)(void *ctx, void *dst, user_addr_t src, size_t size);
```
