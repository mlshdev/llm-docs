> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutevent/init(type:dateinterval:metadata:)](https://developer.apple.com/documentation/healthkit/hkworkoutevent/init(type:dateinterval:metadata:))

# init(type:dateInterval:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Instantiates and returns a new workout event with the specified type, date interval, and metadata.

## Declaration

```swift
convenience init(type: HKWorkoutEventType, dateInterval: DateInterval, metadata: [String : Any]?)
```

## Parameters

- `type`: The type of workout event. For a description of possible events, see [HKWorkoutEventType](../hkworkouteventtype.md).
- `dateInterval`: Most event types support only date intervals with a zero-length duration. These intervals indicate a single point in time, represented by the interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property. Only [HKWorkoutEventType.lap](../hkworkouteventtype/lap.md) and [HKWorkoutEventType.segment](../hkworkouteventtype/segment.md) event types support intervals with nonzero durations.
- `metadata`: The metadata associated with the workout event.

<a id="return-value"></a>

## Return Value

A new workout event.

# workoutEventWithType:dateInterval:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Instantiates and returns a new workout event with the specified type, date interval, and metadata.

## Declaration

```objectivec
+ (instancetype) workoutEventWithType:(HKWorkoutEventType) type dateInterval:(NSDateInterval *) dateInterval metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `type`: The type of workout event. For a description of possible events, see [HKWorkoutEventType](../hkworkouteventtype.md).
- `dateInterval`: Most event types support only date intervals with a zero-length duration. These intervals indicate a single point in time, represented by the interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property. Only [HKWorkoutEventTypeLap](../hkworkouteventtype/lap.md) and [HKWorkoutEventTypeSegment](../hkworkouteventtype/segment.md) event types support intervals with nonzero durations.
- `metadata`: The metadata associated with the workout event.

<a id="return-value"></a>

## Return Value

A new workout event.
