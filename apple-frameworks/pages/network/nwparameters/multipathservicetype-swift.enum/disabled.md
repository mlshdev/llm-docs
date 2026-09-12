> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/multipathservicetype-swift.enum/disabled](https://developer.apple.com/documentation/network/nwparameters/multipathservicetype-swift.enum/disabled)

# NWParameters.MultipathServiceType.disabled

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Disable multipath.

## Declaration

```swift
case disabled
```

## See Also

### Multipath Service Types

- [NWParameters.MultipathServiceType.handover](handover.md): Enable multipath, but only use other interfaces when the primary interface is lost.
- [NWParameters.MultipathServiceType.interactive](interactive.md): Enable multipath to use other interfaces when the primary interface encounters loss or delay.
- [NWParameters.MultipathServiceType.aggregate](aggregate.md): Enable multipath to maximize bandwidth across multiple interfaces.
