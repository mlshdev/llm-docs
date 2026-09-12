> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4540744-thread_wakeup_nthreads_prim](https://developer.apple.com/documentation/kernel/4540744-thread_wakeup_nthreads_prim)

# thread_wakeup_nthreads_prim

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
kern_return_t thread_wakeup_nthreads_prim(event_t event, uint32_t nthreads, wait_result_t result);
```
