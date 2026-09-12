> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor/result](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/result)

# HKAnchoredObjectQueryDescriptor.Result

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A set of results from an anchored object query.

## Declaration

```swift
struct Result
```

## Topics

### Accessing the Results

- [addedSamples](result/addedsamples.md): An array containing the matching samples added to the HealthKit store.
- [deletedObjects](result/deletedobjects.md): An array of objects deleted from the HealthKit store.
- [newAnchor](result/newanchor.md): A value corresponding to the last sample that the anchor query has returned.

## See Also

### Running Queries

- [result(for:)](result%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Runs a one-shot query and asynchronously returns a snapshot of the current matching results.
- [results(for:)](results%28for_%29.md): Conforms when `Sample` inherits `HKSample`. Initiates a long-running query that returns its results using an asynchronous sequence.
- [HKAnchoredObjectQueryDescriptor.Results](results.md): Conforms when `Sample` inherits `HKSample`. An asynchronous sequence that emits updates from an anchored object query.
