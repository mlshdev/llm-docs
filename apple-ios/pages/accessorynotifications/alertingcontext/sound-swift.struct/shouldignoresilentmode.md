> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/alertingcontext/sound-swift.struct/shouldignoresilentmode

# shouldIgnoreSilentMode

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value that indicates whether the sound ignores local silent mode.

## Declaration

```swift
var shouldIgnoreSilentMode: Bool
```

<a id="discussion"></a>

## Discussion

A `true` value typically indicates higher urgency, such as for emergency alerts.
