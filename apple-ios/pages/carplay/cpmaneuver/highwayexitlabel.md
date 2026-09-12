> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/highwayexitlabel](https://developer.apple.com/documentation/carplay/cpmaneuver/highwayexitlabel)

# highwayExitLabel (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A string that describes a highway exit.

## Declaration

```swift
var highwayExitLabel: String { get set }
```

<a id="Discussion"></a>

## Discussion

Set the label to a string that describes the exit, as in the example:

```swift
   highwayExitLabel = "Exit 123"

```

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.

# highwayExitLabel (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A string that describes a highway exit.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * highwayExitLabel;
```

<a id="Discussion"></a>

## Discussion

Set the label to a string that describes the exit, as in the example:

```swift
   highwayExitLabel = "Exit 123"

```

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.
