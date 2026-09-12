> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/multipathservicetype-swift.enum/interactive](https://developer.apple.com/documentation/network/nwparameters/multipathservicetype-swift.enum/interactive)

# NWParameters.MultipathServiceType.interactive

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enable multipath to use other interfaces when the primary interface encounters loss or delay.

## Declaration

```swift
case interactive
```

## See Also

### Multipath Service Types

- [NWParameters.MultipathServiceType.disabled](disabled.md): Disable multipath.
- [NWParameters.MultipathServiceType.handover](handover.md): Enable multipath, but only use other interfaces when the primary interface is lost.
- [NWParameters.MultipathServiceType.aggregate](aggregate.md): Enable multipath to maximize bandwidth across multiple interfaces.
