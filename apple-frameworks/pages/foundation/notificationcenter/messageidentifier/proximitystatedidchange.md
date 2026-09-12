> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/proximitystatedidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/proximitystatedidchange)

# proximityStateDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var proximityStateDidChange: NotificationCenter.BaseMessageIdentifier<UIDevice.ProximityStateDidChangeMessage> { get }
```

## See Also

### Identifying UIKIt device messages

- [batteryLevelDidChange](batteryleveldidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryLevelDidChangeMessage>`.
- [batteryStateDidChange](batterystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryStateDidChangeMessage>`.
- [orientationDidChange](orientationdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.OrientationDidChangeMessage>`.
