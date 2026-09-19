> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidermessagechannel/send(_:)

# send(\_:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Sends data received from the streaming endpoint to the host app.

## Declaration

```swift
@MainActor final func send(_ data: Data)
```

## Parameters

- `data`: The data received from the endpoint.
