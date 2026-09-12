> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitysample/quantitytype](https://developer.apple.com/documentation/healthkit/hkquantitysample/quantitytype)

# quantityType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity type for this sample.

## Declaration

```swift
@NSCopying var quantityType: HKQuantityType { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [sampleType](../hksample/sampletype.md) property that is cast as an [HKQuantityType](../hkquantitytype.md) object.

## See Also

### Getting Property Data

- [quantity](quantity.md): The quantity for this sample.
- [count](count.md): The number of quantities contained in this sample.

# quantityType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The quantity type for this sample.

## Declaration

```objectivec
@property (copy, readonly) HKQuantityType * quantityType;
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [sampleType](../hksample/sampletype.md) property that is cast as an [HKQuantityType](../hkquantitytype.md) object.

## See Also

### Getting Property Data

- [quantity](quantity.md): The quantity for this sample.
- [count](count.md): The number of quantities contained in this sample.
