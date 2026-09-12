> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforquantitysamples(with:quantity:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforquantitysamples(with:quantity:))

# predicateForQuantitySamples(with:quantity:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches samples based on the target quantity.

## Declaration

```swift
class func predicateForQuantitySamples(with operatorType: NSComparisonPredicate.Operator, quantity: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the sample’s quantity to the target quantity.
- `quantity`: The target quantity object.

<a id="return-value"></a>

## Return Value

A predicate that matches samples based on the target quantity. This predicate works only on quantity samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a sample’s quantity. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let targetWeight = HKQuantity(unit: HKUnit.poundUnit(),
                              doubleValue: 150.0)
 
let underTargetWeight =
    HKQuery.predicateForQuantitySamplesWithOperatorType(
        .LessThanOrEqualToPredicateOperatorType,
        quantity: targetWeight)
 
 
let explicitUnderTargetWeight = NSPredicate(format: "%K <= %@",
                                            HKPredicateKeyPathQuantity,
                                            targetWeight)
```

**Objective-C**

```objc
HKQuantity *targetWeight =
[HKQuantity quantityWithUnit:[HKUnit poundUnit]
                 doubleValue:150.0];
 
NSPredicate *underTargetWeight =
[HKQuery predicateForQuantitySamplesWithOperatorType:
    NSLessThanOrEqualToPredicateOperatorType
    quantity:targetWeight];
 
NSPredicate *explicitUnderTargetWeight =
[NSPredicate predicateWithFormat:@"%K <= %@",
 HKPredicateKeyPathQuantity,
 targetWeight];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathQuantity](../hkpredicatekeypathquantity.md): The key path for accessing the sample’s quantity.
- [quantity](../hkquantitysample/quantity.md): The quantity for this sample.

# predicateForQuantitySamplesWithOperatorType:quantity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches samples based on the target quantity.

## Declaration

```objectivec
+ (NSPredicate *) predicateForQuantitySamplesWithOperatorType:(NSPredicateOperatorType) operatorType quantity:(HKQuantity *) quantity;
```

## Parameters

- `operatorType`: The operator type to use when comparing the sample’s quantity to the target quantity.
- `quantity`: The target quantity object.

<a id="return-value"></a>

## Return Value

A predicate that matches samples based on the target quantity. This predicate works only on quantity samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a sample’s quantity. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let targetWeight = HKQuantity(unit: HKUnit.poundUnit(),
                              doubleValue: 150.0)
 
let underTargetWeight =
    HKQuery.predicateForQuantitySamplesWithOperatorType(
        .LessThanOrEqualToPredicateOperatorType,
        quantity: targetWeight)
 
 
let explicitUnderTargetWeight = NSPredicate(format: "%K <= %@",
                                            HKPredicateKeyPathQuantity,
                                            targetWeight)
```

**Objective-C**

```objc
HKQuantity *targetWeight =
[HKQuantity quantityWithUnit:[HKUnit poundUnit]
                 doubleValue:150.0];
 
NSPredicate *underTargetWeight =
[HKQuery predicateForQuantitySamplesWithOperatorType:
    NSLessThanOrEqualToPredicateOperatorType
    quantity:targetWeight];
 
NSPredicate *explicitUnderTargetWeight =
[NSPredicate predicateWithFormat:@"%K <= %@",
 HKPredicateKeyPathQuantity,
 targetWeight];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathQuantity](../hkpredicatekeypathquantity.md): The key path for accessing the sample’s quantity.
- [quantity](../hkquantitysample/quantity.md): The quantity for this sample.
