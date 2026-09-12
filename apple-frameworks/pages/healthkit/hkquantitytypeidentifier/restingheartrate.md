> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/restingheartrate](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/restingheartrate)

# restingHeartRate (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A quantity sample type that measures the user’s resting heart rate.

## Declaration

```swift
static let restingHeartRate: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use count/time units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

Resting heart rate is commonly correlated with overall cardiovascular health. It is an estimation of  the user’s lowest heart rate during periods of rest, and is intended to be used as a medically relevant metric. A resting heart rate sample is different than a sedentary heart rate sample (that is, a sample using the [heartRate](heartrate.md) identifier with a [HKHeartRateMotionContext.sedentary](../hkheartratemotioncontext/sedentary.md) motion context). For example, if the user finishes a high-intensity workout, and then sits down to rest, the next heart rate sample may be marked as a sedentary sample, but it is still much higher than the user’s actual resting heart rate. To produce more accurate results, the system estimates the resting heart rate by analyzing sedentary heart rate samples throughout the day.

Because the resting heart rate estimates become more accurate as the day progresses, the system may delete earlier samples and replace them with better estimates. Apple Watch replaces only the samples written by the watch for the current or previous day.

## See Also

### Vital signs

- [heartRate](heartrate.md): A quantity sample type that measures the user’s heart rate.
- [lowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
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

# HKQuantityTypeIdentifierRestingHeartRate (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A quantity sample type that measures the user’s resting heart rate.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierRestingHeartRate;
```

<a id="Discussion"></a>

## Discussion

These samples use count/time units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

Resting heart rate is commonly correlated with overall cardiovascular health. It is an estimation of  the user’s lowest heart rate during periods of rest, and is intended to be used as a medically relevant metric. A resting heart rate sample is different than a sedentary heart rate sample (that is, a sample using the [HKQuantityTypeIdentifierHeartRate](heartrate.md) identifier with a [HKHeartRateMotionContextSedentary](../hkheartratemotioncontext/sedentary.md) motion context). For example, if the user finishes a high-intensity workout, and then sits down to rest, the next heart rate sample may be marked as a sedentary sample, but it is still much higher than the user’s actual resting heart rate. To produce more accurate results, the system estimates the resting heart rate by analyzing sedentary heart rate samples throughout the day.

Because the resting heart rate estimates become more accurate as the day progresses, the system may delete earlier samples and replace them with better estimates. Apple Watch replaces only the samples written by the watch for the current or previous day.

## See Also

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierLowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
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
