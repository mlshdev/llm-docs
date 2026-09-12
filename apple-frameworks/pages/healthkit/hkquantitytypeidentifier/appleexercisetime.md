> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/appleexercisetime](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/appleexercisetime)

# appleExerciseTime (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

A quantity sample type that measures the amount of time the user spent exercising.

## Declaration

```swift
static let appleExerciseTime: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

This quantity type measures every full minute of movement that equals or exceeds the intensity of a brisk walk.

Apple watch automatically records exercise time. By default, the watch uses the accelerometer to estimate the intensity of the user’s movement. However, during workout sessions, the watch uses additional sensors, like the heart rate sensor and GPS, to generate estimates.

[HKWorkoutSession](../hkworkoutsession.md) sessions also contribute to the exercise time.  For more information, see [Fill the Activity rings](../hkworkout.md#Fill-the-Activity-rings).

These samples use time units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Activity

- [stepCount](stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [runningSpeed](runningspeed.md): A quantity sample type that measures the runner’s speed.
- [runningStrideLength](runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [runningPower](runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [runningGroundContactTime](runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [runningVerticalOscillation](runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [distanceCycling](distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [pushCount](pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [distanceWheelchair](distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [swimmingStrokeCount](swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [distanceSwimming](distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [distanceDownhillSnowSports](distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [basalEnergyBurned](basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [activeEnergyBurned](activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.

# HKQuantityTypeIdentifierAppleExerciseTime (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

A quantity sample type that measures the amount of time the user spent exercising.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierAppleExerciseTime;
```

<a id="Discussion"></a>

## Discussion

This quantity type measures every full minute of movement that equals or exceeds the intensity of a brisk walk.

Apple watch automatically records exercise time. By default, the watch uses the accelerometer to estimate the intensity of the user’s movement. However, during workout sessions, the watch uses additional sensors, like the heart rate sensor and GPS, to generate estimates.

[HKWorkoutSession](../hkworkoutsession.md) sessions also contribute to the exercise time.  For more information, see [Fill the Activity rings](../hkworkout.md#Fill-the-Activity-rings).

These samples use time units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Activity

- [HKQuantityTypeIdentifierStepCount](stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [HKQuantityTypeIdentifierDistanceWalkingRunning](distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [HKQuantityTypeIdentifierRunningSpeed](runningspeed.md): A quantity sample type that measures the runner’s speed.
- [HKQuantityTypeIdentifierRunningStrideLength](runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [HKQuantityTypeIdentifierRunningPower](runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [HKQuantityTypeIdentifierRunningGroundContactTime](runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [HKQuantityTypeIdentifierRunningVerticalOscillation](runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [HKQuantityTypeIdentifierDistanceCycling](distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [HKQuantityTypeIdentifierPushCount](pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [HKQuantityTypeIdentifierDistanceWheelchair](distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [HKQuantityTypeIdentifierSwimmingStrokeCount](swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [HKQuantityTypeIdentifierDistanceSwimming](distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [HKQuantityTypeIdentifierDistanceDownhillSnowSports](distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [HKQuantityTypeIdentifierBasalEnergyBurned](basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [HKQuantityTypeIdentifierActiveEnergyBurned](activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.
