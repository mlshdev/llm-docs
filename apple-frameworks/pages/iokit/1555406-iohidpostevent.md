> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1555406-iohidpostevent

# IOHIDPostEvent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ (deprecated in 14.2) · macOS 10.0+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t IOHIDPostEvent(io_connect_t connect, UInt32 eventType, IOGPoint location, const NXEventData *eventData, UInt32 eventDataVersion, IOOptionBits eventFlags, IOOptionBits options);
```
