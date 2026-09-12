> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(_:value:)](https://developer.apple.com/documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(_:value:))

# predicateForSamples(\_:value:)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Returns a predicate that checks a category sample’s value.

## Declaration

```swift
static func predicateForSamples(_ operatorType: NSComparisonPredicate.Operator, value: Self) -> NSPredicate
```

## Parameters

- `operatorType`: The type of operation to perform when matching the category sample’s value against the target value. For a list of possible operators, see [NSComparisonPredicate.Operator.contains](../../foundation/nscomparisonpredicate/operator/contains.md).
- `value`: The category sample’s target value. Use an enumeration value appropriate for the type of category samples you’re working with. For example, a predicate for sleep analysis samples use values from the [HKCategoryValueSleepAnalysis](../hkcategoryvaluesleepanalysis.md) enumeration.

## See Also

### Creating predicates

- [predicateForSamples(equalTo:)](predicateforsamples%28equalto_%29.md): Conforms when `RawValue` is `Int`. Returns a predicate that checks whether a category sample is equal to the provided set of values.
