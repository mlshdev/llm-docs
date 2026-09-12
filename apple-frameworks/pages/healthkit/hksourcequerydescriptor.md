> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcequerydescriptor](https://developer.apple.com/documentation/healthkit/hksourcequerydescriptor)

# HKSourceQueryDescriptor

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A query interface that uses Swift concurrency to read the apps and devices that produced the matching samples.

## Declaration

```swift
struct HKSourceQueryDescriptor<Sample> where Sample : HKSample
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use [HKSourceQueryDescriptor](hksourcequerydescriptor.md) to run a general query that returns a snapshot of all the apps and devices that have saved matching data to the HealthKit store.

```swift
// Create the source descriptor.
let sourceDescriptor = HKSourceQueryDescriptor(predicate: .workout())

// Read the source data from the HealthKit store.
let sources = try await sourceDescriptor.result(for: store)

for source in sources {
    // Process the sources here.
    print(source)
}
```

When you call the descriptor’s [result(for:)](hksourcequerydescriptor/result%28for_%29.md) method, it creates and executes an [HKSourceQuery](hksourcequery.md) in the background, passing the results as an array of [HKSource](hksource.md) instances.

## Topics

### Creating Source Query Descriptors

- [init(predicate:)](hksourcequerydescriptor/init%28predicate_%29.md): Creates a source query descriptor.

### Running Queries

- [result(for:)](hksourcequerydescriptor/result%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Runs a one-shot query that asynchronously returns a snapshot of all the sources that saved matching data.

### Accessing Query Properties

- [predicate](hksourcequerydescriptor/predicate.md): A predicate that limits the data used by the query.

### Default Implementations

- [HKAsyncQuery Implementations](hksourcequerydescriptor/hkasyncquery-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKAsyncQuery](hkasyncquery.md)

## See Also

### Sources and devices

- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
