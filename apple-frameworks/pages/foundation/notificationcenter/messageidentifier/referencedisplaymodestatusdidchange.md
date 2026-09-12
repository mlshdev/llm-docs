> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/referencedisplaymodestatusdidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/referencedisplaymodestatusdidchange)

# referenceDisplayModeStatusDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

## Declaration

```swift
static var referenceDisplayModeStatusDidChange: NotificationCenter.BaseMessageIdentifier<UIScreen.ReferenceDisplayModeStatusDidChangeMessage> { get }
```

## See Also

### Identifying UIKit screen messages

- [brightnessDidChange](brightnessdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.BrightnessDidChangeMessage>`.
- [modeDidChange](modedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ModeDidChangeMessage>`.
- [capturedDidChange](captureddidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.CapturedDidChangeMessage>`.
