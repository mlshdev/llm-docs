> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkasyncquery](https://developer.apple.com/documentation/healthkit/hkasyncquery)

# HKAsyncQuery

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A protocol that defines an asynchronous method for running queries.

## Declaration

```swift
protocol HKAsyncQuery
```

## Mentioned In

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md)

## Topics

### Running Queries

- [Output](hkasyncquery/output.md)
- [result(for:)](hkasyncquery/result%28for_%29.md): Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

## Relationships

### Conforming Types

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md)
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md)
- [HKSampleQueryDescriptor](hksamplequerydescriptor.md)
- [HKSourceQueryDescriptor](hksourcequerydescriptor.md)
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md)
- [HKStatisticsQueryDescriptor](hkstatisticsquerydescriptor.md)
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)
- [HKVerifiableClinicalRecordQueryDescriptor](hkverifiableclinicalrecordquerydescriptor.md)
- [HKWorkoutEffortRelationshipQueryDescriptor](hkworkouteffortrelationshipquerydescriptor.md)

## See Also

### Swift concurrency support

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md): Use Swift concurrency to manage one-shot and long-running queries.
- [HKAsyncSequenceQuery](hkasyncsequencequery.md): A protocol that defines a method for running queries that returns results using an asynchronous sequence.
- [HKSamplePredicate](hksamplepredicate.md): A predicate for queries that return a collection of matching sample objects.
