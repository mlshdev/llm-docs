> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelationquery/samplepredicates](https://developer.apple.com/documentation/healthkit/hkcorrelationquery/samplepredicates)

# samplePredicates (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary whose keys are [HKSampleType](../hksampletype.md) instances and whose values are [NSPredicate](../../foundation/nspredicate.md) instances.

## Declaration

```swift
var samplePredicates: [HKSampleType : NSPredicate]? { get }
```

<a id="Discussion"></a>

## Discussion

The query uses this dictionary to perform complex tests against the correlation’s contents. For more information, see [init(type:predicate:samplePredicates:completion:)](init%28type_predicate_samplepredicates_completion_%29.md).

## See Also

### Getting Property Data

- [correlationType](correlationtype.md): The type of correlation to search for.

# samplePredicates (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary whose keys are [HKSampleType](../hksampletype.md) instances and whose values are [NSPredicate](../../foundation/nspredicate.md) instances.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<__kindof HKSampleType *,NSPredicate *> * samplePredicates;
```

<a id="Discussion"></a>

## Discussion

The query uses this dictionary to perform complex tests against the correlation’s contents. For more information, see [initWithType:predicate:samplePredicates:completion:](init%28type_predicate_samplepredicates_completion_%29.md).

## See Also

### Getting Property Data

- [correlationType](correlationtype.md): The type of correlation to search for.
