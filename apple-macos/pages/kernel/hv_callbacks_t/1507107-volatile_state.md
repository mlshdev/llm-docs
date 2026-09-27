> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/hv_callbacks_t/1507107-volatile_state

# volatile_state

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

## Declaration

```objectivec
void (*volatile_state)(void *vcpu, int state);
```
