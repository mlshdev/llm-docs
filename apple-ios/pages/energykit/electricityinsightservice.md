> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightservice](https://developer.apple.com/documentation/energykit/electricityinsightservice)

# ElectricityInsightService

**Framework:** EnergyKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A service for retrieving insights about electricity consumption.

## Declaration

```swift
final actor ElectricityInsightService
```

## Topics

### Retrieving the shared instance

- [shared](electricityinsightservice/shared.md): A single, shared insight service object.

### Getting device insights

- [energyInsights(forDeviceID:using:atVenue:)](electricityinsightservice/energyinsights%28fordeviceid_using_atvenue_%29.md): Returns data that provides insight into electrical usage for a given device.
- [runtimeInsights(forDeviceID:using:atVenue:)](electricityinsightservice/runtimeinsights%28fordeviceid_using_atvenue_%29.md): Returns records that provide insight into runtime of a given device.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Electricity insights

- [ElectricityInsightQuery](electricityinsightquery.md): A structure describing a query that you use to obtain environmental impact information in the form of electricity insight records.
- [ElectricityInsightRecord](electricityinsightrecord.md): A structure that provides environmental impact and cost insights for electricity usage over a specific time period.
- [ElectricityInsightMeasure](electricityinsightmeasure.md): A protocol for types that can measure electricity usage data.
