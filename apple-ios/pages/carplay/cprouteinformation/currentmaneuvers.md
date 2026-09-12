> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cprouteinformation/currentmaneuvers](https://developer.apple.com/documentation/carplay/cprouteinformation/currentmaneuvers)

# currentManeuvers (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of maneuver objects that describes the current maneuvers.

## Declaration

```swift
var currentManeuvers: [CPManeuver] { get }
```

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [laneGuidances](laneguidances.md): An array of lane guidance objects.
- [maneuverTravelEstimates](maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.

# currentManeuvers (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of maneuver objects that describes the current maneuvers.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPManeuver *> * currentManeuvers;
```

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [laneGuidances](laneguidances.md): An array of lane guidance objects.
- [maneuverTravelEstimates](maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.
