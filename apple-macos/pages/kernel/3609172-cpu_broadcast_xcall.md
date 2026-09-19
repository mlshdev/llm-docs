> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3609172-cpu_broadcast_xcall

# cpu_broadcast_xcall

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
unsigned int cpu_broadcast_xcall(uint32_t *, boolean_t, broadcastFunc, void *);
```
