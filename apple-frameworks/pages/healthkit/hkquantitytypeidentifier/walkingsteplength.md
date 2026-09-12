> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/walkingsteplength](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/walkingsteplength)

# walkingStepLength (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.

## Declaration

```swift
static let walkingStepLength: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Step length is the distance between the user’s front foot and back foot when they walk. The system automatically records walking step length samples on iPhone 8 or later. The user must carry their phone near their waist—such as in a pocket—and walk steadily on flat ground. To ensure accuracy, the user’s [height](height.md) value must be up to date. The system records 10 to 30 step length samples on a typical day. iPhone doesn’t record walking step length samples if the user’s wheelchair status is on.

These samples use distance units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). For example, the following code creates a unit in meters.

```swift
let meters = HKUnit.meter()
```

The sample’s [quantity](../hkquantitysample/quantity.md) property represents the average step length between the sample’s [startDate](../hksample/startdate.md) and [endDate](../hksample/enddate.md) properties.

## See Also

### Related Documentation

- [HKDevicePlacementSide](../hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.

### Mobility

- [appleWalkingSteadiness](applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [appleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [sixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

# HKQuantityTypeIdentifierWalkingStepLength (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierWalkingStepLength;
```

<a id="Discussion"></a>

## Discussion

Step length is the distance between the user’s front foot and back foot when they walk. The system automatically records walking step length samples on iPhone 8 or later. The user must carry their phone near their waist—such as in a pocket—and walk steadily on flat ground. To ensure accuracy, the user’s [HKQuantityTypeIdentifierHeight](height.md) value must be up to date. The system records 10 to 30 step length samples on a typical day. iPhone doesn’t record walking step length samples if the user’s wheelchair status is on.

These samples use distance units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). For example, the following code creates a unit in meters.

```swift
let meters = HKUnit.meter()
```

The sample’s [quantity](../hkquantitysample/quantity.md) property represents the average step length between the sample’s [startDate](../hksample/startdate.md) and [endDate](../hksample/enddate.md) properties.

## See Also

### Related Documentation

- [HKDevicePlacementSide](../hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.

### Mobility

- [HKQuantityTypeIdentifierAppleWalkingSteadiness](applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [HKCategoryTypeIdentifierAppleWalkingSteadinessEvent](../hkcategorytypeidentifier/applewalkingsteadinessevent.md): A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.
