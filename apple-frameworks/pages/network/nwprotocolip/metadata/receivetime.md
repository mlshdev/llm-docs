> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolip/metadata/receivetime

# receiveTime

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The time at which a packet was received, in nanoseconds, based on `CLOCK_MONOTONIC_RAW`.

## Declaration

```swift
var receiveTime: UInt64 { get }
```

## See Also

### Related Documentation

- [shouldCalculateReceiveTime](../options/shouldcalculatereceivetime.md): A Boolean that indicates whether a connection delivers receive timestamps for IP packets.
