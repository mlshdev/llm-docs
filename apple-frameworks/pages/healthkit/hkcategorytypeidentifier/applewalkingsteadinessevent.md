> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/applewalkingsteadinessevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/applewalkingsteadinessevent)

# appleWalkingSteadinessEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.

## Declaration

```swift
static let appleWalkingSteadinessEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Samples of this type use values from the [HKCategoryValueAppleWalkingSteadinessEvent](../hkcategoryvalueapplewalkingsteadinessevent.md) enumeration.

Walking Steadiness events are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new Walking Steadiness events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Mobility \> Walking Steadiness Notifications \> Add Data.

## See Also

### Mobility

- [appleWalkingSteadiness](../hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [sixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [walkingSpeed](../hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [walkingStepLength](../hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [walkingAsymmetryPercentage](../hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [walkingDoubleSupportPercentage](../hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [stairAscentSpeed](../hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [stairDescentSpeed](../hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.

# HKCategoryTypeIdentifierAppleWalkingSteadinessEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A category sample type that records an incident where the user showed a reduced score for their gait’s steadiness.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierAppleWalkingSteadinessEvent;
```

<a id="Discussion"></a>

## Discussion

Samples of this type use values from the [HKCategoryValueAppleWalkingSteadinessEvent](../hkcategoryvalueapplewalkingsteadinessevent.md) enumeration.

Walking Steadiness events are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new Walking Steadiness events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Mobility \> Walking Steadiness Notifications \> Add Data.

## See Also

### Mobility

- [HKQuantityTypeIdentifierAppleWalkingSteadiness](../hkquantitytypeidentifier/applewalkingsteadiness.md): A quantity sample type that measures the steadiness of the user’s gait.
- [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md): A quantity sample type that stores the distance a user can walk during a six-minute walk test.
- [HKQuantityTypeIdentifierWalkingSpeed](../hkquantitytypeidentifier/walkingspeed.md): A quantity sample type that measures the user’s average speed when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingStepLength](../hkquantitytypeidentifier/walkingsteplength.md): A quantity sample type that measures the average length of the user’s step when walking steadily over flat ground.
- [HKQuantityTypeIdentifierWalkingAsymmetryPercentage](../hkquantitytypeidentifier/walkingasymmetrypercentage.md): A quantity sample type that measures the percentage of steps in which one foot moves at a different speed than the other when walking on flat ground.
- [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](../hkquantitytypeidentifier/walkingdoublesupportpercentage.md): A quantity sample type that measures the percentage of time when both of the user’s feet touch the ground while walking steadily over flat ground.
- [HKQuantityTypeIdentifierStairAscentSpeed](../hkquantitytypeidentifier/stairascentspeed.md): A quantity sample type measuring the user’s speed while climbing a flight of stairs.
- [HKQuantityTypeIdentifierStairDescentSpeed](../hkquantitytypeidentifier/stairdescentspeed.md): A quantity sample type measuring the user’s speed while descending a flight of stairs.
