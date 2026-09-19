> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/thread_call_priority_t/thread_call_priority_high

# THREAD_CALL_PRIORITY_HIGH

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

## Declaration

```objectivec
THREAD_CALL_PRIORITY_HIGH = 0
```

<a id="discussion"></a>

## Discussion

Importance above everything but realtime. Thread calls allocated with this priority execute at extremely high priority, above everything but realtime threads. They are generally executed in serial. Though they may execute concurrently under some circumstances, no fan-out is implied. These work items should do very small amounts of work or risk disrupting system responsiveness.
