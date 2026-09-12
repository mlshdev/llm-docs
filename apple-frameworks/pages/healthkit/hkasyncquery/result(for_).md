> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkasyncquery/result(for:)](https://developer.apple.com/documentation/healthkit/hkasyncquery/result(for:))

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> Self.Output
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## Mentioned In

- [Running Queries with Swift Concurrency](../running-queries-with-swift-concurrency.md)

<a id="Discussion"></a>

## Discussion

The adopting type’s [Output](output.md) associated type specifies the values that this method returns. For example, [HKSampleQueryDescriptor](../hksamplequerydescriptor.md) returns an array of [HKQuantitySample](../hkquantitysample.md) objects.

```swift
let stepType = HKQuantityType(.stepCount)

let descriptor = HKSampleQueryDescriptor(
    predicates:[.quantitySample(type: stepType)],
    sortDescriptors: [SortDescriptor(\.endDate, order: .reverse)],
    limit: 10)

let results = try await descriptor.result(for: store)
```

## See Also

### Running Queries

- [Output](output.md)
