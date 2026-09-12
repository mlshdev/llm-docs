> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/didfinishgatheringmessage](https://developer.apple.com/documentation/foundation/nsmetadataquery/didfinishgatheringmessage)

# NSMetadataQuery.DidFinishGatheringMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message a metadata query sends when it finishes the initial result-gathering phase of the query.

## Declaration

```swift
struct DidFinishGatheringMessage
```

<a id="overview"></a>

## Overview

Observe this message with the identifier [didFinishGathering](../notificationcenter/messageidentifier/didfinishgathering.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [NSMetadataQuery](../nsmetadataquery.md).

This message interoperates with the notification [NSMetadataQueryDidFinishGathering](../nsnotification/name-swift.struct/nsmetadataquerydidfinishgathering.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](didfinishgatheringmessage/init%28%29.md): Creates a message for a metadata query that finished its initial result gathering.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messages

- [NSMetadataQuery.DidStartGatheringMessage](didstartgatheringmessage.md): A message a metadata query sends when it starts the initial result-gathering phase of the query.
