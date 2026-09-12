> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/queue](https://developer.apple.com/documentation/network/nwconnection/queue)

# queue

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The queue on which connection events are delivered.

## Declaration

```swift
final var queue: DispatchQueue? { get }
```

## See Also

### Inspecting Connections

- [metadata(definition:)](metadata%28definition_%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [NWProtocolMetadata](../nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.
- [endpoint](endpoint.md): The remote endpoint with which the connection was initialized.
- [parameters](parameters.md): The parameters with which the connection was initialized.
