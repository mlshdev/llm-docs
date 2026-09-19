> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/processor_idle_t

# processor_idle_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef void (*processor_idle_t)(cpu_id_t cpu_id, boolean_t enter, uint64_t *new_timeout_ticks);
```
