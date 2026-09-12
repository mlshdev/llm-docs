> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.struct](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequerydescriptor/options-swift.struct)

# HKQuantitySeriesSampleQueryDescriptor.Options

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Options used when querying series data.

## Declaration

```swift
struct Options
```

## Topics

### Setting Options

- [includeSample](options-swift.struct/includesample.md): An option indicating that the results should include a reference to the quantity sample that contains the series data.
- [orderByQuantitySampleStartDate](options-swift.struct/orderbyquantitysamplestartdate.md): An option indicating that the results are grouped by the containing quantity sample’s start date.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating Series Query Descriptors

- [init(predicate:options:)](init%28predicate_options_%29.md): Creates a quantity series query descriptor.
