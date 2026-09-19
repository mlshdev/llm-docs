> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/batteryleveldidchange

# batteryLevelDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

## Declaration

```swift
static var batteryLevelDidChange: NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryLevelDidChangeMessage> { get }
```

## See Also

### Identifying UIKIt device messages

- [batteryStateDidChange](batterystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryStateDidChangeMessage>`.
- [orientationDidChange](orientationdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.OrientationDidChangeMessage>`.
- [proximityStateDidChange](proximitystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.ProximityStateDidChangeMessage>`.
