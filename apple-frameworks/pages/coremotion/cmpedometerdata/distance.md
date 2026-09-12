> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerdata/distance](https://developer.apple.com/documentation/coremotion/cmpedometerdata/distance)

# distance (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The estimated distance (in meters) traveled by the user.

## Declaration

```swift
var distance: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the distance traveled while walking and running. The value in this property may be `nil` if distance estimation is not supported on the current device.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [averageActivePace](averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentPace](currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.

# distance (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The estimated distance (in meters) traveled by the user.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * distance;
```

<a id="Discussion"></a>

## Discussion

This value reflects the distance traveled while walking and running. The value in this property may be `nil` if distance estimation is not supported on the current device.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [averageActivePace](averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentPace](currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.
