> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/peripheralperfusionindex](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/peripheralperfusionindex)

# peripheralPerfusionIndex (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s peripheral perfusion index.

## Declaration

```swift
static let peripheralPerfusionIndex: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

The peripheral perfusion index measures the pulse strength at the monitoring site. These samples use percent units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Lab and test results

- [bloodAlcoholContent](bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [bloodGlucose](bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [electrodermalActivity](electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [forcedExpiratoryVolume1](forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [forcedVitalCapacity](forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [inhalerUsage](inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [insulinDelivery](insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [numberOfTimesFallen](numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [peakExpiratoryFlowRate](peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.

# HKQuantityTypeIdentifierPeripheralPerfusionIndex (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s peripheral perfusion index.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierPeripheralPerfusionIndex;
```

<a id="Discussion"></a>

## Discussion

The peripheral perfusion index measures the pulse strength at the monitoring site. These samples use percent units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Lab and test results

- [HKQuantityTypeIdentifierBloodAlcoholContent](bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [HKQuantityTypeIdentifierBloodGlucose](bloodglucose.md): A quantity sample type that measures the user’s blood glucose level.
- [HKQuantityTypeIdentifierElectrodermalActivity](electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [HKQuantityTypeIdentifierForcedExpiratoryVolume1](forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [HKQuantityTypeIdentifierForcedVitalCapacity](forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [HKQuantityTypeIdentifierInhalerUsage](inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [HKQuantityTypeIdentifierInsulinDelivery](insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [HKQuantityTypeIdentifierNumberOfTimesFallen](numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [HKQuantityTypeIdentifierPeakExpiratoryFlowRate](peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
