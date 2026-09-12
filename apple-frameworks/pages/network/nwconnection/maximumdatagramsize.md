> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/maximumdatagramsize](https://developer.apple.com/documentation/network/nwconnection/maximumdatagramsize)

# maximumDatagramSize

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum size of a datagram message that can be sent on a connection.

## Declaration

```swift
final var maximumDatagramSize: Int { get }
```

## See Also

### Sending and Receiving Data

- [send(content:contentContext:isComplete:completion:)](send%28content_contentcontext_iscomplete_completion_%29-5ecuz.md): Sends data on a connection.
- [send(content:contentContext:isComplete:completion:)](send%28content_contentcontext_iscomplete_completion_%29-3mfmt.md): Sends data on a connection using a custom Data type.
- [NWConnection.SendCompletion](sendcompletion.md): A completion handler that indicates when the connection has finished processing sent content.
- [receive(minimumIncompleteLength:maximumLength:completion:)](receive%28minimumincompletelength_maximumlength_completion_%29.md): Schedules a single receive completion handler, with a range indicating how many bytes the handler can receive at one time.
- [receiveMessage(completion:)](receivemessage%28completion_%29.md): Schedules a single receive completion handler for a complete message, as opposed to a range of bytes.
- [batch(\_:)](batch%28__%29.md): Defines a block in which calls to send and receive are processed as a batch to improve performance.
- [NWConnection.ContentContext](contentcontext.md): An object that represents a message to send or receive, containing protocol metadata and send properties.
