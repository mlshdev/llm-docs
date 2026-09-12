> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequerydescriptor/init(predicates:sortdescriptors:limit:)](https://developer.apple.com/documentation/healthkit/hksamplequerydescriptor/init(predicates:sortdescriptors:limit:))

# init(predicates:sortDescriptors:limit:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Creates a sample query descriptor.

## Declaration

```swift
init(predicates: [HKSamplePredicate<Sample>], sortDescriptors: [SortDescriptor<Sample>], limit: Int? = nil)
```

## Parameters

- `predicates`: An array of sample predicates that define the type of data that the query returns. To query for multiple types of data, provide a sample predicate for each type.
- `sortDescriptors`: An array of sort descriptors that specify the order of the results that the query returns. If you don’t need the results in a specific order, pass an empty array.
- `limit`: An optional value that specifies the maximum number of samples that the query returns. If you don’t specify the limit, the system returns all matching samples in the HealthKit store.

<a id="Discussion"></a>

## Discussion

The system sets the descriptor’s `Output` type based on the `predicates` parameter.
