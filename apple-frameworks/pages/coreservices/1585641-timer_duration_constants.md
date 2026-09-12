> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585641-timer_duration_constants](https://developer.apple.com/documentation/coreservices/1585641-timer_duration_constants)

# Timer Duration Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specify the maximum time a task should wait for an event to occur.

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kDurationImmediate](1585641-timer_duration_constants/kdurationimmediate.md): Deprecated. The task times out immediately, whether or not the event has occurred. If the event occurred, the return status is `noErr`. If the event did not occur, the return status is `kMPTimeoutErr` (assuming no other errors occurred).
- [kDurationForever](1585641-timer_duration_constants/kdurationforever.md): Deprecated. The task waits forever. The blocking call waits until either the event occurs, or until the object being waited upon (such as a message queue) is deleted.
- [kDurationMillisecond](1585641-timer_duration_constants/kdurationmillisecond.md): Deprecated. The task waits one millisecond before timing out.
- [kDurationMicrosecond](1585641-timer_duration_constants/kdurationmicrosecond.md): Deprecated. The task waits one microsecond before timing out.
