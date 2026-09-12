> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingextension/openmessagechannel(_:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingextension/openmessagechannel(_:))

# openMessageChannel(\_:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Handles a message channel opened by the host app.

## Declaration

```swift
@MainActor func openMessageChannel(_ channel: Self.MessageChannel) throws
```

## Parameters

- `channel`: The channel to service.

<a id="discussion"></a>

## Discussion

The framework vends the [FoveatedStreamingProviderMessageChannel](../foveatedstreamingprovidermessagechannel.md) and calls this when the host opens a channel.
