> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocoreanalyticssendeventproc

# IOCoreAnalyticsSendEventProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 12.0+

## Declaration

```objectivec
typedef kern_return_t (*IOCoreAnalyticsSendEventProc)(uint64_t options, OSString *eventName, OSDictionary *eventPayload);
```
