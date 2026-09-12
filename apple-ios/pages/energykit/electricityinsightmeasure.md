> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightmeasure](https://developer.apple.com/documentation/energykit/electricityinsightmeasure)

# ElectricityInsightMeasure

**Framework:** EnergyKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A protocol for types that can measure electricity usage data.

## Declaration

```swift
protocol ElectricityInsightMeasure
```

<a id="overview"></a>

## Overview

The [ElectricityInsightRecord](electricityinsightrecord.md) structure uses this protocol as its generic type parameter, and supports the types:

- [ElectricityInsightRecord](electricityinsightrecord.md)\<[Measurement](https://developer.apple.com/documentation/foundation/measurement)\<[UnitEnergy](https://developer.apple.com/documentation/foundation/unitenergy)\>\>
- [ElectricityInsightRecord](electricityinsightrecord.md)\<[Duration](https://developer.apple.com/documentation/swift/duration)\>

## See Also

### Electricity insights

- [ElectricityInsightService](electricityinsightservice.md): A service for retrieving insights about electricity consumption.
- [ElectricityInsightQuery](electricityinsightquery.md): A structure describing a query that you use to obtain environmental impact information in the form of electricity insight records.
- [ElectricityInsightRecord](electricityinsightrecord.md): A structure that provides environmental impact and cost insights for electricity usage over a specific time period.
