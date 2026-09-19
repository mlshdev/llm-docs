> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/modedidchange

# modeDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

## Declaration

```swift
static var modeDidChange: NotificationCenter.BaseMessageIdentifier<UIScreen.ModeDidChangeMessage> { get }
```

## See Also

### Identifying UIKit screen messages

- [brightnessDidChange](brightnessdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.BrightnessDidChangeMessage>`.
- [capturedDidChange](captureddidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.CapturedDidChangeMessage>`.
- [referenceDisplayModeStatusDidChange](referencedisplaymodestatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ReferenceDisplayModeStatusDidChangeMessage>`.
