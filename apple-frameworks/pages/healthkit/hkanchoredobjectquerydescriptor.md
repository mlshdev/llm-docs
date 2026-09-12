> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor)

# HKAnchoredObjectQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that runs anchored object queries using Swift concurrency.

## Declaration

```swift
struct HKAnchoredObjectQueryDescriptor<Sample> where Sample : HKSample
```

## Mentioned In

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md)
- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use  [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md) to read any changes to the HealthKit store that occurred after the provided anchor. When creating a new query descriptor, if you pass `nil` as the `anchor` parameter, the query reads all matching data from the store.

There are two common use cases for anchored object queries:

- Batch-read all the matching data from the HealthKit store using a series of [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md) instances.
- Monitor the HealthKit store for any changes to the matching data using a long-running [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md) instance.

<a id="Batch-Read-Existing-Data"></a>

### Batch Read Existing Data

Users may have large quantities of data saved to the HealthKit store; therefore, reading all data for a given data type might become very expensive, both in terms of memory usage and processing time. To avoid performance issues, you can use [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md) queries to read the data in batches.

Start with a `nil`-valued anchor, and create a one-shot query descriptor that reads a batch of data. After you process the results from one query, start a new one-shot query for the next batch. Continue reading batches until there’s no new data.

```swift
let stepType = HKQuantityType(.stepCount)

// Start by reading all matching data.
var anchor: HKQueryAnchor? = nil
var results: HKAnchoredObjectQueryDescriptor<HKQuantitySample>.Result

repeat {
    // Create a query descriptor that reads a batch
    // of 100 matching samples.
    let anchorDescriptor =
    HKAnchoredObjectQueryDescriptor(
        predicates: [.quantitySample(type: stepType)],
        anchor: anchor,
        limit: 100
    )

    results = try await anchorDescriptor.result(for: store)
    anchor = results.newAnchor
    
    // Process the batch of results here.
    
} while (results.addedSamples != []) && (results.deletedObjects != [])
```

> **Tip**

>  Because [HKQueryAnchor](hkqueryanchor.md) instances adopt the [NSSecureCoding](../foundation/nssecurecoding.md) protocol, you can save the most recent anchor and use it the next time your app launches.

<a id="Monitor-for-Changes"></a>

### Monitor for Changes

To monitor the HealthKit store for changes, start by creating an [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md) instance that matches the data you want to monitor. Pass in the anchor from the last time you read data from the HealthKit store.

Next, call the query descriptor’s [results(for:)](hkanchoredobjectquerydescriptor/results%28for_%29.md) method to start your long-running query. This method returns an [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) instance which HealthKit uses to return `Element` instances. The first result represents any changes currently in the HealthKit store, and additional results represent changes as they occur.

```swift
let stepType = HKQuantityType(.stepCount)

// Create a query descriptor.
let anchorDescriptor =
HKAnchoredObjectQueryDescriptor(
    predicates: [.quantitySample(type: stepType)],
    anchor: anchor
)

let updateQueue = anchorDescriptor.results(for: store)

updateTask = Task {
    for try await update in updateQueue {
        // Process the update here.
        print(update)
    }
}
```

## Topics

### Creating Query Descriptors

- [init(predicates:anchor:limit:)](hkanchoredobjectquerydescriptor/init%28predicates_anchor_limit_%29.md): Creates an anchored object query descriptor.

### Running Queries

- [result(for:)](hkanchoredobjectquerydescriptor/result%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Runs a one-shot query and asynchronously returns a snapshot of the current matching results.
- [results(for:)](hkanchoredobjectquerydescriptor/results%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Initiates a long-running query that returns its results using an asynchronous sequence.
- [HKAnchoredObjectQueryDescriptor.Result](hkanchoredobjectquerydescriptor/result.md): A set of results from an anchored object query.
- [HKAnchoredObjectQueryDescriptor.Results](hkanchoredobjectquerydescriptor/results.md): Conforms when `Sample` inherits `HKSample`. An asynchronous sequence that emits updates from an anchored object query.

### Accessing Query Properties

- [predicates](hkanchoredobjectquerydescriptor/predicates.md): A predicate that limits the results that the query returns.
- [anchor](hkanchoredobjectquerydescriptor/anchor.md): An anchor that a previous anchored object query returned.
- [limit](hkanchoredobjectquerydescriptor/limit.md): The maximum number of samples that the query returns.

### Default Implementations

- [HKAsyncQuery Implementations](hkanchoredobjectquerydescriptor/hkasyncquery-implementations.md)
- [HKAsyncSequenceQuery Implementations](hkanchoredobjectquerydescriptor/hkasyncsequencequery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)
- [HKAsyncSequenceQuery](hkasyncsequencequery.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Long-running queries

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md): A query interface that reads activity summaries using Swift concurrency.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
