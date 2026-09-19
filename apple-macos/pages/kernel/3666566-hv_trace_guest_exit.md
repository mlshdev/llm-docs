> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3666566-hv_trace_guest_exit

# hv_trace_guest_exit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
void hv_trace_guest_exit(uint32_t vcpu_id, uint64_t *vcpu_regs, uint32_t reason);
```
