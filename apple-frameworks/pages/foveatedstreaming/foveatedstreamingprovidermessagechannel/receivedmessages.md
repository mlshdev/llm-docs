> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidermessagechannel/receivedmessages

# receivedMessages

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The messages the host app has sent to the extension.

## Declaration

```swift
@MainActor final var receivedMessages: some AsyncSequence<Data, Never> { get }
```

<a id="discussion"></a>

## Discussion

The sequence yields each message as the host sends it and finishes when the channel closes.

> **Note**

> Intended for a single consumer.  Iterate [receivedMessages](receivedmessages.md) from one place only; consuming it concurrently from multiple tasks is not supported.
