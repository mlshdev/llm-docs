> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/connectreceiver(name:endpoint:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/connectreceiver(name:endpoint:))

# connectReceiver(name:endpoint:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Adds an [ImmersiveMediaRemotePreviewReceiver](../immersivemediaremotepreviewreceiver.md) to the sender as an active participant of the network preview. Any updates on the sender will be propagated to all active receivers (frames, camera information, static metadata).

## Declaration

```swift
func connectReceiver(name: String, endpoint: NWEndpoint) async throws
```

## Parameters

- `name`: The name associated with the receiver being connected.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails establishing the connection to the receiver..
