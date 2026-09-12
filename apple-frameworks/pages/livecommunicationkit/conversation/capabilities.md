> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/capabilities](https://developer.apple.com/documentation/livecommunicationkit/conversation/capabilities)

# Conversation.Capabilities

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A type that describes capabilities of a conversation.

## Declaration

```swift
struct Capabilities
```

<a id="overview"></a>

## Overview

Configure conversation capabilites as part of a [Conversation.Update](update.md).

## Topics

### Capabilities

- [merging](capabilities/merging.md): The conversation can merge with another conversation to create a new conversation.
- [pausing](capabilities/pausing.md): The conversation is active and can be temporarily paused.
- [playingTones](capabilities/playingtones.md): The conversation supports playing tone sequences.
- [unmerging](capabilities/unmerging.md): The conversation is the result of merging two conversations and can be separated into the original conversations.
- [video](capabilities/video.md): The conversation sends or displays video streams.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Updating a conversation

- [Conversation.Update](update.md): A type that describes new, changed, or deleted capabilities and attributes of a conversation.
