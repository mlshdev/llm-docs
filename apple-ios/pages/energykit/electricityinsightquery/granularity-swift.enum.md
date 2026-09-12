> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery/granularity-swift.enum](https://developer.apple.com/documentation/energykit/electricityinsightquery/granularity-swift.enum)

# ElectricityInsightQuery.Granularity

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The specific temporal granularity of electricity insight records.

## Declaration

```swift
enum Granularity
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

## Topics

### Returning electricity insight records

- [ElectricityInsightQuery.Granularity.daily](granularity-swift.enum/daily.md): A daily aggregated insight record for at least one calendar month.
- [ElectricityInsightQuery.Granularity.hourly](granularity-swift.enum/hourly.md): An hourly aggregated insight record for at least one calendar week.
- [ElectricityInsightQuery.Granularity.monthly](granularity-swift.enum/monthly.md): A monthly aggregated insight record for at least 1 calendar year.
- [ElectricityInsightQuery.Granularity.weekly](granularity-swift.enum/weekly.md): A weekly aggregated insight record for at least six months.
- [ElectricityInsightQuery.Granularity.yearly](granularity-swift.enum/yearly.md): A yearly aggregated insight record for at least one calendar year.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the query request information

- [granularity](granularity-swift.property.md): The temporal granularity for returned electricity insight records.
- [flowDirection](flowdirection.md): A property that specifies whether the response contains imported or exported energy.
- [range](range.md): The requested date range.
