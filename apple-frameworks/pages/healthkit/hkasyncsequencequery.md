> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkasyncsequencequery](https://developer.apple.com/documentation/healthkit/hkasyncsequencequery)

# HKAsyncSequenceQuery

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A protocol that defines a method for running queries that returns results using an asynchronous sequence.

## Declaration

```swift
protocol HKAsyncSequenceQuery
```

## Mentioned In

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md)

## Topics

### Running Queries

- [Sequence](hkasyncsequencequery/sequence.md)
- [results(for:)](hkasyncsequencequery/results%28for_%29.md): Initiates a query that returns its results using an asynchronous sequence.

## Relationships

### Conforming Types

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md)
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md)
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md)
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md)
- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md)
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md)
- [HKWorkoutEffortRelationshipQueryDescriptor](hkworkouteffortrelationshipquerydescriptor.md)
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md)

## See Also

### Swift concurrency support

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md): Use Swift concurrency to manage one-shot and long-running queries.
- [HKAsyncQuery](hkasyncquery.md): A protocol that defines an asynchronous method for running queries.
- [HKSamplePredicate](hksamplepredicate.md): A predicate for queries that return a collection of matching sample objects.
