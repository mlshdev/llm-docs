> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummaryquerydescriptor](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquerydescriptor)

# HKActivitySummaryQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that reads activity summaries using Swift concurrency.

## Declaration

```swift
struct HKActivitySummaryQueryDescriptor
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)
- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md)

<a id="overview"></a>

## Overview

Use [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md) to run a query that reads activity summary objects from the HealthKit store. To get a snapshot of activity summaries currently in the store, create a descriptor and call its [result(for:)](hkactivitysummaryquerydescriptor/result%28for_%29.md) method.

```swift
// Get the start and end date components.
let calendar = Calendar(identifier: .gregorian)

var startComponents = calendar.dateComponents([.day, .month, .year], from: Date())
startComponents.hour = 0
startComponents.minute = 0
startComponents.second = 0

var endComponents = startComponents
endComponents.day = 1 + (endComponents.day ?? 0)

// Create a predicate for the query.
let today = HKQuery.predicate(forActivitySummariesBetweenStart: startComponents, end: endComponents)

// Create the descriptor.
let activeSummaryDescriptor = HKActivitySummaryQueryDescriptor(predicate:today)

// Run the query.
let results = try await activeSummaryDescriptor.result(for: store)
```

To set up a long-running query that returns both matching values currently in the HealthKit store, and any updates that arrive while the query is running, call the [results(for:)](hkasyncsequencequery/results%28for_%29.md) method instead.

```swift
// Run a long-running query and monitor for updates.
let updateQueue = activeSummaryDescriptor.results(for: store)

// Wait for the initial results and updates.
updateTask = Task {
    for try await results in updateQueue {
        // Process results here.
    }
}
```

## Topics

### Creating query descriptors

- [init(predicate:)](hkactivitysummaryquerydescriptor/init%28predicate_%29.md): Instantiates an activity summary query descriptor.

### Running queries

- [result(for:)](hkactivitysummaryquerydescriptor/result%28for_%29.md): Runs a one-shot query and asynchronously returns a snapshot of the current matching results.
- [results(for:)](hkactivitysummaryquerydescriptor/results%28for_%29.md): Initiates a long-running query that returns its results using an asynchronous sequence.
- [HKActivitySummaryQueryDescriptor.Results](hkactivitysummaryquerydescriptor/results.md): An asynchronous sequence that emits updates from an activity summary query.

### Accessing query properties

- [predicate](hkactivitysummaryquerydescriptor/predicate.md): A predicate that limits the results that the query returned.

### Default Implementations

- [HKAsyncQuery Implementations](hkactivitysummaryquerydescriptor/hkasyncquery-implementations.md)
- [HKAsyncSequenceQuery Implementations](hkactivitysummaryquerydescriptor/hkasyncsequencequery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)
- [HKAsyncSequenceQuery](hkasyncsequencequery.md)

## See Also

### Long-running queries

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md): A query interface that runs anchored object queries using Swift concurrency.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
