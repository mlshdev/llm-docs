> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3753470-coreanalyticssendevent](https://developer.apple.com/documentation/kernel/ioservice/3753470-coreanalyticssendevent)

# CoreAnalyticsSendEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t CoreAnalyticsSendEvent(uint64_t options, OSString *eventName, OSDictionary *eventPayload, OSDispatchMethod supermethod);
```
