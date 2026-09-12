> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585611-timer_option_masks](https://developer.apple.com/documentation/coreservices/1585611-timer_option_masks)

# Timer Option Masks

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Indicate optional actions when calling `MPArmTimer`.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPPreserveTimerIDMask](1585611-timer_option_masks/kmppreservetimeridmask.md): Deprecated.
- [kMPTimeIsDeltaMask](1585611-timer_option_masks/kmptimeisdeltamask.md): Deprecated.
- [kMPTimeIsDurationMask](1585611-timer_option_masks/kmptimeisdurationmask.md): Deprecated. Specifying this mask indicates that the specified expiration time is of type `Duration`. You can use this mask to avoid having to call time conversion routines when specifying an expiration time.
