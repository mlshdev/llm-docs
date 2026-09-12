> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/init(to:using:)](https://developer.apple.com/documentation/network/nwconnection/init(to:using:))

# init(to:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a new connection to a remote endpoint.

## Declaration

```swift
init(to: NWEndpoint, using: NWParameters)
```

## See Also

### Creating Connections

- [init(host:port:using:)](init%28host_port_using_%29.md): Initializes a new connection to a host and port.
- [start(queue:)](start%28queue_%29.md): Starts establishing a connection, and sets the queue on which to deliver all connection events.
- [restart()](restart%28%29.md): Restarts a connection that is in the waiting state.
