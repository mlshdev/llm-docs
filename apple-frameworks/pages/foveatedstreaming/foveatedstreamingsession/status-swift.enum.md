> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum)

# FoveatedStreamingSession.Status

**Framework:** Foveated Streaming  
**Kind:** Enumeration  
**Availability:** visionOS 26.4+

The connection state of a foveated streaming session.

## Declaration

```swift
enum Status
```

## Topics

### Enumeration Cases

- [FoveatedStreamingSession.Status.connected](status-swift.enum/connected.md): The session is connected and streaming from a streaming endpoint.
- [FoveatedStreamingSession.Status.connecting](status-swift.enum/connecting.md): The session is connecting to a streaming endpoint.
- [FoveatedStreamingSession.Status.disconnected(\_:)](status-swift.enum/disconnected%28__%29.md): The session has disconnected or failed to connect to a streaming endpoint.
- [FoveatedStreamingSession.Status.disconnecting](status-swift.enum/disconnecting.md): The session is disconnecting from a streaming endpoint.
- [FoveatedStreamingSession.Status.initialized](status-swift.enum/initialized.md): The initial state of the session.
- [FoveatedStreamingSession.Status.paused](status-swift.enum/paused.md): The session is paused and has temporarily stopped streaming from a streaming endpoint.
- [FoveatedStreamingSession.Status.pausing](status-swift.enum/pausing.md): The session is pausing its connection to a streaming endpoint.
- [FoveatedStreamingSession.Status.resuming](status-swift.enum/resuming.md): The session is resuming its connection to a streaming endpoint.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
