> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightquery](https://developer.apple.com/documentation/energykit/electricityinsightquery)

# ElectricityInsightQuery

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A structure describing a query that you use to obtain environmental impact information in the form of electricity insight records.

## Declaration

```swift
struct ElectricityInsightQuery
```

## Topics

### Creating an insight query request

- [init(options:range:granularity:flowDirection:)](electricityinsightquery/init%28options_range_granularity_flowdirection_%29.md): Creates an electricity insight query request.

### Adding optional insight records

- [ElectricityInsightQuery.Options](electricityinsightquery/options-swift.struct.md): A set of options that specify optional information to include in electricity insight records returned from the insight service.
- [options](electricityinsightquery/options-swift.property.md): The optional information to include in returned electricity insight records.

### Getting the query request information

- [ElectricityInsightQuery.Granularity](electricityinsightquery/granularity-swift.enum.md): The specific temporal granularity of electricity insight records.
- [granularity](electricityinsightquery/granularity-swift.property.md): The temporal granularity for returned electricity insight records.
- [flowDirection](electricityinsightquery/flowdirection.md): A property that specifies whether the response contains imported or exported energy.
- [range](electricityinsightquery/range.md): The requested date range.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Electricity insights

- [ElectricityInsightService](electricityinsightservice.md): A service for retrieving insights about electricity consumption.
- [ElectricityInsightRecord](electricityinsightrecord.md): A structure that provides environmental impact and cost insights for electricity usage over a specific time period.
- [ElectricityInsightMeasure](electricityinsightmeasure.md): A protocol for types that can measure electricity usage data.
