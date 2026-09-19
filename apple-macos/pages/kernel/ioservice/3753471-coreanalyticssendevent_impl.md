> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753471-coreanalyticssendevent_impl

# CoreAnalyticsSendEvent_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t CoreAnalyticsSendEvent_Impl(uint64_t options, OSString *eventName, OSDictionary *eventPayload);
```
