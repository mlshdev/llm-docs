> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/roadfollowingmaneuvervariants](https://developer.apple.com/documentation/carplay/cpmaneuver/roadfollowingmaneuvervariants)

# roadFollowingManeuverVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.

## Declaration

```swift
var roadFollowingManeuverVariants: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the individual; the array needs to contain at least one variant. The system displays the first variant that fits into the available screen space; arrange the variants in order from most- to least-preferred.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.

# roadFollowingManeuverVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * roadFollowingManeuverVariants;
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the individual; the array needs to contain at least one variant. The system displays the first variant that fits into the available screen space; arrange the variants in order from most- to least-preferred.

## See Also

### Providing maneuver information

- [maneuverType](maneuvertype.md): A value that represents the type of maneuver.
- [linkedLaneGuidance](linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](trafficside.md): A value that represents which side of the road the traffic drives on.
