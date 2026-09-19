> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparameters/multipathservicetype-swift.enum/aggregate

# NWParameters.MultipathServiceType.aggregate

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enable multipath to maximize bandwidth across multiple interfaces.

## Declaration

```swift
case aggregate
```

## See Also

### Multipath Service Types

- [NWParameters.MultipathServiceType.disabled](disabled.md): Disable multipath.
- [NWParameters.MultipathServiceType.handover](handover.md): Enable multipath, but only use other interfaces when the primary interface is lost.
- [NWParameters.MultipathServiceType.interactive](interactive.md): Enable multipath to use other interfaces when the primary interface encounters loss or delay.
