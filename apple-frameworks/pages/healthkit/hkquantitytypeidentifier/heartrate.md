> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/heartrate](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/heartrate)

# heartRate (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s heart rate.

## Declaration

```swift
static let heartRate: HKQuantityTypeIdentifier
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

These samples use count/time units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

Heart rate samples may include motion context information, which is stored as metadata using the [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) key. The value of this key is an [NSNumber](../../foundation/nsnumber.md) object that contains a [HKHeartRateMotionContext](../hkheartratemotioncontext.md) value.

The motion context gives additional information about the user’s activity level when the heart rate sample was taken. Apple Watch uses the following guidelines when setting the motion context:

1. If the user has been still for at least 5 minutes prior to the sample, the context is set to the [HKHeartRateMotionContext.sedentary](../hkheartratemotioncontext/sedentary.md) value.
2. If the user is in motion, the context is set to the [HKHeartRateMotionContext.active](../hkheartratemotioncontext/active.md) value.

You can add motion context to the metadata of any heart rate samples that you create. This means other apps may also save heart rate samples with (or without) the [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) metadata key.

Note that not all heart rate samples have a motion context. For example, if Apple Watch cannot determine the motion context, it creates samples without a [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) metadata key. In addition, heart rate samples recorded by an Apple Watch (1st generation) or by a device running watchOS 3 or earlier do not have the motion context metadata key. Treat these samples as if they used the [HKHeartRateMotionContext.notSet](../hkheartratemotioncontext/notset.md) motion context.

## Topics

### Metadata Keys

- [HKMetadataKeyHeartRateSensorLocation](../hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Vital signs

- [lowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [restingHeartRate](restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [heartRateVariabilitySDNN](heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [walkingHeartRateAverage](walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [oxygenSaturation](oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [bloodPressureSystolic](bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [bloodPressureDiastolic](bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.

# HKQuantityTypeIdentifierHeartRate (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s heart rate.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierHeartRate;
```

## Mentioned In

- [Accessing condensed workout samples](../accessing-condensed-workout-samples.md)
- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

These samples use count/time units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

Heart rate samples may include motion context information, which is stored as metadata using the [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) key. The value of this key is an [NSNumber](../../foundation/nsnumber.md) object that contains a [HKHeartRateMotionContext](../hkheartratemotioncontext.md) value.

The motion context gives additional information about the user’s activity level when the heart rate sample was taken. Apple Watch uses the following guidelines when setting the motion context:

1. If the user has been still for at least 5 minutes prior to the sample, the context is set to the [HKHeartRateMotionContextSedentary](../hkheartratemotioncontext/sedentary.md) value.
2. If the user is in motion, the context is set to the [HKHeartRateMotionContextActive](../hkheartratemotioncontext/active.md) value.

You can add motion context to the metadata of any heart rate samples that you create. This means other apps may also save heart rate samples with (or without) the [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) metadata key.

Note that not all heart rate samples have a motion context. For example, if Apple Watch cannot determine the motion context, it creates samples without a [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) metadata key. In addition, heart rate samples recorded by an Apple Watch (1st generation) or by a device running watchOS 3 or earlier do not have the motion context metadata key. Treat these samples as if they used the [HKHeartRateMotionContextNotSet](../hkheartratemotioncontext/notset.md) motion context.

## Topics

### Metadata Keys

- [HKMetadataKeyHeartRateSensorLocation](../hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Vital signs

- [HKCategoryTypeIdentifierLowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [HKQuantityTypeIdentifierRestingHeartRate](restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierAtrialFibrillationBurden](atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKQuantityTypeIdentifierOxygenSaturation](oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKCorrelationTypeIdentifierBloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKQuantityTypeIdentifierBloodPressureSystolic](bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
