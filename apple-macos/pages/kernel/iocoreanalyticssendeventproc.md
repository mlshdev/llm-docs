> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocoreanalyticssendeventproc](https://developer.apple.com/documentation/kernel/iocoreanalyticssendeventproc)

# IOCoreAnalyticsSendEventProc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 12.0+

## Declaration

```objectivec
typedef kern_return_t (*IOCoreAnalyticsSendEventProc)(uint64_t options, OSString *eventName, OSDictionary *eventPayload);
```
