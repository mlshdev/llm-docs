> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerdata/currentpace](https://developer.apple.com/documentation/coremotion/cmpedometerdata/currentpace)

# currentPace (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The current pace of the user, measured in seconds per meter.

## Declaration

```swift
var currentPace: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

During regular updates, this property is set to the user’s pace. The value in this property is `nil` when you are performing a query for historical pedometer data or when pace information is not yet available for the user. This property is also `nil` for devices that do not support the gathering of pace data.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [distance](distance.md): The estimated distance (in meters) traveled by the user.
- [averageActivePace](averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.

# currentPace (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The current pace of the user, measured in seconds per meter.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * currentPace;
```

<a id="Discussion"></a>

## Discussion

During regular updates, this property is set to the user’s pace. The value in this property is `nil` when you are performing a query for historical pedometer data or when pace information is not yet available for the user. This property is also `nil` for devices that do not support the gathering of pace data.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [distance](distance.md): The estimated distance (in meters) traveled by the user.
- [averageActivePace](averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.
