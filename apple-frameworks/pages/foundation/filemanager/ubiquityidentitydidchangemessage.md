> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/ubiquityidentitydidchangemessage](https://developer.apple.com/documentation/foundation/filemanager/ubiquityidentitydidchangemessage)

# FileManager.UbiquityIdentityDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message a file manager sends after the iCloud (“ubiquity”) identity changes.

## Declaration

```swift
struct UbiquityIdentityDidChangeMessage
```

<a id="overview"></a>

## Overview

The system generates this notification when the user logs in to or out of an iCloud account or enables or disables the syncing of documents and data. This notification is your cue to update caches and any interface elements displaying iCloud–related content. For example, hide all references to iCloud files when the user logs out of iCloud.

When your app receives this notification, get the new token from the [ubiquityIdentityToken](ubiquityidentitytoken.md) instance property. The value of that token is `nil` if the a person disabled iCloud or logged out.

Observe this message with the identifier [ubiquityIdentityDidChange](../notificationcenter/messageidentifier/ubiquityidentitydidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [FileManager](../filemanager.md).

This message interoperates with the notification [NSUbiquityIdentityDidChange](../nsnotification/name-swift.struct/nsubiquityidentitydidchange.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](ubiquityidentitydidchangemessage/init%28%29.md): Creates a message for a ubiquity identity change.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
