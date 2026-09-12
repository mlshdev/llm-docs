> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerdata/averageactivepace](https://developer.apple.com/documentation/coremotion/cmpedometerdata/averageactivepace)

# averageActivePace (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 3.0+

The average pace of the user, measured in seconds per meter.

## Declaration

```swift
var averageActivePace: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

During regular updates, this property is set to the user’s average active pace since [startUpdates(from:withHandler:)](../cmpedometer/startupdates%28from_withhandler_%29.md) was called. When you perform historical queries, the property is set to the average active pace between [startDate](startdate.md) and [endDate](enddate.md).

The property averages the user’s pace only during periods of activity and it omits all periods of inactivity. The value of this property is `nil` when you are performing a query for historical pedometer data and the information is not available (such as when the user did not move between `startDate` and `endDate`). This property is also `nil` for devices that do not support the gathering of pace data.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [distance](distance.md): The estimated distance (in meters) traveled by the user.
- [currentPace](currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.

# averageActivePace (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 3.0+

The average pace of the user, measured in seconds per meter.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * averageActivePace;
```

<a id="Discussion"></a>

## Discussion

During regular updates, this property is set to the user’s average active pace since [startPedometerUpdatesFromDate:withHandler:](../cmpedometer/startupdates%28from_withhandler_%29.md) was called. When you perform historical queries, the property is set to the average active pace between [startDate](startdate.md) and [endDate](enddate.md).

The property averages the user’s pace only during periods of activity and it omits all periods of inactivity. The value of this property is `nil` when you are performing a query for historical pedometer data and the information is not available (such as when the user did not move between `startDate` and `endDate`). This property is also `nil` for devices that do not support the gathering of pace data.

## See Also

### Getting the Pedestrian Data

- [numberOfSteps](numberofsteps.md): The number of steps taken by the user.
- [distance](distance.md): The estimated distance (in meters) traveled by the user.
- [currentPace](currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](currentcadence.md): The rate at which steps are taken, measured in steps per second.
