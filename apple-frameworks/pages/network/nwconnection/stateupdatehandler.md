> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwconnection/stateupdatehandler

# stateUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handler that receives connection state updates.

## Declaration

```swift
@preconcurrency final var stateUpdateHandler: (@Sendable (NWConnection.State) -> Void)? { get set }
```

## See Also

### Handling State Updates

- [state](state-swift.property.md): The current state of the connection.
- [NWConnection.State](state-swift.enum.md): States indicating whether a connection can be used to send and receive data.
