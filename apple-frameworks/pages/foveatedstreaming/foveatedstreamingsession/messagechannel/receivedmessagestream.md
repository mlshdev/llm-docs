> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/messagechannel/receivedmessagestream](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/messagechannel/receivedmessagestream)

# receivedMessageStream

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 26.4+

An async stream that yields data objects each time the channel receives a message.

## Declaration

```swift
final let receivedMessageStream: AsyncStream<Data>
```

<a id="discussion"></a>

## Discussion

The async stream ends when the message channel closes.
