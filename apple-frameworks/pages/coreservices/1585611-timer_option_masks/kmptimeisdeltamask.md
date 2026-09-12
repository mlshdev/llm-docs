> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585611-timer_option_masks/kmptimeisdeltamask](https://developer.apple.com/documentation/coreservices/1585611-timer_option_masks/kmptimeisdeltamask)

# kMPTimeIsDeltaMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPTimeIsDeltaMask = 1L << 1
```

<a id="discussion"></a>

## Discussion

Specifying this mask indicates that the specified time should be added to the previous expiration time to form the new expiration time. You can use this mask to compensate for timing drift caused by the finite amount of time required to arm the timer, receive the notification, and so on.
