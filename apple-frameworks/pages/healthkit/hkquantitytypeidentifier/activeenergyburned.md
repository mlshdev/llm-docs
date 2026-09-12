> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/activeenergyburned](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/activeenergyburned)

# activeEnergyBurned (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the amount of active energy the user has burned.

## Declaration

```swift
static let activeEnergyBurned: HKQuantityTypeIdentifier
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)
- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

Active energy is the energy that the user has burned due to physical activity and exercise. These samples should not include the resting energy burned during the sample’s duration. Use the health store’s [splitTotalEnergy(\_:start:end:resultsHandler:)](../hkhealthstore/splittotalenergy%28__start_end_resultshandler_%29.md) method to split a workout’s total energy burned into the active and resting portions, and then save each portion in its own sample. The system automatically records active energy samples on Apple Watch.

Active energy samples use energy units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

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
- [flightsClimbed](flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.

# HKQuantityTypeIdentifierActiveEnergyBurned (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the amount of active energy the user has burned.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierActiveEnergyBurned;
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)
- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

Active energy is the energy that the user has burned due to physical activity and exercise. These samples should not include the resting energy burned during the sample’s duration. Use the health store’s [splitTotalEnergy:startDate:endDate:resultsHandler:](../hkhealthstore/splittotalenergy%28__start_end_resultshandler_%29.md) method to split a workout’s total energy burned into the active and resting portions, and then save each portion in its own sample. The system automatically records active energy samples on Apple Watch.

Active energy samples use energy units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

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
- [HKQuantityTypeIdentifierFlightsClimbed](flightsclimbed.md): A quantity sample type that measures the number flights of stairs that the user has climbed.
