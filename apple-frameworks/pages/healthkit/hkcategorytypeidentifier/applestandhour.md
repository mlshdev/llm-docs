> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/applestandhour](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/applestandhour)

# appleStandHour (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.

## Declaration

```swift
static let appleStandHour: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

This quantity type counts the number of hours during which the user stood and moved for at least one minute per hour.

If [wheelchairUse()](../hkhealthstore/wheelchairuse%28%29.md) returns [HKWheelchairUse.yes](../hkwheelchairuse/yes.md), Apple Watch calculates the number of hours during which the user rolled for at least one minute instead. Also, the Activity rings display Roll hours instead of Stand hours.

> **Note**

>  Roll hours are recorded using the [appleStandHours](../hkactivitysummary/applestandhours.md) quantity type. Check the [wheelchairUse()](../hkhealthstore/wheelchairuse%28%29.md) method’s return value to determine whether the data should be interpreted as Roll or Stand hours.

These samples use values from the [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md) enumeration.  They represent the data tracked by the Stand ring on Apple Watch.

## See Also

### Activity

- [stepCount](../hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [distanceWalkingRunning](../hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [runningSpeed](../hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [runningStrideLength](../hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [runningPower](../hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [runningGroundContactTime](../hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [runningVerticalOscillation](../hkquantitytypeidentifier/runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [distanceCycling](../hkquantitytypeidentifier/distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [pushCount](../hkquantitytypeidentifier/pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [distanceWheelchair](../hkquantitytypeidentifier/distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [swimmingStrokeCount](../hkquantitytypeidentifier/swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [distanceSwimming](../hkquantitytypeidentifier/distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [distanceDownhillSnowSports](../hkquantitytypeidentifier/distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [basalEnergyBurned](../hkquantitytypeidentifier/basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [activeEnergyBurned](../hkquantitytypeidentifier/activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.

# HKCategoryTypeIdentifierAppleStandHour (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type that counts the number of hours in the day during which the user has stood and moved for at least one minute per hour.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierAppleStandHour;
```

<a id="Discussion"></a>

## Discussion

This quantity type counts the number of hours during which the user stood and moved for at least one minute per hour.

If [wheelchairUseWithError:](../hkhealthstore/wheelchairuse%28%29.md) returns [HKWheelchairUseYes](../hkwheelchairuse/yes.md), Apple Watch calculates the number of hours during which the user rolled for at least one minute instead. Also, the Activity rings display Roll hours instead of Stand hours.

> **Note**

>  Roll hours are recorded using the [appleStandHours](../hkactivitysummary/applestandhours.md) quantity type. Check the [wheelchairUseWithError:](../hkhealthstore/wheelchairuse%28%29.md) method’s return value to determine whether the data should be interpreted as Roll or Stand hours.

These samples use values from the [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md) enumeration.  They represent the data tracked by the Stand ring on Apple Watch.

## See Also

### Activity

- [HKQuantityTypeIdentifierStepCount](../hkquantitytypeidentifier/stepcount.md): A quantity sample type that measures the number of steps the user has taken.
- [HKQuantityTypeIdentifierDistanceWalkingRunning](../hkquantitytypeidentifier/distancewalkingrunning.md): A quantity sample type that measures the distance the user has moved by walking or running.
- [HKQuantityTypeIdentifierRunningSpeed](../hkquantitytypeidentifier/runningspeed.md): A quantity sample type that measures the runner’s speed.
- [HKQuantityTypeIdentifierRunningStrideLength](../hkquantitytypeidentifier/runningstridelength.md): A quantity sample type that measures the distance covered by a single step while running.
- [HKQuantityTypeIdentifierRunningPower](../hkquantitytypeidentifier/runningpower.md): A quantity sample type that measures the rate of work required for the runner to maintain their speed.
- [HKQuantityTypeIdentifierRunningGroundContactTime](../hkquantitytypeidentifier/runninggroundcontacttime.md): A quantity sample type that measures the amount of time the runner’s foot is in contact with the ground while running.
- [HKQuantityTypeIdentifierRunningVerticalOscillation](../hkquantitytypeidentifier/runningverticaloscillation.md): A quantity sample type measuring pelvis vertical range of motion during a single running stride.
- [HKQuantityTypeIdentifierDistanceCycling](../hkquantitytypeidentifier/distancecycling.md): A quantity sample type that measures the distance the user has moved by cycling.
- [HKQuantityTypeIdentifierPushCount](../hkquantitytypeidentifier/pushcount.md): A quantity sample type that measures the number of pushes that the user has performed while using a wheelchair.
- [HKQuantityTypeIdentifierDistanceWheelchair](../hkquantitytypeidentifier/distancewheelchair.md): A quantity sample type that measures the distance the user has moved using a wheelchair.
- [HKQuantityTypeIdentifierSwimmingStrokeCount](../hkquantitytypeidentifier/swimmingstrokecount.md): A quantity sample type that measures the number of strokes performed while swimming.
- [HKQuantityTypeIdentifierDistanceSwimming](../hkquantitytypeidentifier/distanceswimming.md): A quantity sample type that measures the distance the user has moved while swimming.
- [HKQuantityTypeIdentifierDistanceDownhillSnowSports](../hkquantitytypeidentifier/distancedownhillsnowsports.md): A quantity sample type that measures the distance the user has traveled while skiing or snowboarding.
- [HKQuantityTypeIdentifierBasalEnergyBurned](../hkquantitytypeidentifier/basalenergyburned.md): A quantity sample type that measures the resting energy burned by the user.
- [HKQuantityTypeIdentifierActiveEnergyBurned](../hkquantitytypeidentifier/activeenergyburned.md): A quantity sample type that measures the amount of active energy the user has burned.
