> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/results](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/results)

# HKQuantitySeriesSampleQueryDescriptor.Results

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An asynchronous sequence that emits data from the quantity series query.

## Declaration

```swift
struct Results
```

## Topics

### Creating an Iterator

- [HKQuantitySeriesSampleQueryDescriptor.Results.Iterator](results/iterator.md): An iterator for accessing individual data entries from the series.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Running Queries

- [results(for:)](results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of matching series samples.
- [HKQuantitySeriesSampleQueryDescriptor.Result](result.md): A set of results from a quantity series sample descriptor.
