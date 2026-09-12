> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3786099-backtrace_user_copy_error](https://developer.apple.com/documentation/kernel/3786099-backtrace_user_copy_error)

# backtrace_user_copy_error

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
errno_t backtrace_user_copy_error(void *ctx, void *dst, user_addr_t src, size_t size);
```
