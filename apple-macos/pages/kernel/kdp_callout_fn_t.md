> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/kdp_callout_fn_t

# kdp_callout_fn_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef void (*kdp_callout_fn_t)(void *arg, kdp_event_t event);
```
