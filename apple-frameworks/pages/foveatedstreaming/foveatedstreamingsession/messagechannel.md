> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/messagechannel](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/messagechannel)

# FoveatedStreamingSession.MessageChannel

**Framework:** Foveated Streaming  
**Kind:** Class  
**Availability:** visionOS 26.4+

A bidirectional channel for sending and receiving custom data.

## Declaration

```swift
class MessageChannel
```

<a id="overview"></a>

## Overview

Use message channels to communicate with the application streaming foveated content to your visionOS app. You can send data with the [sendMessage(\_:)](messagechannel/sendmessage%28__%29.md) function and receive data through the [receivedMessageStream](messagechannel/receivedmessagestream.md) async stream.

## Topics

### Structures

- [FoveatedStreamingSession.MessageChannel.ID](messagechannel/id-swift.struct.md): A unique identifier for a message channel.

### Instance Properties

- [channelStatus](messagechannel/channelstatus-swift.property.md): The state of the message channel.
- [id](messagechannel/id-swift.property.md): An identifier for the message channel.
- [receivedMessageStream](messagechannel/receivedmessagestream.md): An async stream that yields data objects each time the channel receives a message.

### Instance Methods

- [disconnect()](messagechannel/disconnect%28%29.md): Manually disconnects and closes the data channel.
- [sendMessage(\_:)](messagechannel/sendmessage%28__%29.md): Sends data to the streaming endpoint on this channel.

### Enumerations

- [FoveatedStreamingSession.MessageChannel.ChannelStatus](messagechannel/channelstatus-swift.enum.md): The status of a message channel.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
