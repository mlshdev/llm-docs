> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/init(host:port:using:)](https://developer.apple.com/documentation/network/nwconnection/init(host:port:using:))

# init(host:port:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a new connection to a host and port.

## Declaration

```swift
convenience init(host: NWEndpoint.Host, port: NWEndpoint.Port, using: NWParameters)
```

## See Also

### Creating Connections

- [init(to:using:)](init%28to_using_%29.md): Initializes a new connection to a remote endpoint.
- [start(queue:)](start%28queue_%29.md): Starts establishing a connection, and sets the queue on which to deliver all connection events.
- [restart()](restart%28%29.md): Restarts a connection that is in the waiting state.
