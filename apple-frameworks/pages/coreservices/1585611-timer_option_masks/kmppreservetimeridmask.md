> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585611-timer_option_masks/kmppreservetimeridmask](https://developer.apple.com/documentation/coreservices/1585611-timer_option_masks/kmppreservetimeridmask)

# kMPPreserveTimerIDMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPPreserveTimerIDMask = 1L << 0
```

<a id="discussion"></a>

## Discussion

Specifying this mask prevents the timer from being deleted when it expires.
