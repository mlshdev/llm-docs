> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/lowdiskspacemessage](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/lowdiskspacemessage)

# NSBundleResourceRequest.LowDiskSpaceMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0) · watchOS 26.0+ (deprecated in 27.0)

A message the system sends when it detects the amount of available disk space getting low.

> Use Background Assets instead.

## Declaration

```swift
struct LowDiskSpaceMessage
```

<a id="overview"></a>

## Overview

After receiving this notification, your app should release any on-demand resources that aren’t required. Call [endAccessingResources()](endaccessingresources%28%29.md) to release the managed resources. If the app is in the background and the app doesn’t free up enough space, the system may terminate the app.

Observe this message with the identifier [lowDiskSpace](../notificationcenter/messageidentifier/lowdiskspace.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [NSBundleResourceRequest](../nsbundleresourcerequest.md).

This message interoperates with the notification [NSBundleResourceRequestLowDiskSpace](../nsnotification/name-swift.struct/nsbundleresourcerequestlowdiskspace.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](lowdiskspacemessage/init%28%29.md): Deprecated. Creates a message about the available disk space getting low.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
