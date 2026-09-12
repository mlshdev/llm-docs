> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/maneuverstate](https://developer.apple.com/documentation/carplay/cpnavigationsession/maneuverstate)

# maneuverState (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The current maneuver state.

## Declaration

```swift
var maneuverState: CPManeuverState { get set }
```

<a id="discussion"></a>

## Discussion

Set this property with the current [CPManeuverState](../cpmaneuverstate.md) based on how close the maneuver is and whether a person needs to act to execute the maneuver.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [add(\_:)](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.

# maneuverState (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The current maneuver state.

## Declaration

```objectivec
@property (nonatomic) CPManeuverState maneuverState;
```

<a id="discussion"></a>

## Discussion

Set this property with the current [CPManeuverState](../cpmaneuverstate.md) based on how close the maneuver is and whether a person needs to act to execute the maneuver.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [addManeuvers:](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.
