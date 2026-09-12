> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionevent/userresolution/dismissed](https://developer.apple.com/documentation/coremotion/cmfalldetectionevent/userresolution/dismissed)

# CMFallDetectionEvent.UserResolution.dismissed (Swift)

**Framework:** Core Motion  
**Kind:** Case  
**Availability:** watchOS 7.2+

The user dismissed the fall event alert, but didn’t explicitly confirm or reject the event.

## Declaration

```swift
case dismissed
```

<a id="Discussion"></a>

## Discussion

The user can dismiss the alert by pressing the digital crown or tapping the close button.

## See Also

### Resolutions

- [CMFallDetectionEvent.UserResolution.confirmed](confirmed.md): The user confirmed the event.
- [CMFallDetectionEvent.UserResolution.rejected](rejected.md): The user rejected the fall event.
- [CMFallDetectionEvent.UserResolution.unresponsive](unresponsive.md): The user didn’t respond to the fall event and the system hasn’t detected recovery motions.

# CMFallDetectionEventUserResolutionDismissed (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The user dismissed the fall event alert, but didn’t explicitly confirm or reject the event.

## Declaration

```objectivec
CMFallDetectionEventUserResolutionDismissed
```

<a id="Discussion"></a>

## Discussion

The user can dismiss the alert by pressing the digital crown or tapping the close button.

## See Also

### Resolutions

- [CMFallDetectionEventUserResolutionConfirmed](confirmed.md): The user confirmed the event.
- [CMFallDetectionEventUserResolutionRejected](rejected.md): The user rejected the fall event.
- [CMFallDetectionEventUserResolutionUnresponsive](unresponsive.md): The user didn’t respond to the fall event and the system hasn’t detected recovery motions.
