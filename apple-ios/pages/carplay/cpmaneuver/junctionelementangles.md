> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/junctionelementangles](https://developer.apple.com/documentation/carplay/cpmaneuver/junctionelementangles)

# junctionElementAngles (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A set of angles for the rest of the roads of this junction.

## Declaration

```swift
var junctionElementAngles: Set<Measurement<UnitAngle>>? { get set }
```

<a id="Discussion"></a>

### Discussion

This must not include `junctionExitAngle`.

## See Also

### Providing junction information

- [junctionType](junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionExitAngle](junctionexitangle.md): The angle of the exit road of this junction.

# junctionElementAngles (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A set of angles for the rest of the roads of this junction.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSSet<NSMeasurement<NSUnitAngle *> *> * junctionElementAngles;
```

<a id="Discussion"></a>

### Discussion

This must not include `junctionExitAngle`.

## See Also

### Providing junction information

- [junctionType](junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionExitAngle](junctionexitangle.md): The angle of the exit road of this junction.
