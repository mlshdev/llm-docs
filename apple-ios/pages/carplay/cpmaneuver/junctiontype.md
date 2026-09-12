> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/junctiontype](https://developer.apple.com/documentation/carplay/cpmaneuver/junctiontype)

# junctionType (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents the type of junction associated with this maneuver.

## Declaration

```swift
var junctionType: CPJunctionType { get set }
```

<a id="discussion"></a>

## Discussion

One of the [CPJunctionType](../cpjunctiontype.md) values that indicates the type of traffic junction; a [CPManeuver](../cpmaneuver.md) requires this value.

## See Also

### Providing junction information

- [junctionExitAngle](junctionexitangle.md): The angle of the exit road of this junction.
- [junctionElementAngles](junctionelementangles.md): A set of angles for the rest of the roads of this junction.

# junctionType (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A value that represents the type of junction associated with this maneuver.

## Declaration

```objectivec
@property (nonatomic, assign) CPJunctionType junctionType;
```

<a id="discussion"></a>

## Discussion

One of the [CPJunctionType](../cpjunctiontype.md) values that indicates the type of traffic junction; a [CPManeuver](../cpmaneuver.md) requires this value.

## See Also

### Providing junction information

- [junctionExitAngle](junctionexitangle.md): The angle of the exit road of this junction.
- [junctionElementAngles](junctionelementangles.md): A set of angles for the rest of the roads of this junction.
