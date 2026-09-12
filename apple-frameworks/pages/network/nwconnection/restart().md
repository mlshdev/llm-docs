> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/restart()](https://developer.apple.com/documentation/network/nwconnection/restart())

# restart()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Restarts a connection that is in the waiting state.

## Declaration

```swift
final func restart()
```

<a id="Discussion"></a>

## Discussion

Restart a connection when it is in the waiting state and you have reason to believe the connection may succeed if it tries again. Connections that are waiting will automatically restart on network path changes.

## See Also

### Creating Connections

- [init(host:port:using:)](init%28host_port_using_%29.md): Initializes a new connection to a host and port.
- [init(to:using:)](init%28to_using_%29.md): Initializes a new connection to a remote endpoint.
- [start(queue:)](start%28queue_%29.md): Starts establishing a connection, and sets the queue on which to deliver all connection events.
