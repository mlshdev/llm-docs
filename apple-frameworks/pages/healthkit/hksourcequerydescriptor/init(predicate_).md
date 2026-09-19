> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hksourcequerydescriptor/init(predicate:)

# init(predicate:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a source query descriptor.

## Declaration

```swift
init(predicate: HKSamplePredicate<Sample>)
```

## Parameters

- `predicate`: A predicate that defines the set of data used to identify sources. For a list of convenience methods for building predicates, see [HKQuery](../hkquery.md).
