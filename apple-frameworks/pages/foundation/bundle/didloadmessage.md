> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/didloadmessage](https://developer.apple.com/documentation/foundation/bundle/didloadmessage)

# Bundle.DidLoadMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message a bundle sends when it dynamically loads a class.

## Declaration

```swift
struct DidLoadMessage
```

<a id="overview"></a>

## Overview

When a bundle handles a request to load a class with [classNamed(\_:)](classnamed%28__%29.md) or  [principalClass](principalclass.md), the bundle dynamically loads the executable code file that contains the class implementation and all other class definitions contained in the file. After module loading completes, the bundle posts this message.

Observe this message with the identifier [didLoad](../notificationcenter/messageidentifier/didload.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [Bundle](../bundle.md).

This message interoperates with the notification [didLoadNotification](didloadnotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](didloadmessage/init%28%29.md): Creates a message that indicates a bundle dynamically loaded a class.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting classes from a bundle

- [classNamed(\_:)](classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [principalClass](principalclass.md): The bundle’s principal class.
- [didLoadNotification](didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [didLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
