> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightquery/flowdirection

# flowDirection

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A property that specifies whether the response contains imported or exported energy.

## Declaration

```swift
let flowDirection: ElectricityFlowDirection
```

## See Also

### Getting the query request information

- [ElectricityInsightQuery.Granularity](granularity-swift.enum.md): The specific temporal granularity of electricity insight records.
- [granularity](granularity-swift.property.md): The temporal granularity for returned electricity insight records.
- [range](range.md): The requested date range.
