> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatewaypoint/init(waypoint:travelestimates:)](https://developer.apple.com/documentation/carplay/cpmaptemplatewaypoint/init(waypoint:travelestimates:))

# init(waypoint:travelEstimates:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initializes a new CPMapTemplateWaypoint with the specified waypoint and travel estimates.

## Declaration

```swift
init(waypoint: CPNavigationWaypoint, travelEstimates: CPTravelEstimates)
```

## Parameters

- `waypoint`: The navigation waypoint
- `travelEstimates`: The calculated travel estimates for reaching this waypoint

<a id="return-value"></a>

## Return Value

A new CPMapTemplateWaypoint instance ready for use with CarPlay templates

# initWithWaypoint:travelEstimates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initializes a new CPMapTemplateWaypoint with the specified waypoint and travel estimates.

## Declaration

```objectivec
- (instancetype) initWithWaypoint:(CPNavigationWaypoint *) waypoint travelEstimates:(CPTravelEstimates *) travelEstimates;
```

## Parameters

- `waypoint`: The navigation waypoint
- `travelEstimates`: The calculated travel estimates for reaching this waypoint

<a id="return-value"></a>

## Return Value

A new CPMapTemplateWaypoint instance ready for use with CarPlay templates
