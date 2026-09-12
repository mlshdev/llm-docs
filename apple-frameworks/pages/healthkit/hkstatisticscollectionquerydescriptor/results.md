> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquerydescriptor/results](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/results)

# HKStatisticsCollectionQueryDescriptor.Results

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An asynchronous sequence that emits updates from a statistics collection query.

## Declaration

```swift
struct Results
```

<a id="Creating-an-Iterator"></a>

### Creating an Iterator

- [HKStatisticsCollectionQueryDescriptor.Results.Iterator](results/iterator.md)

## Topics

### Structures

- [HKStatisticsCollectionQueryDescriptor.Results.Iterator](results/iterator.md): An iterator for statistics collection query results.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Running Queries

- [result(for:)](result%28for_%29.md): Runs a one-shot query and asynchronously returns statistics calculated from the current matching results.
- [results(for:)](results%28for_%29.md): Initiates a long-running query that returns statistics and updates using an asynchronous sequence.
