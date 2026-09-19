> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/captureddidchange

# capturedDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

## Declaration

```swift
static var capturedDidChange: NotificationCenter.BaseMessageIdentifier<UIScreen.CapturedDidChangeMessage> { get }
```

## See Also

### Identifying UIKit screen messages

- [brightnessDidChange](brightnessdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.BrightnessDidChangeMessage>`.
- [modeDidChange](modedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ModeDidChangeMessage>`.
- [referenceDisplayModeStatusDidChange](referencedisplaymodestatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ReferenceDisplayModeStatusDidChangeMessage>`.
