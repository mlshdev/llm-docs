> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iotimereventsource/3516498-timereventsource](https://developer.apple.com/documentation/kernel/iotimereventsource/3516498-timereventsource)

# timerEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static OSPtr<IOTimerEventSource> timerEventSource(uint32_t options, OSObject *inOwner, ActionBlock action);
```
