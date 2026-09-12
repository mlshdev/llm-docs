> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/updateestimates(_:for:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/updateestimates(_:for:))

# updateEstimates(\_:for:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates travel estimates, such as arrival time and the remaining time and distance for a trip.

## Declaration

```swift
func updateEstimates(_ estimates: CPTravelEstimates, for trip: CPTrip)
```

## Parameters

- `estimates`: The updated travel estimates.
- `trip`: A trip preview or the active trip.

<a id="Discussion"></a>

## Discussion

The updated trip uses the default time-remaining color. To change the color, use the [update(\_:for:with:)](update%28__for_with_%29.md) method instead of calling this method.

## See Also

### Providing Trip Estimates

- [update(\_:for:with:)](update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.

# updateTravelEstimates:forTrip: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates travel estimates, such as arrival time and the remaining time and distance for a trip.

## Declaration

```objectivec
- (void) updateTravelEstimates:(CPTravelEstimates *) estimates forTrip:(CPTrip *) trip;
```

## Parameters

- `estimates`: The updated travel estimates.
- `trip`: A trip preview or the active trip.

<a id="Discussion"></a>

## Discussion

The updated trip uses the default time-remaining color. To change the color, use the [updateTravelEstimates:forTrip:withTimeRemainingColor:](update%28__for_with_%29.md) method instead of calling this method.

## See Also

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:withTimeRemainingColor:](update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.
