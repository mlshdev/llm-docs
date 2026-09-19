> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ex_cb_t

# ex_cb_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef ex_cb_action_t (*ex_cb_t)(ex_cb_class_t cb_class, void *refcon, const ex_cb_state_t *state);
```
