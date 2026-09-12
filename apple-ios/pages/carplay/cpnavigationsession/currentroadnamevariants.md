> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/currentroadnamevariants](https://developer.apple.com/documentation/carplay/cpnavigationsession/currentroadnamevariants)

# currentRoadNameVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that describe variants of the current road name.

## Declaration

```swift
var currentRoadNameVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property with variants of the current road name, from most to least verbose.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [add(\_:)](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.

# currentRoadNameVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that describe variants of the current road name.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * currentRoadNameVariants;
```

<a id="Discussion"></a>

## Discussion

Set this property with variants of the current road name, from most to least verbose.

## See Also

### Managing Upcoming Maneuvers

- [upcomingManeuvers](upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](maneuverstate.md): The current maneuver state.
- [currentLaneGuidance](currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [addManeuvers:](add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](../cpmaneuver.md): An object that describes a single navigation instruction.
