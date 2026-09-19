> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iotimereventsource/3516498-timereventsource

# timerEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static OSPtr<IOTimerEventSource> timerEventSource(uint32_t options, OSObject *inOwner, ActionBlock action);
```
