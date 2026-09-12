> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneconfiguration/zones](https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration/zones)

# zones

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that contains the workout zones, ordered from lowest to highest threshold.

## Declaration

```swift
let zones: [HKWorkoutZone]
```

<a id="discussion"></a>

## Discussion

Each zone in this array represents a contiguous range within the configuration.

## See Also

### Accessing configuration properties

- [quantityType](quantitytype.md): A property that specifies the quantity type to which the zones apply.
