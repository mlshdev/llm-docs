> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cprouteinformation/init(maneuvers:laneguidances:currentmaneuvers:currentlaneguidance:trip:maneuvertravelestimates:)](https://developer.apple.com/documentation/carplay/cprouteinformation/init(maneuvers:laneguidances:currentmaneuvers:currentlaneguidance:trip:maneuvertravelestimates:))

# init(maneuvers:laneGuidances:currentManeuvers:currentLaneGuidance:trip:maneuverTravelEstimates:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Initializes a new route information object with maneuvers, lane guidances, the current maneuvers, the current lane guidance, and trip and current maneuver travel estimates.

## Declaration

```swift
init(maneuvers: [CPManeuver], laneGuidances: [CPLaneGuidance], currentManeuvers: [CPManeuver], currentLaneGuidance: CPLaneGuidance, trip tripTravelEstimates: CPTravelEstimates, maneuverTravelEstimates: CPTravelEstimates)
```

## Parameters

- `maneuvers`: An array of [CPManeuver](../cpmaneuver.md) objects.
- `laneGuidances`: An array of [CPLaneGuidance](../cplaneguidance.md) objects.
- `currentManeuvers`: An array of `CPManeuver` objects that represent the current list of maneuvers.
- `currentLaneGuidance`: A [CPLaneGuidance](../cplaneguidance.md) object that represents the guidance for the current lane.
- `maneuverTravelEstimates`: The `CPTravelEstimates` that present the estimates for the trip’s maneuvers.

# initWithManeuvers:laneGuidances:currentManeuvers:currentLaneGuidance:tripTravelEstimates:maneuverTravelEstimates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Initializes a new route information object with maneuvers, lane guidances, the current maneuvers, the current lane guidance, and trip and current maneuver travel estimates.

## Declaration

```objectivec
- (instancetype) initWithManeuvers:(NSArray<CPManeuver *> *) maneuvers laneGuidances:(NSArray<CPLaneGuidance *> *) laneGuidances currentManeuvers:(NSArray<CPManeuver *> *) currentManeuvers currentLaneGuidance:(CPLaneGuidance *) currentLaneGuidance tripTravelEstimates:(CPTravelEstimates *) tripTravelEstimates maneuverTravelEstimates:(CPTravelEstimates *) maneuverTravelEstimates;
```

## Parameters

- `maneuvers`: An array of [CPManeuver](../cpmaneuver.md) objects.
- `laneGuidances`: An array of [CPLaneGuidance](../cplaneguidance.md) objects.
- `currentManeuvers`: An array of `CPManeuver` objects that represent the current list of maneuvers.
- `currentLaneGuidance`: A [CPLaneGuidance](../cplaneguidance.md) object that represents the guidance for the current lane.
- `maneuverTravelEstimates`: The `CPTravelEstimates` that present the estimates for the trip’s maneuvers.
