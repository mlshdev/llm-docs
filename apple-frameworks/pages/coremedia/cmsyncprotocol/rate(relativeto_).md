> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncprotocol/rate(relativeto:)](https://developer.apple.com/documentation/coremedia/cmsyncprotocol/rate(relativeto:))

# rate(relativeTo:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Queries the relative rate of one timebase or clock relative to another timebase or clock.

## Declaration

```swift
func rate<T>(relativeTo clockOrTimebase: T) -> Double where T : CMSyncProtocol
```

## Parameters

- `clockOrTimebase`: The clock to compare to.

## See Also

### Getting the Time Rate

- [rateAndAnchorTime(relativeTo:)](rateandanchortime%28relativeto_%29.md): Queries the relative rate of one timebase or clock relative to another timebase or clock, and the times of each timebase or clock at which the relative rate went into effect.
