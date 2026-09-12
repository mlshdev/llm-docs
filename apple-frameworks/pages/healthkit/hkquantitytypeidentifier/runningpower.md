> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/runningpower](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/runningpower)

# runningPower (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample type that measures the rate of work required for the runner to maintain their speed.

## Declaration

```swift
static let runningPower: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use power units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). During outdoor running workouts, the system automatically records running power samples on Apple Watch SE and Series 6 and later. Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Related Documentation

- [appleWalkingSteadiness](applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [appleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [sixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### Activity

- [stepCount](stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [runningSpeed](runningspeed.md): A quantity sample type that measures the runner’s speed.
- [runningStrideLength](runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
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
- [flightsClimbed](flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.

# HKQuantityTypeIdentifierRunningPower (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample type that measures the rate of work required for the runner to maintain their speed.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierRunningPower;
```

<a id="Discussion"></a>

## Discussion

These samples use power units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). During outdoor running workouts, the system automatically records running power samples on Apple Watch SE and Series 6 and later. Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifierAppleWalkingSteadiness](applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [HKCategoryTypeIdentifierAppleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingStepLength](walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

### Activity

- [HKQuantityTypeIdentifierStepCount](stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [HKQuantityTypeIdentifierDistanceWalkingRunning](distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [HKQuantityTypeIdentifierRunningSpeed](runningspeed.md): A quantity sample type that measures the runner’s speed.
- [HKQuantityTypeIdentifierRunningStrideLength](runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
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
- [HKQuantityTypeIdentifierFlightsClimbed](flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.
