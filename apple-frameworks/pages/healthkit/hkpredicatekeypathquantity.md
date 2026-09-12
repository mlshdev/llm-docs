> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathquantity](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathquantity)

# HKPredicateKeyPathQuantity (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The key path for accessing the sample’s quantity.

## Declaration

```swift
let HKPredicateKeyPathQuantity: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

Alternatively, use the [predicateForQuantitySamples(with:quantity:)](hkquery/predicateforquantitysamples%28with_quantity_%29.md) method to create predicates that match a sample’s quantity.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCount](hkpredicatekeypathcount.md): A key path for the sample’s count.

# HKPredicateKeyPathQuantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The key path for accessing the sample’s quantity.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathQuantity;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

Alternatively, use the [predicateForQuantitySamplesWithOperatorType:quantity:](hkquery/predicateforquantitysamples%28with_quantity_%29.md) method to create predicates that match a sample’s quantity.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCount](hkpredicatekeypathcount.md): A key path for the sample’s count.
