> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cprouteinformation/maneuvertravelestimates](https://developer.apple.com/documentation/carplay/cprouteinformation/maneuvertravelestimates)

# maneuverTravelEstimates (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An object that describes the time and distance estimates for a maneuver.

## Declaration

```swift
@NSCopying var maneuverTravelEstimates: CPTravelEstimates { get }
```

<a id="Discussion"></a>

### Discussion

This is the first maneuver in the current list of maneuvers.

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [laneGuidances](laneguidances.md): An array of lane guidance objects.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.

# maneuverTravelEstimates (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An object that describes the time and distance estimates for a maneuver.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CPTravelEstimates * maneuverTravelEstimates;
```

<a id="Discussion"></a>

### Discussion

This is the first maneuver in the current list of maneuvers.

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [laneGuidances](laneguidances.md): An array of lane guidance objects.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.
