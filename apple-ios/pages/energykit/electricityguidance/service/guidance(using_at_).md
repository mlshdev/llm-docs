> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/service/guidance(using:at:)](https://developer.apple.com/documentation/energykit/electricityguidance/service/guidance(using:at:))

# guidance(using:at:)

**Framework:** EnergyKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Returns an async sequence of electricity guidance forecasts for the requested venue with cost information incorporated, if available.

## Declaration

```swift
final func guidance(using query: ElectricityGuidance.Query, at energyVenueID: UUID) -> some AsyncSequence<ElectricityGuidance, any Error>

```

## Parameters

- `query`: The [ElectricityGuidance.Query](../query.md) that you request.
- `energyVenueID`: The [EnergyVenue](../../energyvenue.md) at which the devices consume electricity.

<a id="return-value"></a>

## Return Value

Returns an `AsyncSequence` of [ElectricityGuidance](../../electricityguidance.md) forecasts with error type [EnergyKitError.guidanceUnavailable](../../energykiterror/guidanceunavailable.md).
