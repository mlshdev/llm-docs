> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightservice/energyinsights(fordeviceid:using:atvenue:)](https://developer.apple.com/documentation/energykit/electricityinsightservice/energyinsights(fordeviceid:using:atvenue:))

# energyInsights(forDeviceID:using:atVenue:)

**Framework:** EnergyKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Returns data that provides insight into electrical usage for a given device.

## Declaration

```swift
final func energyInsights(forDeviceID deviceID: String, using query: ElectricityInsightQuery, atVenue energyVenueID: UUID) async throws -> AsyncStream<ElectricityInsightRecord<Measurement<UnitEnergy>>>
```

## Parameters

- `deviceID`: The device identifier to return [ElectricityInsightRecord](../electricityinsightrecord.md)s for.
- `query`: The [ElectricityInsightQuery](../electricityinsightquery.md) to specify the results.
- `energyVenueID`: The [EnergyVenue](../energyvenue.md) identifier to return [ElectricityInsightRecord](../electricityinsightrecord.md)s for.

<a id="return-value"></a>

## Return Value

An `AsyncStream` of [ElectricityInsightRecord](../electricityinsightrecord.md)s containing UnitEnergy values for a given device.

<a id="discussion"></a>

## Discussion

The system throws [EnergyKitError.venueUnavailable](../energykiterror/venueunavailable.md) if a person provides an invalid [EnergyVenue](../energyvenue.md) identifier. If another request is in progress, the system throws[EnergyKitError.inProgress](../energykiterror/inprogress.md).

## See Also

### Getting device insights

- [runtimeInsights(forDeviceID:using:atVenue:)](runtimeinsights%28fordeviceid_using_atvenue_%29.md): Returns records that provide insight into runtime of a given device.
