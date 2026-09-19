> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4116471-ml_mcache_flush_callback_registe

# ml_mcache_flush_callback_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.3+

## Declaration

```objectivec
kern_return_t ml_mcache_flush_callback_register(mcache_flush_function func, void *service);
```
