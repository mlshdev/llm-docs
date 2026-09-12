> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneconfiguration/quantitytype](https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration/quantitytype)

# quantityType

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that specifies the quantity type to which the zones apply.

## Declaration

```swift
var quantityType: HKQuantityType { get }
```

<a id="discussion"></a>

## Discussion

Workout zones support the heart rate and cycling power quantity types.

## See Also

### Accessing configuration properties

- [zones](zones.md): A property that contains the workout zones, ordered from lowest to highest threshold.
