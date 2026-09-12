> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/didbecomeactivemessage](https://developer.apple.com/documentation/foundation/nsextensioncontext/didbecomeactivemessage)

# NSExtensionContext.DidBecomeActiveMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the extension’s host app moves from the inactive to the active state.

## Declaration

```swift
struct DidBecomeActiveMessage
```

<a id="overview"></a>

## Overview

You can use this message to adjust your extension’s activity when the host app becomes active.

Observe this message with the identifier [didBecomeActive](../notificationcenter/messageidentifier/didbecomeactive-79dvm.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [NSExtensionContext](../nsextensioncontext.md).

This message interoperates with the notification [NSExtensionHostDidBecomeActive](../nsnotification/name-swift.struct/nsextensionhostdidbecomeactive.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message for a host app becoming active

- [init()](didbecomeactivemessage/init%28%29.md): Creates a message for a host app becoming active.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messages

- [NSExtensionContext.WillResignActiveMessage](willresignactivemessage.md): A message the system sends when the extension’s host app moves from the active to the inactive state.
- [NSExtensionContext.DidEnterBackgroundMessage](didenterbackgroundmessage.md): A message the system sends when the extension’s host app begins running in the background.
- [NSExtensionContext.WillEnterForegroundMessage](willenterforegroundmessage.md): A message the system sends when the extension’s host app begins running in the foreground.
