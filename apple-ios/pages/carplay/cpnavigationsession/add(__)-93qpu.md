> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/add(_:)-93qpu](https://developer.apple.com/documentation/carplay/cpnavigationsession/add(_:)-93qpu)

# add(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Adds one or more lane guidance instances to the navigation session.

## Declaration

```swift
func add(_ laneGuidances: [CPLaneGuidance])
```

<a id="discussion"></a>

## Discussion

Use this method to add [CPLaneGuidance](../cplaneguidance.md) elements in chronological order to the navigation session. Add [CPLaneGuidance](../cplaneguidance.md) objects as soon as they are available.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [add(\_:)](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.

# addLaneGuidances: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Adds one or more lane guidance instances to the navigation session.

## Declaration

```objectivec
- (void) addLaneGuidances:(NSArray<CPLaneGuidance *> *) laneGuidances;
```

<a id="discussion"></a>

## Discussion

Use this method to add [CPLaneGuidance](../cplaneguidance.md) elements in chronological order to the navigation session. Add [CPLaneGuidance](../cplaneguidance.md) objects as soon as they are available.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [addManeuvers:](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.
