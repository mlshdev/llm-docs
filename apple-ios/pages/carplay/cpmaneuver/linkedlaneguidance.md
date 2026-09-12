> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/linkedlaneguidance](https://developer.apple.com/documentation/carplay/cpmaneuver/linkedlaneguidance)

# linkedLaneGuidance (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents lane guidance associated with this maneuver.

## Declaration

```swift
unowned(unsafe) var linkedLaneGuidance: CPLaneGuidance { get set }
```

<a id="Discussion"></a>

## Discussion

This value is optional; however [CPManeuver](../cpmaneuver.md) requires this value if there is a corresponding lane guidance value.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.

# linkedLaneGuidance (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents lane guidance associated with this maneuver.

## Declaration

```objectivec
@property (nonatomic, assign) CPLaneGuidance * linkedLaneGuidance;
```

<a id="Discussion"></a>

## Discussion

This value is optional; however [CPManeuver](../cpmaneuver.md) requires this value if there is a corresponding lane guidance value.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.
