> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/status-swift.property](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.property)

# status

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 26.4+

The connection status of the session.

## Declaration

```swift
@MainActor final var status: FoveatedStreamingSession.Status { get }
```

<a id="discussion"></a>

## Discussion

Observe this property to monitor the session’s connection status, as well as obtain disconnection reasons. The default value is [FoveatedStreamingSession.Status.initialized](status-swift.enum/initialized.md).

For example, you can display a view that’s only visible when the session is fully connected:

```swift
var body: some View {
    if session.status == .connected {
        ConnectedView()
    } else {
        NotConnectedView()
    }
}
```

You can obtain the disconnect reason whenever the session disconnects as follows:

```swift
.onChange(of: session.status) {
    if case .disconnected(let disconnectReason) = session.status {
        print(disconnectReason.errorDescription)
    }
}
```
