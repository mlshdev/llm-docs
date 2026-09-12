> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/connectionacceptedmessage](https://developer.apple.com/documentation/foundation/filehandle/connectionacceptedmessage)

# FileHandle.ConnectionAcceptedMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message a file handle sends when it creates a socket connection between two processes and creates a file handle for one end of the connection.

## Declaration

```swift
struct ConnectionAcceptedMessage
```

<a id="overview"></a>

## Overview

Before adding an observer for this message type, call either [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md) or [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md) on a [FileHandle](../filehandle.md) object that represents a server stream-type socket.

Observe this message with the identifier [connectionAccepted](../notificationcenter/messageidentifier/connectionaccepted.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [FileHandle](../filehandle.md).

This message interoperates with the notification [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init(fileHandleItem:)](connectionacceptedmessage/init%28filehandleitem_%29.md): Creates a message for a file handle connection acceptance.

### Working with message properties

- [fileHandleItem](connectionacceptedmessage/filehandleitem.md): A result instance that contains either the file handle representing the “near” end of a socket connection, or an error.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messages

- [FileHandle.DataAvailableMessage](dataavailablemessage.md): A message a file handle sends when it determines data is available for reading from a file or communications channel.
- [FileHandle.ReadCompletionMessage](readcompletionmessage.md): A message a file handle sends when it reads the data currently available in a file or a communication channel.
- [FileHandle.ReadToEndOfFileCompletionMessage](readtoendoffilecompletionmessage.md): A message a file handle sends when it reads all data in a file, or another process in a communication channel signals the end of the data.
