> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/port](https://developer.apple.com/documentation/network/nwlistener/port)

# port

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The port on which the listener can accept connections.

## Declaration

```swift
final var port: NWEndpoint.Port? { get }
```

<a id="Discussion"></a>

## Discussion

The listener’s port is available once the listener is in the ready state.

## See Also

### Creating Listeners

- [init(using:on:)](init%28using_on_%29.md): Initializes a network listener, with an optional local port.
- [start(queue:)](start%28queue_%29.md): Registers for listening, and sets the queue on which all listener events are delivered.
- [stateUpdateHandler](stateupdatehandler.md): A handler that receives listener state updates.
- [NWListener.State](state-swift.enum.md): States indicating whether a listener is able to accept incoming connections.
- [cancel()](cancel%28%29.md): Stops listening for inbound connections.
