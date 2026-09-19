> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocoludp/options/prefernochecksum

# preferNoChecksum

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean that configures the connection to not send UDP checksums.

## Declaration

```swift
var preferNoChecksum: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

UDP checksums are optional when the datagrams are sent over IPv4. This option configures UDP to not set checksums on these datagrams, but has no effect on IPv6.

## See Also

### Customizing UDP Connections

- [init()](init%28%29.md): Initializes a default set of UDP connection options.
