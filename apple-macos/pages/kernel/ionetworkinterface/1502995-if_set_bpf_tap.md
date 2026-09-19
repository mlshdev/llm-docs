> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkinterface/1502995-if_set_bpf_tap

# if_set_bpf_tap

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static errno_t if_set_bpf_tap(ifnet_t ifp, bpf_tap_mode, bpf_packet_func);
```
