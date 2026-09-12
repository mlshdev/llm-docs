> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason/unavailable](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason/unavailable)

# unavailable

**Framework:** Foveated Streaming  
**Kind:** Type Property  
**Availability:** visionOS 26.4+

A disconnect reason indicating the foveated streaming service is currently unavailable.

## Declaration

```swift
static var unavailable: FoveatedStreamingSession.DisconnectReason { get }
```

<a id="discussion"></a>

## Discussion

This disconnect reason can occur if another app on the system is already streaming.  Inform people to close other apps and try again.
