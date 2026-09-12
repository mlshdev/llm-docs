> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/sendcompletion](https://developer.apple.com/documentation/network/nwconnection/sendcompletion)

# NWConnection.SendCompletion

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A completion handler that indicates when the connection has finished processing sent content.

## Declaration

```swift
enum SendCompletion
```

## Topics

### Completions

- [NWConnection.SendCompletion.contentProcessed(\_:)](sendcompletion/contentprocessed%28__%29.md): Provide a completion handler that’s invoked when the sent data is processed by the stack.
- [NWConnection.SendCompletion.idempotent](sendcompletion/idempotent.md): Mark the sent data as idempotent—data that can be sent multiple times.

## See Also

### Sending and Receiving Data

- [send(content:contentContext:isComplete:completion:)](send%28content_contentcontext_iscomplete_completion_%29-5ecuz.md): Sends data on a connection.
- [send(content:contentContext:isComplete:completion:)](send%28content_contentcontext_iscomplete_completion_%29-3mfmt.md): Sends data on a connection using a custom Data type.
- [receive(minimumIncompleteLength:maximumLength:completion:)](receive%28minimumincompletelength_maximumlength_completion_%29.md): Schedules a single receive completion handler, with a range indicating how many bytes the handler can receive at one time.
- [receiveMessage(completion:)](receivemessage%28completion_%29.md): Schedules a single receive completion handler for a complete message, as opposed to a range of bytes.
- [batch(\_:)](batch%28__%29.md): Defines a block in which calls to send and receive are processed as a batch to improve performance.
- [NWConnection.ContentContext](contentcontext.md): An object that represents a message to send or receive, containing protocol metadata and send properties.
- [maximumDatagramSize](maximumdatagramsize.md): The maximum size of a datagram message that can be sent on a connection.
