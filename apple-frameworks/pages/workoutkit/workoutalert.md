> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert](https://developer.apple.com/documentation/workoutkit/workoutalert)

# WorkoutAlert

**Framework:** WorkoutKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert that notifies the user of significant events during a workout.

## Declaration

```swift
protocol WorkoutAlert : Hashable, Sendable
```

## Topics

### Determining support

- [supports(activity:location:)](workoutalert/supports%28activity_location_%29.md): Returns a Boolean value that indicates whether the alert supports the provided activity and location.

### Setting the alert metric

- [metric](workoutalert/metric.md): The metric used to measure performance for the alert.
- [WorkoutAlertMetric](workoutalertmetric.md): A value that specifies the type of metric used to measure performance.

### Creating cadence alerts

- [cadence(\_:unit:)](workoutalert/cadence%28__unit_%29-y8da.md): Conforms when `Self` is `CadenceRangeAlert`. Creates a new alert for a range of cadence values.
- [CadenceRangeAlert](cadencerangealert.md): An alert for a range of cadence values.
- [cadence(\_:unit:)](workoutalert/cadence%28__unit_%29-3fnpg.md): Conforms when `Self` is `CadenceThresholdAlert`. Creates an alert for the specified cadence threshold.
- [CadenceThresholdAlert](cadencethresholdalert.md): An alert for a cadence threshold.

### Creating heart rate alerts

- [heartRate(\_:unit:)](workoutalert/heartrate%28__unit_%29.md): Conforms when `Self` is `HeartRateRangeAlert`. Creates a new heart rate alert for the target range.
- [HeartRateRangeAlert](heartraterangealert.md): An alert for a range of heart rates.
- [heartRate(zone:)](workoutalert/heartrate%28zone_%29.md): Conforms when `Self` is `HeartRateZoneAlert`. Creates a new alert for the specified heart rate zone.
- [HeartRateZoneAlert](heartratezonealert.md): An alert for a heart rate zone.

### Creating power alerts

- [power(\_:unit:)](workoutalert/power%28__unit_%29-57ekz.md): Conforms when `Self` is `PowerRangeAlert`. Creates a new power alert for the target range.
- [PowerRangeAlert](powerrangealert.md): An alert for a range of power values.
- [power(\_:unit:)](workoutalert/power%28__unit_%29-289mz.md): Conforms when `Self` is `PowerThresholdAlert`. Creates an alert for the specified power threshold.
- [PowerThresholdAlert](powerthresholdalert.md): An alert for a power threshold.
- [power(zone:)](workoutalert/power%28zone_%29.md): Conforms when `Self` is `PowerZoneAlert`. Creates a new alert for the specified power zone.
- [PowerZoneAlert](powerzonealert.md): An alert for a power zone.

### Creating speed alerts

- [speed(\_:unit:metric:)](workoutalert/speed%28__unit_metric_%29-1o2j.md): Conforms when `Self` is `SpeedRangeAlert`. Creates a new speed alert for the provided range.
- [SpeedRangeAlert](speedrangealert.md): An alert for a range of speed values.
- [speed(\_:unit:metric:)](workoutalert/speed%28__unit_metric_%29-4zald.md): Conforms when `Self` is `SpeedThresholdAlert`. Creates a new speed threshold alert.
- [SpeedThresholdAlert](speedthresholdalert.md): An alert for a speed threshold.

### Type Methods

- [power(\_:unit:metric:)](workoutalert/power%28__unit_metric_%29-2847m.md): Conforms when `Self` is `PowerThresholdAlert`.
- [power(\_:unit:metric:)](workoutalert/power%28__unit_metric_%29-5c94p.md): Conforms when `Self` is `PowerRangeAlert`.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CadenceRangeAlert](cadencerangealert.md)
- [CadenceThresholdAlert](cadencethresholdalert.md)
- [HeartRateRangeAlert](heartraterangealert.md)
- [HeartRateZoneAlert](heartratezonealert.md)
- [PowerRangeAlert](powerrangealert.md)
- [PowerThresholdAlert](powerthresholdalert.md)
- [PowerZoneAlert](powerzonealert.md)
- [SpeedRangeAlert](speedrangealert.md)
- [SpeedThresholdAlert](speedthresholdalert.md)

## See Also

### Custom interval workouts

- [CustomWorkout](customworkout.md): A workout that includes a repeating series of work and recovery steps.
- [WorkoutStep](workoutstep.md): A step in a workout.
- [IntervalBlock](intervalblock.md): Blocks of work and recovery steps that repeat in a custom workout.
- [IntervalStep](intervalstep.md): An interval that represents a work or recovery step in a workout.
- [WorkoutGoal](workoutgoal.md): A value that specifies the goal for a workout.
