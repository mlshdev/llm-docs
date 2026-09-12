> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kd_callback_fn](https://developer.apple.com/documentation/kernel/kd_callback_fn)

# kd_callback_fn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

## Declaration

```objectivec
typedef void (*kd_callback_fn)(void *context, kd_callback_type reason, void *arg);
```
