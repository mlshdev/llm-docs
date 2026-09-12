> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/result](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/result)

# HKQuantitySeriesSampleQueryDescriptor.Result

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A set of results from a quantity series sample descriptor.

## Declaration

```swift
struct Result
```

## Topics

### Accessing Sample Data

- [sample](result/sample.md): The quantity sample that owns the series of data entries.
- [quantity](result/quantity.md): The quantity stored by the data entry.
- [dateInterval](result/dateinterval.md): The date interval for the entry.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Running Queries

- [results(for:)](results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of matching series samples.
- [HKQuantitySeriesSampleQueryDescriptor.Results](results.md): An asynchronous sequence that emits data from the quantity series query.
