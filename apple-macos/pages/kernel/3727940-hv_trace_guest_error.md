> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3727940-hv_trace_guest_error

# hv_trace_guest_error

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
void hv_trace_guest_error(uint32_t vcpu_id, uint64_t *vcpu_regs, uint32_t failure, uint32_t error);
```
