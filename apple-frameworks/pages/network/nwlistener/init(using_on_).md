> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwlistener/init(using:on:)

# init(using:on:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a network listener, with an optional local port.

## Declaration

```swift
init(using: NWParameters, on: NWEndpoint.Port = .any) throws
```

## See Also

### Creating Listeners

- [start(queue:)](start%28queue_%29.md): Registers for listening, and sets the queue on which all listener events are delivered.
- [stateUpdateHandler](stateupdatehandler.md): A handler that receives listener state updates.
- [NWListener.State](state-swift.enum.md): States indicating whether a listener is able to accept incoming connections.
- [port](port.md): The port on which the listener can accept connections.
- [cancel()](cancel%28%29.md): Stops listening for inbound connections.
