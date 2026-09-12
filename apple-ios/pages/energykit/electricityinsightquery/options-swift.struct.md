> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery/options-swift.struct](https://developer.apple.com/documentation/energykit/electricityinsightquery/options-swift.struct)

# ElectricityInsightQuery.Options

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A set of options that specify optional information to include in electricity insight records returned from the insight service.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

Using an empty [ElectricityInsightQuery.Options](options-swift.struct.md) returns the total value  of [ElectricityInsightRecord](../electricityinsightrecord.md) without cleanliness or tariff breakdown.

## Topics

### Creating an option set

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md): Creates an option set with the given raw value.
- [rawValue](options-swift.struct/rawvalue.md): The raw value of the option set.

### Getting the optional query insights

- [cleanliness](options-swift.struct/cleanliness.md): A query that includes cleanliness insights.
- [tariff](options-swift.struct/tariff.md): A query that includes tariff-based insights.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Adding optional insight records

- [options](options-swift.property.md): The optional information to include in returned electricity insight records.
