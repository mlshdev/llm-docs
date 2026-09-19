> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/showdetailtargetdidchange

# showDetailTargetDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var showDetailTargetDidChange: NotificationCenter.BaseMessageIdentifier<UIViewController.ShowDetailTargetDidChangeMessage> { get }
```

## See Also

### Identifying UIKit view controller messages

- [didBecomeVisible](didbecomevisible.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeVisibleMessage>`.
- [didBecomeHidden](didbecomehidden.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeHiddenMessage>`.
