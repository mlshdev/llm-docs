> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutevent/init(type:date:)](https://developer.apple.com/documentation/healthkit/hkworkoutevent/init(type:date:))

# init(type:date:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Instantiates and returns a new workout event with the specified type and date.

> Use [init(type:dateInterval:metadata:)](init%28type_dateinterval_metadata_%29.md) instead.

## Declaration

```swift
convenience init(type: HKWorkoutEventType, date: Date)
```

## Parameters

- `type`: The type of workout event. For a description of possible events, see [HKWorkoutEventType](../hkworkouteventtype.md).
- `date`: The time when the transition occurred. For a pause event, this date indicates the start of the break. For a resume event, this date indicates the end of the break. You must use a date between the starting and ending dates of the workout that you intend to modify.

<a id="return-value"></a>

## Return Value

A new workout event.

## See Also

### Deprecated

- [init(type:date:metadata:)](init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.
- [date](date.md): Deprecated. The time when the transition occurred.

# workoutEventWithType:date: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Instantiates and returns a new workout event with the specified type and date.

> Use [workoutEventWithType:dateInterval:metadata:](init%28type_dateinterval_metadata_%29.md) instead.

## Declaration

```objectivec
+ (instancetype) workoutEventWithType:(HKWorkoutEventType) type date:(NSDate *) date;
```

## Parameters

- `type`: The type of workout event. For a description of possible events, see [HKWorkoutEventType](../hkworkouteventtype.md).
- `date`: The time when the transition occurred. For a pause event, this date indicates the start of the break. For a resume event, this date indicates the end of the break. You must use a date between the starting and ending dates of the workout that you intend to modify.

<a id="return-value"></a>

## Return Value

A new workout event.

## See Also

### Deprecated

- [workoutEventWithType:date:metadata:](init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.
- [date](date.md): Deprecated. The time when the transition occurred.
