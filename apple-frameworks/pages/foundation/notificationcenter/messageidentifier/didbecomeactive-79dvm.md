> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didbecomeactive-79dvm](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didbecomeactive-79dvm)

# didBecomeActive

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a host app moving from the inactive to the active state.

## Declaration

```swift
static var didBecomeActive: NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidBecomeActiveMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSExtensionContext.DidBecomeActiveMessage](../../nsextensioncontext/didbecomeactivemessage.md).

## See Also

### Identifying extension messages

- [willResignActive](willresignactive-9z4xc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillResignActiveMessage>`. An identifier for a message about a host app moving from the active to the inactive state.
- [didEnterBackground](didenterbackground-5gdtk.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidEnterBackgroundMessage>`. An identifier for a message about a host app beginning to run in the background.
- [willEnterForeground](willenterforeground-p1og.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillEnterForegroundMessage>`. An identifier for a message about a host app preparing to run in the foreground.
