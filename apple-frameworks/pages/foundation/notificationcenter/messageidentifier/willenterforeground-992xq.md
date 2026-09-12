> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/willenterforeground-992xq](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/willenterforeground-992xq)

# willEnterForeground

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var willEnterForeground: NotificationCenter.BaseMessageIdentifier<UIScene.WillEnterForegroundMessage> { get }
```

## See Also

### Identifying UIKit scene messages

- [systemProtectionDidChange](systemprotectiondidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.SystemProtectionDidChangeMessage>`.
- [willConnect](willconnect.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.WillConnectMessage>`.
- [didActivate](didactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.DidActivateMessage>`.
- [willDeactivate](willdeactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.WillDeactivateMessage>`.
- [didEnterBackground](didenterbackground-5fqw0.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.DidEnterBackgroundMessage>`.
