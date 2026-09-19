> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwconnection/contentcontext/protocolmetadata(definition:)

# protocolMetadata(definition:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retreives the metadata associated with a specific protocol.

## Declaration

```swift
func protocolMetadata(definition: NWProtocolDefinition) -> NWProtocolMetadata?
```

## See Also

### Inspecting Receive Contexts

- [isFinal](isfinal.md): A Boolean indicating whether this context represents the final message being sent or received.
