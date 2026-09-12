> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/results(for:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/results(for:))

# results(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query that returns an asynchronous sequence of matching series samples.

## Declaration

```swift
func results(for healthStore: HKHealthStore) -> HKQuantitySeriesSampleQueryDescriptor.Results
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running Queries

- [HKQuantitySeriesSampleQueryDescriptor.Results](results.md): An asynchronous sequence that emits data from the quantity series query.
- [HKQuantitySeriesSampleQueryDescriptor.Result](result.md): A set of results from a quantity series sample descriptor.
