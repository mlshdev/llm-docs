> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/orientationdidchange

# orientationDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
static var orientationDidChange: NotificationCenter.BaseMessageIdentifier<UIDevice.OrientationDidChangeMessage> { get }
```

## See Also

### Identifying UIKIt device messages

- [batteryLevelDidChange](batteryleveldidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryLevelDidChangeMessage>`.
- [batteryStateDidChange](batterystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryStateDidChangeMessage>`.
- [proximityStateDidChange](proximitystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.ProximityStateDidChangeMessage>`.
