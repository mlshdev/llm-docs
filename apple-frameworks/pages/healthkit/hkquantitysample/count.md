> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitysample/count](https://developer.apple.com/documentation/healthkit/hkquantitysample/count)

# count (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The number of quantities contained in this sample.

## Declaration

```swift
var count: Int { get }
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)

<a id="Discussion"></a>

## Discussion

Samples created using one of the `init()` methods have a [count](count.md) of `1`. Samples created using an [HKQuantitySeriesSampleBuilder](../hkquantityseriessamplebuilder.md) may have a [count](count.md) greater than `1`.

## See Also

### Related Documentation

- [HKQuantitySeriesSampleQuery](../hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.

### Getting Property Data

- [quantity](quantity.md): The quantity for this sample.
- [quantityType](quantitytype.md): The quantity type for this sample.

# count (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The number of quantities contained in this sample.

## Declaration

```objectivec
@property (assign, readonly) NSInteger count;
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)

<a id="Discussion"></a>

## Discussion

Samples created using one of the `init()` methods have a [count](count.md) of `1`. Samples created using an [HKQuantitySeriesSampleBuilder](../hkquantityseriessamplebuilder.md) may have a [count](count.md) greater than `1`.

## See Also

### Related Documentation

- [HKQuantitySeriesSampleQuery](../hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.

### Getting Property Data

- [quantity](quantity.md): The quantity for this sample.
- [quantityType](quantitytype.md): The quantity type for this sample.
