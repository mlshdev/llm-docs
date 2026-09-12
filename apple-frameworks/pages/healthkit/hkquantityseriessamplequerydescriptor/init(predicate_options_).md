> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/init(predicate:options:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/init(predicate:options:))

# init(predicate:options:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a quantity series query descriptor.

## Declaration

```swift
init(predicate: HKSamplePredicate<HKQuantitySample>, options: HKQuantitySeriesSampleQueryDescriptor.Options = [])
```

## Parameters

- `predicate`: A predicate that defines the set of series samples that the query returns. For a list of convenience methods for building predicates, see [HKQuery](../hkquery.md).
- `options`: A set of options for the query. For a list of possible values, see [HKQuantitySeriesSampleQueryDescriptor.Options](options-swift.struct.md).

## See Also

### Creating Series Query Descriptors

- [HKQuantitySeriesSampleQueryDescriptor.Options](options-swift.struct.md): Options used when querying series data.
