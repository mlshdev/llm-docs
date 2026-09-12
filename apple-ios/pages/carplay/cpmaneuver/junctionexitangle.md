> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/junctionexitangle](https://developer.apple.com/documentation/carplay/cpmaneuver/junctionexitangle)

# junctionExitAngle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The angle of the exit road of this junction.

## Declaration

```swift
var junctionExitAngle: Measurement<UnitAngle>? { get set }
```

## See Also

### Providing junction information

- [junctionType](junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionElementAngles](junctionelementangles.md): A set of angles for the rest of the roads of this junction.

# junctionExitAngle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The angle of the exit road of this junction.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSMeasurement<NSUnitAngle *> * junctionExitAngle;
```

## See Also

### Providing junction information

- [junctionType](junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionElementAngles](junctionelementangles.md): A set of angles for the rest of the roads of this junction.
