> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585641-timer_duration_constants/kdurationimmediate](https://developer.apple.com/documentation/coreservices/1585641-timer_duration_constants/kdurationimmediate)

# kDurationImmediate

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

The task times out immediately, whether or not the event has occurred. If the event occurred, the return status is `noErr`. If the event did not occur, the return status is `kMPTimeoutErr` (assuming no other errors occurred).

## Declaration

```objectivec
kDurationImmediate = 0
```
