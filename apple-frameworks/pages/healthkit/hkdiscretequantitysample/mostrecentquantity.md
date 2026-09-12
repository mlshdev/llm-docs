> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdiscretequantitysample/mostrecentquantity](https://developer.apple.com/documentation/healthkit/hkdiscretequantitysample/mostrecentquantity)

# mostRecentQuantity (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The most recent quantity contained by the sample.

## Declaration

```swift
@NSCopying var mostRecentQuantity: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

The sample sorts its contained quantities based on the [startDate](../../foundation/nsdateinterval/startdate.md) property for the quantity’s date interval.

## See Also

### Accessing Calculated Values

- [averageQuantity](averagequantity.md): The average of all quantities contained by the sample.
- [maximumQuantity](maximumquantity.md): The maximum quantity contained by the sample.
- [minimumQuantity](minimumquantity.md): The minimum value contained by the sample.
- [mostRecentQuantityDateInterval](mostrecentquantitydateinterval.md): The date interval for the most recent quantity contained by the sample.

# mostRecentQuantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The most recent quantity contained by the sample.

## Declaration

```objectivec
@property (copy, readonly) HKQuantity * mostRecentQuantity;
```

<a id="Discussion"></a>

## Discussion

The sample sorts its contained quantities based on the [startDate](../../foundation/nsdateinterval/startdate.md) property for the quantity’s date interval.

## See Also

### Accessing Calculated Values

- [averageQuantity](averagequantity.md): The average of all quantities contained by the sample.
- [maximumQuantity](maximumquantity.md): The maximum quantity contained by the sample.
- [minimumQuantity](minimumquantity.md): The minimum value contained by the sample.
- [mostRecentQuantityDateInterval](mostrecentquantitydateinterval.md): The date interval for the most recent quantity contained by the sample.
