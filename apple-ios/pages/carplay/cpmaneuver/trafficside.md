> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/trafficside](https://developer.apple.com/documentation/carplay/cpmaneuver/trafficside)

# trafficSide (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents which side of the road the traffic drives on.

## Declaration

```swift
var trafficSide: CPTrafficSide { get set }
```

<a id="Discussion"></a>

## Discussion

One of the [CPTrafficSide](../cptrafficside.md) values that indicates which side of the road traffic drives on; a [CPManeuver](../cpmaneuver.md) requires this value.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.

# trafficSide (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents which side of the road the traffic drives on.

## Declaration

```objectivec
@property (nonatomic, assign) CPTrafficSide trafficSide;
```

<a id="Discussion"></a>

## Discussion

One of the [CPTrafficSide](../cptrafficside.md) values that indicates which side of the road traffic drives on; a [CPManeuver](../cpmaneuver.md) requires this value.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
