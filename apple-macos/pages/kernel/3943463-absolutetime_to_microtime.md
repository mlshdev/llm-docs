> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3943463-absolutetime_to_microtime

# absolutetime_to_microtime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
void absolutetime_to_microtime(uint64_t abstime, clock_sec_t *secs, clock_usec_t *microsecs);
```
