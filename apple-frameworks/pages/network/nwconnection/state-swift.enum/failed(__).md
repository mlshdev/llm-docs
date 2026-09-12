> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/state-swift.enum/failed(_:)](https://developer.apple.com/documentation/network/nwconnection/state-swift.enum/failed(_:))

# NWConnection.State.failed(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The connection has disconnected or encountered an error.

## Declaration

```swift
case failed(NWError)
```

## See Also

### States

- [NWConnection.State.setup](setup.md): The connection has been initialized but not started.
- [NWConnection.State.waiting(\_:)](waiting%28__%29.md): The connection is waiting for a network path change.
- [NWConnection.State.preparing](preparing.md): The connection in the process of being established.
- [NWConnection.State.ready](ready.md): The connection is established, and ready to send and receive data.
- [NWConnection.State.cancelled](cancelled.md): The connection has been canceled.
