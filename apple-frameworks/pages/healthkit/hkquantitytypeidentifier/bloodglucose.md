> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/bloodglucose](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/bloodglucose)

# bloodGlucose (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s blood glucose level.

## Declaration

```swift
static let bloodGlucose: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use mass/volume units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

Please pay attention to the following issues while creating blood glucose samples:

- Blood glucose samples may be measured in mg/dL (milligrams per deciliter) or mmol/L (millimoles per liter), depending on the region.
- The Health app lets users select their preferred units. The Health app uses these units for both the display and manual entry of blood glucose samples.
- You can access the preferred units using the [preferredUnits(for:completion:)](../hkhealthstore/preferredunits%28for_completion_%29.md) method. If your app connects to a glucose meter that uses units other than the preferred units, alert the user. You can also recommend that users change their preferred units to match the glucose meter.
- Don’t save samples to HealthKit when the blood glucose meter is processing control solution.

## Topics

### Metadata Keys

- [HKMetadataKeyBloodGlucoseMealTime](../hkmetadatakeybloodglucosemealtime.md): A key that indicates the relative timing of a blood glucose reading to a meal.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Lab and test results

- [bloodAlcoholContent](bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [electrodermalActivity](electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [forcedExpiratoryVolume1](forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [forcedVitalCapacity](forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [inhalerUsage](inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [insulinDelivery](insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [numberOfTimesFallen](numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [peakExpiratoryFlowRate](peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [peripheralPerfusionIndex](peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.

# HKQuantityTypeIdentifierBloodGlucose (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s blood glucose level.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierBloodGlucose;
```

<a id="Discussion"></a>

## Discussion

These samples use mass/volume units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

Please pay attention to the following issues while creating blood glucose samples:

- Blood glucose samples may be measured in mg/dL (milligrams per deciliter) or mmol/L (millimoles per liter), depending on the region.
- The Health app lets users select their preferred units. The Health app uses these units for both the display and manual entry of blood glucose samples.
- You can access the preferred units using the [preferredUnitsForQuantityTypes:completion:](../hkhealthstore/preferredunits%28for_completion_%29.md) method. If your app connects to a glucose meter that uses units other than the preferred units, alert the user. You can also recommend that users change their preferred units to match the glucose meter.
- Don’t save samples to HealthKit when the blood glucose meter is processing control solution.

## Topics

### Metadata Keys

- [HKMetadataKeyBloodGlucoseMealTime](../hkmetadatakeybloodglucosemealtime.md): A key that indicates the relative timing of a blood glucose reading to a meal.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Lab and test results

- [HKQuantityTypeIdentifierBloodAlcoholContent](bloodalcoholcontent.md): A quantity sample type that measures the user’s blood alcohol content.
- [HKQuantityTypeIdentifierElectrodermalActivity](electrodermalactivity.md): A quantity sample type that measures electrodermal activity.
- [HKQuantityTypeIdentifierForcedExpiratoryVolume1](forcedexpiratoryvolume1.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs during the first second of a forced exhalation.
- [HKQuantityTypeIdentifierForcedVitalCapacity](forcedvitalcapacity.md): A quantity sample type that measures the amount of air that can be forcibly exhaled from the lungs after taking the deepest breath possible.
- [HKQuantityTypeIdentifierInhalerUsage](inhalerusage.md): A quantity sample type that measures the number of puffs the user takes from their inhaler.
- [HKQuantityTypeIdentifierInsulinDelivery](insulindelivery.md): A quantity sample that measures the amount of insulin delivered.
- [HKQuantityTypeIdentifierNumberOfTimesFallen](numberoftimesfallen.md): A quantity sample type that measures the number of times the user fell.
- [HKQuantityTypeIdentifierPeakExpiratoryFlowRate](peakexpiratoryflowrate.md): A quantity sample type that measures the user’s maximum flow rate generated during a forceful exhalation.
- [HKQuantityTypeIdentifierPeripheralPerfusionIndex](peripheralperfusionindex.md): A quantity sample type that measures the user’s peripheral perfusion index.
