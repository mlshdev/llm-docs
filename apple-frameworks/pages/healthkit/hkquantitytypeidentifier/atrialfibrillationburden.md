> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/atrialfibrillationburden](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/atrialfibrillationburden)

# atrialFibrillationBurden (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.

## Declaration

```swift
static let atrialFibrillationBurden: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

On watchOS 9 and iOS 16 and later, once a person enables AFib History, Apple Watch begins collecting heart-rhythm data more frequently. iPhone then calculates the AFib burden once a week, as long as Apple Watch has gathered enough heart-rhythm data during that week.

If iPhone is unlocked and isn’t under heavy load, it starts analyzing heart rhythm samples around 8:00 am Monday morning. As soon as it finishes this analysis, iPhone sends the user a notification telling them the results.

These samples use percentage units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). The sample’s value represents an estimate of the percentage of time a person’s heart shows signs of AFib while wearing Apple Watch.

> **Important**

>  These samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new AFib burden samples to the HealthKit store.

## See Also

### Vital signs

- [heartRate](heartrate.md): A quantity sample type that measures the user’s heart rate.
- [lowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [restingHeartRate](restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [heartRateVariabilitySDNN](heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [walkingHeartRateAverage](walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [oxygenSaturation](oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [bloodPressureSystolic](bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [bloodPressureDiastolic](bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.

# HKQuantityTypeIdentifierAtrialFibrillationBurden (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierAtrialFibrillationBurden;
```

<a id="Discussion"></a>

## Discussion

On watchOS 9 and iOS 16 and later, once a person enables AFib History, Apple Watch begins collecting heart-rhythm data more frequently. iPhone then calculates the AFib burden once a week, as long as Apple Watch has gathered enough heart-rhythm data during that week.

If iPhone is unlocked and isn’t under heavy load, it starts analyzing heart rhythm samples around 8:00 am Monday morning. As soon as it finishes this analysis, iPhone sends the user a notification telling them the results.

These samples use percentage units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). The sample’s value represents an estimate of the percentage of time a person’s heart shows signs of AFib while wearing Apple Watch.

> **Important**

>  These samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new AFib burden samples to the HealthKit store.

## See Also

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierLowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [HKQuantityTypeIdentifierRestingHeartRate](restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKQuantityTypeIdentifierOxygenSaturation](oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKCorrelationTypeIdentifierBloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKQuantityTypeIdentifierBloodPressureSystolic](bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
