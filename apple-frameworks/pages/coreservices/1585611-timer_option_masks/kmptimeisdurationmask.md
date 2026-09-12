> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585611-timer_option_masks/kmptimeisdurationmask](https://developer.apple.com/documentation/coreservices/1585611-timer_option_masks/kmptimeisdurationmask)

# kMPTimeIsDurationMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specifying this mask indicates that the specified expiration time is of type `Duration`. You can use this mask to avoid having to call time conversion routines when specifying an expiration time.

## Declaration

```objectivec
kMPTimeIsDurationMask = 1L << 2
```
