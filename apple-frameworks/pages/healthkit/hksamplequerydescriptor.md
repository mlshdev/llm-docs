> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequerydescriptor](https://developer.apple.com/documentation/healthkit/hksamplequerydescriptor)

# HKSampleQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that reads samples using Swift concurrency.

## Declaration

```swift
struct HKSampleQueryDescriptor<Sample> where Sample : HKSample
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)
- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md)

<a id="overview"></a>

## Overview

Use [HKSampleQueryDescriptor](hksamplequerydescriptor.md) to run a general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.

```swift
// Define the type.
let stepType = HKQuantityType(.stepCount)

// Create the descriptor.
let descriptor = HKSampleQueryDescriptor(
    predicates:[.quantitySample(type: stepType)],
    sortDescriptors: [SortDescriptor(\.endDate, order: .reverse)],
    limit: 10)

// Launch the query and wait for the results.
// The system automatically sets results to [HKQuantitySample].
let results = try await descriptor.result(for: store)

for result in results {
    // Process the results here.
}
```

When you call the descriptor’s [result(for:)](hksamplequerydescriptor/result%28for_%29.md) method, it creates and executes an [HKSampleQuery](hksamplequery.md) in the background, passing the results from the query’s `resultsHandler` as its return value.

## Topics

### Creating Query Descriptors

- [init(predicates:sortDescriptors:limit:)](hksamplequerydescriptor/init%28predicates_sortdescriptors_limit_%29.md): Creates a sample query descriptor.

### Running Queries

- [result(for:)](hksamplequerydescriptor/result%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

### Accessing Query Properties

- [limit](hksamplequerydescriptor/limit.md): The maximum number of samples that the query returns.
- [predicates](hksamplequerydescriptor/predicates.md): An array of sample predicates that define the type of data that the query returns.
- [sortDescriptors](hksamplequerydescriptor/sortdescriptors.md): An array that specifies the order of the results that the query returns.

### Default Implementations

- [HKAsyncQuery Implementations](hksamplequerydescriptor/hkasyncquery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Basic queries

- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.
