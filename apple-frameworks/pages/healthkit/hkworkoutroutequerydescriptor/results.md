> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutequerydescriptor/results](https://developer.apple.com/documentation/healthkit/hkworkoutroutequerydescriptor/results)

# HKWorkoutRouteQueryDescriptor.Results

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An asynchronous sequence that emits data about individual locations from a workout route sample.

## Declaration

```swift
struct Results
```

## Topics

### Creating an Iterator

- [HKWorkoutRouteQueryDescriptor.Results.Iterator](results/iterator.md): An iterator for accessing individual locations from the workout route.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Running queries

- [results(for:)](results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of data representing individual locations.
