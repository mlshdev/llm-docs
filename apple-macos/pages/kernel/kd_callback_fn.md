> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/kd_callback_fn

# kd_callback_fn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

## Declaration

```objectivec
typedef void (*kd_callback_fn)(void *context, kd_callback_type reason, void *arg);
```
