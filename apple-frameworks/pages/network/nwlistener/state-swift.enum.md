> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/state-swift.enum](https://developer.apple.com/documentation/network/nwlistener/state-swift.enum)

# NWListener.State

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

States indicating whether a listener is able to accept incoming connections.

## Declaration

```swift
enum State
```

## Topics

### States

- [NWListener.State.setup](state-swift.enum/setup.md): The listener has been initialized but not started.
- [NWListener.State.waiting(\_:)](state-swift.enum/waiting%28__%29.md): The listener is waiting for a network to become available.
- [NWListener.State.ready](state-swift.enum/ready.md): The listener is running and able to receive incoming connections.
- [NWListener.State.failed(\_:)](state-swift.enum/failed%28__%29.md): The listener has encountered a fatal error.
- [NWListener.State.cancelled](state-swift.enum/cancelled.md): The listener has been canceled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Listeners

- [init(using:on:)](init%28using_on_%29.md): Initializes a network listener, with an optional local port.
- [start(queue:)](start%28queue_%29.md): Registers for listening, and sets the queue on which all listener events are delivered.
- [stateUpdateHandler](stateupdatehandler.md): A handler that receives listener state updates.
- [port](port.md): The port on which the listener can accept connections.
- [cancel()](cancel%28%29.md): Stops listening for inbound connections.
