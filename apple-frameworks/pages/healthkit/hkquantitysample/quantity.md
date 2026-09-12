> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitysample/quantity](https://developer.apple.com/documentation/healthkit/hkquantitysample/quantity)

# quantity (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity for this sample.

## Declaration

```swift
@NSCopying var quantity: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

If the sample contains more than one quantity, this property returns the sum or average, depending on the sample’s aggregation style (sum for cumulative, average for discrete). To access the individual quantities, use an [HKQuantitySeriesSampleQuery](../hkquantityseriessamplequery.md).

To see the type of units compatible with this quantity, look up the sample’s quantity type identifier in [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

## See Also

### Getting Property Data

- [count](count.md): The number of quantities contained in this sample.
- [quantityType](quantitytype.md): The quantity type for this sample.

# quantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity for this sample.

## Declaration

```objectivec
@property (copy, readonly) HKQuantity * quantity;
```

<a id="Discussion"></a>

## Discussion

If the sample contains more than one quantity, this property returns the sum or average, depending on the sample’s aggregation style (sum for cumulative, average for discrete). To access the individual quantities, use an [HKQuantitySeriesSampleQuery](../hkquantityseriessamplequery.md).

To see the type of units compatible with this quantity, look up the sample’s quantity type identifier in [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

## See Also

### Getting Property Data

- [count](count.md): The number of quantities contained in this sample.
- [quantityType](quantitytype.md): The quantity type for this sample.
