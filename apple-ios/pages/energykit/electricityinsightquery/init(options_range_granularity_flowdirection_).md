> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightquery/init(options:range:granularity:flowdirection:)

# init(options:range:granularity:flowDirection:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates an electricity insight query request.

## Declaration

```swift
init(options: ElectricityInsightQuery.Options, range: DateInterval, granularity: ElectricityInsightQuery.Granularity, flowDirection: ElectricityFlowDirection)
```

## Parameters

- `options`: The optional information included when the system returns electricity insight records.
- `range`: The requested date range.
- `granularity`: The temporal granularity for returned electricity insight records.
- `flowDirection`: The direction of the flow of electricity.
