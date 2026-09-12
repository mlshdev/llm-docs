> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/disconnect()](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/disconnect())

# disconnect()

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Disconnects from the remote streaming endpoint, ending the streaming session.

## Declaration

```swift
@MainActor final func disconnect() async
```

<a id="discussion"></a>

## Discussion

When this function returns, the foveated streaming session’s [status](status-swift.property.md) will equal [FoveatedStreamingSession.Status.disconnected(\_:)](status-swift.enum/disconnected%28__%29.md) with the reason [appInitiatedDisconnect](disconnectreason/appinitiateddisconnect.md).

You can reconnect by calling [connect(endpoint:)](connect%28endpoint_%29.md).
