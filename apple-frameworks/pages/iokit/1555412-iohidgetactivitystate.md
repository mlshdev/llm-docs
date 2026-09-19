> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1555412-iohidgetactivitystate

# IOHIDGetActivityState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ (deprecated in 14.2) · macOS 10.9+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t IOHIDGetActivityState(io_connect_t handle, bool *hidActivityIdle);
```
