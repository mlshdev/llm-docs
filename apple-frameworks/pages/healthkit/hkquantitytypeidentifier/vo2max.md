> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/vo2max](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/vo2max)

# vo2Max (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A quantity sample that measures the maximal oxygen consumption during exercise.

## Declaration

```swift
static let vo2Max: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

VO2max—the maximum amount of oxygen your body can consume during exercise— is a strong predictor of overall health. Clinical tests measure VO2max by having the patient exercise on a treadmill or bike, with an intensity that increases every few minutes until exhaustion.

On Apple Watch Series 3 or later, the system automatically saves [vo2Max](vo2max.md) samples to HealthKit. The watch estimates the user’s VO2max based on data gathered while the user is walking or running outdoors. For more information, see [Understand Estimated Test Results](vo2max.md#Understand-Estimated-Test-Results).

You can also create and save your own [vo2Max](vo2max.md) samples—for example, when creating an app that records the results of tests performed in a clinic. When creating [vo2Max](vo2max.md) samples, use the [HKMetadataKeyVO2MaxTestType](../hkmetadatakeyvo2maxtesttype.md) metadata key to specify the type of test used to generate the sample.

[vo2Max](vo2max.md) samples use volume/mass/time units (described in [HKUnit](../hkunit.md)), measured in ml/kg /min. They measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

<a id="Understand-Estimated-Test-Results"></a>

### Understand Estimated Test Results

Apple Watch Series 3 and later estimates the user’s VO2max by measuring the user’s heart rate response to exercise. The system can generate VO2max samples after an outdoor walk, outdoor run, or hiking workout. During the outdoor activity, the user must cover relatively flat ground (a grade of less than 5% incline or decline) with adequate GPS, heart rate signal quality, and sufficient exertion. The user must maintain a heart rate approximately greater than or equal to 130% of their resting heart rate. The system can estimate VO2max ranges from 14-60 ml/kg/min

The user must wear their Apple Watch for at least one day before the system can generate the first [vo2Max](vo2max.md) sample. Additionally, the system doesn’t generate a [vo2Max](vo2max.md) sample on the user’s first workout.

Apple Watch estimates *VO2max* based on sub-maximal predictions rather than *peakVO2*. Users don’t need to achieve peak heart rate to receive an estimate; however, the system does need to estimate their peak heart rate. Users who take medications that may reduce their peak heart rate can toggle a medication switch in the Health app to enable more accurate VO2max estimates.

## Topics

### Metadata Keys

- [HKMetadataKeyVO2MaxTestType](../hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.

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

# HKQuantityTypeIdentifierVO2Max (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A quantity sample that measures the maximal oxygen consumption during exercise.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierVO2Max;
```

<a id="Discussion"></a>

## Discussion

VO2max—the maximum amount of oxygen your body can consume during exercise— is a strong predictor of overall health. Clinical tests measure VO2max by having the patient exercise on a treadmill or bike, with an intensity that increases every few minutes until exhaustion.

On Apple Watch Series 3 or later, the system automatically saves [HKQuantityTypeIdentifierVO2Max](vo2max.md) samples to HealthKit. The watch estimates the user’s VO2max based on data gathered while the user is walking or running outdoors. For more information, see [Understand Estimated Test Results](vo2max.md#Understand-Estimated-Test-Results).

You can also create and save your own [HKQuantityTypeIdentifierVO2Max](vo2max.md) samples—for example, when creating an app that records the results of tests performed in a clinic. When creating [HKQuantityTypeIdentifierVO2Max](vo2max.md) samples, use the [HKMetadataKeyVO2MaxTestType](../hkmetadatakeyvo2maxtesttype.md) metadata key to specify the type of test used to generate the sample.

[HKQuantityTypeIdentifierVO2Max](vo2max.md) samples use volume/mass/time units (described in [HKUnit](../hkunit.md)), measured in ml/kg /min. They measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

<a id="Understand-Estimated-Test-Results"></a>

### Understand Estimated Test Results

Apple Watch Series 3 and later estimates the user’s VO2max by measuring the user’s heart rate response to exercise. The system can generate VO2max samples after an outdoor walk, outdoor run, or hiking workout. During the outdoor activity, the user must cover relatively flat ground (a grade of less than 5% incline or decline) with adequate GPS, heart rate signal quality, and sufficient exertion. The user must maintain a heart rate approximately greater than or equal to 130% of their resting heart rate. The system can estimate VO2max ranges from 14-60 ml/kg/min

The user must wear their Apple Watch for at least one day before the system can generate the first [HKQuantityTypeIdentifierVO2Max](vo2max.md) sample. Additionally, the system doesn’t generate a [HKQuantityTypeIdentifierVO2Max](vo2max.md) sample on the user’s first workout.

Apple Watch estimates *VO2max* based on sub-maximal predictions rather than *peakVO2*. Users don’t need to achieve peak heart rate to receive an estimate; however, the system does need to estimate their peak heart rate. Users who take medications that may reduce their peak heart rate can toggle a medication switch in the Health app to enable more accurate VO2max estimates.

## Topics

### Metadata Keys

- [HKMetadataKeyVO2MaxTestType](../hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.

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
