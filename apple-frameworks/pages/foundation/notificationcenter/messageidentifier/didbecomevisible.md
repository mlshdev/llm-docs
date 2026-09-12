> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didbecomevisible](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didbecomevisible)

# didBecomeVisible

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var didBecomeVisible: NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeVisibleMessage> { get }
```

## See Also

### Identifying UIKit view controller messages

- [didBecomeHidden](didbecomehidden.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeHiddenMessage>`.
- [showDetailTargetDidChange](showdetailtargetdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIViewController.ShowDetailTargetDidChangeMessage>`.
