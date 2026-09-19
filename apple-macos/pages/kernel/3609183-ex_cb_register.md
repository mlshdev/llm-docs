> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3609183-ex_cb_register

# ex_cb_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t ex_cb_register(ex_cb_class_t cb_class, ex_cb_t cb, void *refcon);
```
