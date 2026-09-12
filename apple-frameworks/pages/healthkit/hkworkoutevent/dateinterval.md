> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutevent/dateinterval](https://developer.apple.com/documentation/healthkit/hkworkoutevent/dateinterval)

# dateInterval (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The time and duration of the event.

## Declaration

```swift
var dateInterval: DateInterval { get }
```

<a id="Discussion"></a>

## Discussion

Most event types support only date intervals with a zero-length duration. These intervals indicate a single point in time, represented by the interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property. Only [HKWorkoutEventType.lap](../hkworkouteventtype/lap.md) and [HKWorkoutEventType.segment](../hkworkouteventtype/segment.md) event types support intervals with nonzero durations.

## See Also

### Getting property data

- [type](type.md): The type of workout event.
- [metadata](metadata.md): The metadata associated with the workout event.

# dateInterval (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The time and duration of the event.

## Declaration

```objectivec
@property (copy, readonly) NSDateInterval * dateInterval;
```

<a id="Discussion"></a>

## Discussion

Most event types support only date intervals with a zero-length duration. These intervals indicate a single point in time, represented by the interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property. Only [HKWorkoutEventTypeLap](../hkworkouteventtype/lap.md) and [HKWorkoutEventTypeSegment](../hkworkouteventtype/segment.md) event types support intervals with nonzero durations.

## See Also

### Getting property data

- [type](type.md): The type of workout event.
- [metadata](metadata.md): The metadata associated with the workout event.
