> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason/appinitiateddisconnect](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason/appinitiateddisconnect)

# appInitiatedDisconnect

**Framework:** Foveated Streaming  
**Kind:** Type Property  
**Availability:** visionOS 26.4+

A disconnect reason indicating the disconnect was initiated by the application.

## Declaration

```swift
static var appInitiatedDisconnect: FoveatedStreamingSession.DisconnectReason { get }
```

<a id="discussion"></a>

## Discussion

This disconnect reason is given after you call [disconnect()](../disconnect%28%29.md), or when the person disconnects from the streaming session via system UI.
