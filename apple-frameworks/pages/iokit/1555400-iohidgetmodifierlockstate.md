> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1555400-iohidgetmodifierlockstate

# IOHIDGetModifierLockState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
kern_return_t IOHIDGetModifierLockState(io_connect_t handle, int selector, bool *state);
```
