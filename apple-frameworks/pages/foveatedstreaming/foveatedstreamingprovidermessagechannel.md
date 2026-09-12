> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingprovidermessagechannel](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidermessagechannel)

# FoveatedStreamingProviderMessageChannel

**Framework:** Foveated Streaming  
**Kind:** Class  
**Availability:** visionOS 27.0+

A message channel between the host app and a streaming provider extension.

## Declaration

```swift
@MainActor final class FoveatedStreamingProviderMessageChannel
```

<a id="overview"></a>

## Overview

Message channels are created by the framework when the host app opens a channel and delivered to the extension via [openMessageChannel(\_:)](foveatedstreamingextension/openmessagechannel%28__%29.md). Provider extensions do not construct values of this type directly.

A channel unifies both directions of message flow:

- Messages the host app sends to the extension arrive on [receivedMessages](foveatedstreamingprovidermessagechannel/receivedmessages.md).
- Data the extension receives from the streaming endpoint is delivered to the host app via [send(\_:)](foveatedstreamingprovidermessagechannel/send%28__%29.md).

## Topics

### Instance Properties

- [channelStatus](foveatedstreamingprovidermessagechannel/channelstatus.md): The current status of this channel.
- [id](foveatedstreamingprovidermessagechannel/id.md): The identifier of this channel.
- [receivedMessages](foveatedstreamingprovidermessagechannel/receivedmessages.md): The messages the host app has sent to the extension.

### Instance Methods

- [close()](foveatedstreamingprovidermessagechannel/close%28%29.md): Closes the channel and finishes [receivedMessages](foveatedstreamingprovidermessagechannel/receivedmessages.md).
- [send(\_:)](foveatedstreamingprovidermessagechannel/send%28__%29.md): Sends data received from the streaming endpoint to the host app.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
