> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/maneuvertype](https://developer.apple.com/documentation/carplay/cpmaneuver/maneuvertype)

# maneuverType (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents the type of maneuver.

## Declaration

```swift
var maneuverType: CPManeuverType { get set }
```

<a id="Discussion"></a>

## Discussion

CarPlay requires this value to support route guidance metadata.

## See Also

### Providing maneuver information

- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.

# maneuverType (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents the type of maneuver.

## Declaration

```objectivec
@property (nonatomic, assign) CPManeuverType maneuverType;
```

<a id="Discussion"></a>

## Discussion

CarPlay requires this value to support route guidance metadata.

## See Also

### Providing maneuver information

- [roadFollowingManeuverVariants](roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.
