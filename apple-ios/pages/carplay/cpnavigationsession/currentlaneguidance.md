> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/currentlaneguidance](https://developer.apple.com/documentation/carplay/cpnavigationsession/currentlaneguidance)

# currentLaneGuidance (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The current lane guidance to use for navigation metadata.

## Declaration

```swift
@NSCopying var currentLaneGuidance: CPLaneGuidance? { get set }
```

<a id="Discussion"></a>

## Discussion

First, add the required [CPLaneGuidance](../cplaneguidance.md) objects to the session using [add(\_:)](add%28__%29-93qpu.md), then set this property with the current lane guidance.

Set this property to `nil` if there’s no current lane guidance.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [add(\_:)](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.

# currentLaneGuidance (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The current lane guidance to use for navigation metadata.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) CPLaneGuidance * currentLaneGuidance;
```

<a id="Discussion"></a>

## Discussion

First, add the required [CPLaneGuidance](../cplaneguidance.md) objects to the session using [addLaneGuidances:](add%28__%29-93qpu.md), then set this property with the current lane guidance.

Set this property to `nil` if there’s no current lane guidance.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [addManeuvers:](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.
