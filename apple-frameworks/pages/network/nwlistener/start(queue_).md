> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/start(queue:)](https://developer.apple.com/documentation/network/nwlistener/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Registers for listening, and sets the queue on which all listener events are delivered.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Creating Listeners

- [init(using:on:)](init%28using_on_%29.md): Initializes a network listener, with an optional local port.
- [stateUpdateHandler](stateupdatehandler.md): A handler that receives listener state updates.
- [NWListener.State](state-swift.enum.md): States indicating whether a listener is able to accept incoming connections.
- [port](port.md): The port on which the listener can accept connections.
- [cancel()](cancel%28%29.md): Stops listening for inbound connections.
