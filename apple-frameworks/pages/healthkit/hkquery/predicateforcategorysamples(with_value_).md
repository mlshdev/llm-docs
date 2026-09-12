> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforcategorysamples(with:value:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforcategorysamples(with:value:))

# predicateForCategorySamples(with:value:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a predicate that checks a category sample’s value.

> Use [predicateForSamples(\_:value:)](../hkcategoryvaluepredicateproviding/predicateforsamples%28__value_%29.md) instead.

## Declaration

```swift
class func predicateForCategorySamples(with operatorType: NSComparisonPredicate.Operator, value: Int) -> NSPredicate
```

## Parameters

- `operatorType`: The type of operation to perform when matching the category sample’s value against the target value. For a list of possible operators, see [NSComparisonPredicate.Operator.contains](../../foundation/nscomparisonpredicate/operator/contains.md).
- `value`: The category sample’s target value. Use an enumeration value appropriate for the type of category samples you are working with. For example, a predicate for sleep analysis samples use values from the [HKCategoryValueSleepAnalysis](../hkcategoryvaluesleepanalysis.md) enumeration.

<a id="return-value"></a>

## Return Value

A predicate that matches category samples based on the provided expression. This predicate works only with category samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that checks a category sample’s value. The following listing uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let asleep = HKQuery.predicateForCategorySamplesWithOperatorType(
    .EqualToPredicateOperatorType,
    value: HKCategoryValueSleepAnalysis.Asleep.rawValue)
 
let explicitAsleep =
    NSPredicate(format: "%K == %d",
                HKPredicateKeyPathCategoryValue,
                HKCategoryValueSleepAnalysis.Asleep.rawValue)
```

**Objective-C**

```objc
NSPredicate *asleep =
    [HKQuery
     predicateForCategorySamplesWithOperatorType:NSEqualToPredicateOperatorType
     value:HKCategoryValueSleepAnalysisAsleep];
 
NSPredicate *explicitAsleep =
    [NSPredicate predicateWithFormat:@"%K == %d",
     HKPredicateKeyPathCategoryValue,
     HKCategoryValueSleepAnalysisAsleep];
```

## See Also

### Related Documentation

- [value](../hkcategorysample/value.md): The category value for this sample.
- [HKPredicateKeyPathCategoryValue](../hkpredicatekeypathcategoryvalue.md): The key path for accessing the category sample’s value.

### Creating category sample predicates

- [HKCategoryValuePredicateProviding](../hkcategoryvaluepredicateproviding.md): A protocol for objects that produce predicates that match category value samples.

# predicateForCategorySamplesWithOperatorType:value: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that checks a category sample’s value.

## Declaration

```objectivec
+ (NSPredicate *) predicateForCategorySamplesWithOperatorType:(NSPredicateOperatorType) operatorType value:(NSInteger) value;
```

## Parameters

- `operatorType`: The type of operation to perform when matching the category sample’s value against the target value. For a list of possible operators, see [NSContainsPredicateOperatorType](../../foundation/nscomparisonpredicate/operator/contains.md).
- `value`: The category sample’s target value. Use an enumeration value appropriate for the type of category samples you are working with. For example, a predicate for sleep analysis samples use values from the [HKCategoryValueSleepAnalysis](../hkcategoryvaluesleepanalysis.md) enumeration.

<a id="return-value"></a>

## Return Value

A predicate that matches category samples based on the provided expression. This predicate works only with category samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that checks a category sample’s value. The following listing uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let asleep = HKQuery.predicateForCategorySamplesWithOperatorType(
    .EqualToPredicateOperatorType,
    value: HKCategoryValueSleepAnalysis.Asleep.rawValue)
 
let explicitAsleep =
    NSPredicate(format: "%K == %d",
                HKPredicateKeyPathCategoryValue,
                HKCategoryValueSleepAnalysis.Asleep.rawValue)
```

**Objective-C**

```objc
NSPredicate *asleep =
    [HKQuery
     predicateForCategorySamplesWithOperatorType:NSEqualToPredicateOperatorType
     value:HKCategoryValueSleepAnalysisAsleep];
 
NSPredicate *explicitAsleep =
    [NSPredicate predicateWithFormat:@"%K == %d",
     HKPredicateKeyPathCategoryValue,
     HKCategoryValueSleepAnalysisAsleep];
```

## See Also

### Related Documentation

- [value](../hkcategorysample/value.md): The category value for this sample.
- [HKPredicateKeyPathCategoryValue](../hkpredicatekeypathcategoryvalue.md): The key path for accessing the category sample’s value.

### Creating category sample predicates

- [predicateForCategorySamplesEqualToValues:](predicateforcategorysamplesequaltovalues_.md): A predicate that returns category samples with a matching value.
