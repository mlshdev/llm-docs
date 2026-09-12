> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor/results](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/results)

# HKAnchoredObjectQueryDescriptor.Results

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An asynchronous sequence that emits updates from an anchored object query.

## Declaration

```swift
struct Results
```

## Topics

### Creating an Iterator

- [HKAnchoredObjectQueryDescriptor.Results.Iterator](results/iterator.md): An iterator for accessing anchored object results.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Running Queries

- [result(for:)](result%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Runs a one-shot query and asynchronously returns a snapshot of the current matching results.
- [results(for:)](results%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Initiates a long-running query that returns its results using an asynchronous sequence.
- [HKAnchoredObjectQueryDescriptor.Result](result.md): A set of results from an anchored object query.
