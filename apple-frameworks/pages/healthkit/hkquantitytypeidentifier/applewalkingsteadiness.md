> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/applewalkingsteadiness](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/applewalkingsteadiness)

# appleWalkingSteadiness (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A quantity sample type that measures the steadiness of the user’s gait.

## Declaration

```swift
static let appleWalkingSteadiness: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Samples that match the Walking Steadiness identifier use percentage units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). For example, the following code creates a percentage unit.

```swift
let percentage = HKUnit.percent()
```

The value can be between `0.0` and `1.0`.

The system automatically records Walking Steadiness samples on iPhone 8 or later. The user must carry their phone near their waist—such as in a pocket—and walk steadily on flat ground. To ensure accuracy, the user must set their [height](height.md) value in the Health app. The system creates a Walking Steadiness sample every 7 days—though the interval can be longer if it doesn’t have enough mobility data to calculate accurate results. iPhone doesn’t record Walking Steadiness samples if the user’s wheelchair status is on.

Walking Steadiness samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new Walking Steadiness samples to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Mobility \> Walking Steadiness \> Add Data.

## See Also

### Mobility

- [appleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [sixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

# HKQuantityTypeIdentifierAppleWalkingSteadiness (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A quantity sample type that measures the steadiness of the user’s gait.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierAppleWalkingSteadiness;
```

<a id="Discussion"></a>

## Discussion

Samples that match the Walking Steadiness identifier use percentage units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). For example, the following code creates a percentage unit.

```swift
let percentage = HKUnit.percent()
```

The value can be between `0.0` and `1.0`.

The system automatically records Walking Steadiness samples on iPhone 8 or later. The user must carry their phone near their waist—such as in a pocket—and walk steadily on flat ground. To ensure accuracy, the user must set their [HKQuantityTypeIdentifierHeight](height.md) value in the Health app. The system creates a Walking Steadiness sample every 7 days—though the interval can be longer if it doesn’t have enough mobility data to calculate accurate results. iPhone doesn’t record Walking Steadiness samples if the user’s wheelchair status is on.

Walking Steadiness samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new Walking Steadiness samples to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Mobility \> Walking Steadiness \> Add Data.

## See Also

### Mobility

- [HKCategoryTypeIdentifierAppleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingStepLength](walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.
