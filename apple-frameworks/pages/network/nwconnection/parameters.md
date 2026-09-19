> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwconnection/parameters

# parameters

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The parameters with which the connection was initialized.

## Declaration

```swift
final let parameters: NWParameters
```

## See Also

### Inspecting Connections

- [metadata(definition:)](metadata%28definition_%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [NWProtocolMetadata](../nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.
- [endpoint](endpoint.md): The remote endpoint with which the connection was initialized.
- [queue](queue.md): The queue on which connection events are delivered.
