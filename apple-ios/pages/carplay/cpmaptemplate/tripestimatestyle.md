> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/tripestimatestyle](https://developer.apple.com/documentation/carplay/cpmaptemplate/tripestimatestyle)

# tripEstimateStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The style that the map template uses when displaying trip estimates during active nagivation.

## Declaration

```swift
var tripEstimateStyle: CPTripEstimateStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CPTripEstimateStyle.dark](../cptripestimatestyle/dark.md).

## See Also

### Providing Trip Estimates

- [updateEstimates(\_:for:)](updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [update(\_:for:with:)](update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.

# tripEstimateStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The style that the map template uses when displaying trip estimates during active nagivation.

## Declaration

```objectivec
@property (nonatomic, assign) CPTripEstimateStyle tripEstimateStyle;
```

<a id="Discussion"></a>

## Discussion

The default value is [CPTripEstimateStyleDark](../cptripestimatestyle/dark.md).

## See Also

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:](updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [updateTravelEstimates:forTrip:withTimeRemainingColor:](update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](../cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [CPTripEstimateStyle](../cptripestimatestyle.md): The set of display styles for trip estimates.
