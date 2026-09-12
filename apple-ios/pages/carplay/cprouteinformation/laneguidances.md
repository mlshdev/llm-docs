> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cprouteinformation/laneguidances](https://developer.apple.com/documentation/carplay/cprouteinformation/laneguidances)

# laneGuidances (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of lane guidance objects.

## Declaration

```swift
var laneGuidances: [CPLaneGuidance] { get }
```

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [maneuverTravelEstimates](maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.

# laneGuidances (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of lane guidance objects.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPLaneGuidance *> * laneGuidances;
```

## See Also

### Properties

- [currentLaneGuidance](currentlaneguidance.md): A lane guidance object that describes the current lane guidance.
- [currentManeuvers](currentmaneuvers.md): An array of maneuver objects that describes the current maneuvers.
- [maneuverTravelEstimates](maneuvertravelestimates.md): An object that describes the time and distance estimates for a maneuver.
- [maneuvers](maneuvers.md): An array of maneuver objects.
- [tripTravelEstimates](triptravelestimates.md): A travel estimates object that describes the estimated time and distance for the current trip.
