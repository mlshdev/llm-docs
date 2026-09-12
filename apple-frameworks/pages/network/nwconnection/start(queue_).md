> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/start(queue:)](https://developer.apple.com/documentation/network/nwconnection/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Starts establishing a connection, and sets the queue on which to deliver all connection events.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Creating Connections

- [init(host:port:using:)](init%28host_port_using_%29.md): Initializes a new connection to a host and port.
- [init(to:using:)](init%28to_using_%29.md): Initializes a new connection to a remote endpoint.
- [restart()](restart%28%29.md): Restarts a connection that is in the waiting state.
