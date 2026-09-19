> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolframer/instance/prependapplicationprotocol(options:)

# prependApplicationProtocol(options:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Dynamically adds another protocol that will run above your protocol after your protocol calls [markReady()](markready%28%29.md).

## Declaration

```swift
final func prependApplicationProtocol(options: NWProtocolOptions) throws
```

## See Also

### Managing Instance Lifetime

- [markReady()](markready%28%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [markFailed(error:)](markfailed%28error_%29.md): Indicates to a connection that your protocol has encountered an error, or has gracefully closed.
