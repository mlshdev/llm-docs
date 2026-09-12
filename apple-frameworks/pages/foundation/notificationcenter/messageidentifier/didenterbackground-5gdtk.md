> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didenterbackground-5gdtk](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didenterbackground-5gdtk)

# didEnterBackground

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a host app beginning to run in the background.

## Declaration

```swift
static var didEnterBackground: NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidEnterBackgroundMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [NSExtensionContext.DidEnterBackgroundMessage](../../nsextensioncontext/didenterbackgroundmessage.md).

## See Also

### Identifying extension messages

- [didBecomeActive](didbecomeactive-79dvm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidBecomeActiveMessage>`. An identifier for a message about a host app moving from the inactive to the active state.
- [willResignActive](willresignactive-9z4xc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillResignActiveMessage>`. An identifier for a message about a host app moving from the active to the inactive state.
- [willEnterForeground](willenterforeground-p1og.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillEnterForegroundMessage>`. An identifier for a message about a host app preparing to run in the foreground.
