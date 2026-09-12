> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585641-timer_duration_constants/kdurationforever](https://developer.apple.com/documentation/coreservices/1585641-timer_duration_constants/kdurationforever)

# kDurationForever

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

The task waits forever. The blocking call waits until either the event occurs, or until the object being waited upon (such as a message queue) is deleted.

## Declaration

```objectivec
kDurationForever = 0x7FFFFFFF
```
