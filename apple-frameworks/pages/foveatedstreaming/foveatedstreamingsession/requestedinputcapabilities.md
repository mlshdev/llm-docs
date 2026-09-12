> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/requestedinputcapabilities](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/requestedinputcapabilities)

# requestedInputCapabilities

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

A list of input data types which should be included as part of the stream.

## Declaration

```swift
@MainActor final var requestedInputCapabilities: Set<FoveatedStreamingSession.InputCapability> { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `[]`.

At [connect(endpoint:)](connect%28endpoint_%29.md) time, any capability in the requested set with [FoveatedStreamingSession.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md) status triggers an authorization prompt before the connection proceeds.  Setting this property does not on its own trigger an authorization prompt — call [requestAuthorization(for:)](requestauthorization%28for_%29.md) to do that explicitly.
