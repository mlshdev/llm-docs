> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdatatypeidentifierheartbeatseries](https://developer.apple.com/documentation/healthkit/hkdatatypeidentifierheartbeatseries)

# HKDataTypeIdentifierHeartbeatSeries (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A series sample containing heartbeat data.

## Declaration

```swift
let HKDataTypeIdentifierHeartbeatSeries: String
```

## See Also

### Related Documentation

- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.

### Vital signs

- [heartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [lowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [restingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [heartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [walkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [oxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [bloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [bloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.

# HKDataTypeIdentifierHeartbeatSeries (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A series sample containing heartbeat data.

## Declaration

```objectivec
extern NSString * const HKDataTypeIdentifierHeartbeatSeries;
```

## See Also

### Related Documentation

- [HKHeartbeatSeriesSample](hkheartbeatseriessample.md): A sample that represents a series of heartbeats.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKHeartbeatSeriesBuilder](hkheartbeatseriesbuilder.md): A builder object for incrementally building a heartbeat series.

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierLowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](hkcategorytypeidentifier/irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
- [HKQuantityTypeIdentifierRestingHeartRate](hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierAtrialFibrillationBurden](hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKQuantityTypeIdentifierOxygenSaturation](hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKCorrelationTypeIdentifierBloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKQuantityTypeIdentifierBloodPressureSystolic](hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
