> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/willresignactive-9z4xc](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/willresignactive-9z4xc)

# willResignActive

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a host app moving from the active to the inactive state.

## Declaration

```swift
static var willResignActive: NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillResignActiveMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSExtensionContext.WillResignActiveMessage](../../nsextensioncontext/willresignactivemessage.md).

## See Also

### Identifying extension messages

- [didBecomeActive](didbecomeactive-79dvm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidBecomeActiveMessage>`. An identifier for a message about a host app moving from the inactive to the active state.
- [didEnterBackground](didenterbackground-5gdtk.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidEnterBackgroundMessage>`. An identifier for a message about a host app beginning to run in the background.
- [willEnterForeground](willenterforeground-p1og.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillEnterForegroundMessage>`. An identifier for a message about a host app preparing to run in the foreground.
