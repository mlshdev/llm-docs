> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4540744-thread_wakeup_nthreads_prim

# thread_wakeup_nthreads_prim

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
kern_return_t thread_wakeup_nthreads_prim(event_t event, uint32_t nthreads, wait_result_t result);
```
