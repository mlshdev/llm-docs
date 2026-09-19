> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/io_rate_update_callback_t

# io_rate_update_callback_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.10+

## Declaration

```objectivec
typedef uint64_t (*io_rate_update_callback_t)(uint64_t, uint64_t, uint64_t, uint64_t, uint64_t);
```
