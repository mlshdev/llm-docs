> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutzone/minimum

# minimum

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The minimum threshold for the zone.

## Declaration

```swift
var minimum: HKQuantity? { get }
```

<a id="discussion"></a>

## Discussion

If `nil`, the zone has no lower bound.

## See Also

### Accessing zone properties

- [index](index.md): The zero-based index of the zone within the containing zone configuration, ordered from lowest to highest threshold.
- [maximum](maximum.md): The maximum threshold for the zone.
