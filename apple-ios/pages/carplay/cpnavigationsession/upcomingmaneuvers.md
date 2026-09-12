> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/upcomingmaneuvers](https://developer.apple.com/documentation/carplay/cpnavigationsession/upcomingmaneuvers)

# upcomingManeuvers (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The next set of maneuvers the user should perform while following the current route.

## Declaration

```swift
var upcomingManeuvers: [CPManeuver] { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays multiple maneuvers at the same time. However, the system may limit the number of visible maneuvers.

## See Also

### Managing Upcoming Maneuvers

- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [add(\_:)](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.

# upcomingManeuvers (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The next set of maneuvers the user should perform while following the current route.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<CPManeuver *> * upcomingManeuvers;
```

<a id="Discussion"></a>

## Discussion

The system displays multiple maneuvers at the same time. However, the system may limit the number of visible maneuvers.

## See Also

### Managing Upcoming Maneuvers

- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [addManeuvers:](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.
