> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ex_cb_t](https://developer.apple.com/documentation/kernel/ex_cb_t)

# ex_cb_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef ex_cb_action_t (*ex_cb_t)(ex_cb_class_t cb_class, void *refcon, const ex_cb_state_t *state);
```
