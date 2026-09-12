> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/batteryleveldidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/batteryleveldidchange)

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
