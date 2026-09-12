> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/update(_:for:with:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/update(_:for:with:))

# update(\_:for:with:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.

## Declaration

```swift
func update(_ estimates: CPTravelEstimates, for trip: CPTrip, with timeRemainingColor: CPTimeRemainingColor)
```

## Parameters

- `estimates`: The updated travel estimates.
- `trip`: A trip preview or the active trip.
- `timeRemainingColor`: The time-remaining color.

## See Also

### Providing Trip Estimates

- [updateEstimates(\_:for:)](updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.

# updateTravelEstimates:forTrip:withTimeRemainingColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.

## Declaration

```objectivec
- (void) updateTravelEstimates:(CPTravelEstimates *) estimates forTrip:(CPTrip *) trip withTimeRemainingColor:(CPTimeRemainingColor) timeRemainingColor;
```

## Parameters

- `estimates`: The updated travel estimates.
- `trip`: A trip preview or the active trip.
- `timeRemainingColor`: The time-remaining color.

## See Also

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:](updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.
