> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/backtrace_user_copy_fn](https://developer.apple.com/documentation/kernel/backtrace_user_copy_fn)

# backtrace_user_copy_fn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 12.0+

## Declaration

```objectivec
typedef errno_t (*backtrace_user_copy_fn)(void *ctx, void *dst, user_addr_t src, size_t size);
```
