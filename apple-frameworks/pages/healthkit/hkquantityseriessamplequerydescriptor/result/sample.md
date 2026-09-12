> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/result/sample](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/result/sample)

# sample

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

The quantity sample that owns the series of data entries.

## Declaration

```swift
let sample: HKQuantitySample?
```

<a id="Discussion"></a>

## Discussion

HealthKit sets this value to `nil` unless you included the [includeSample](../options-swift.struct/includesample.md) option when you created the series query descriptor.

## See Also

### Accessing Sample Data

- [quantity](quantity.md): The quantity stored by the data entry.
- [dateInterval](dateinterval.md): The date interval for the entry.
