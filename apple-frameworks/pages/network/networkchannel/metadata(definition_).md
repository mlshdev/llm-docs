> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkchannel/metadata(definition:)

# metadata(definition:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access connection-wide protocol metadata on the connection. This allows access to state for protocols like TCP and TLS that have long-term state.

## Declaration

```swift
func metadata(definition: NWProtocolDefinition) -> NWProtocolMetadata?
```
