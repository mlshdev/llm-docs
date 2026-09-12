> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/irregularheartrhythmevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/irregularheartrhythmevent)

# irregularHeartRhythmEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A category sample type for irregular heart rhythm events.

## Declaration

```swift
static let irregularHeartRhythmEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

The system creates [irregularHeartRhythmEvent](irregularheartrhythmevent.md) samples whenever Apple Watch produces an irregular rhythm notification. For more information, see [Heart rate notifications on your Apple Watch](https://support.apple.com/en-us/HT208931).

The irregular rhythm samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new irregular rhythm events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Irregular Rhythm Notifications \> Add Data.

These samples have a value of [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md).

## See Also

### Vital signs

- [heartRate](../hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [lowHeartRateEvent](lowheartrateevent.md): A category sample type for low heart rate events.
- [highHeartRateEvent](highheartrateevent.md): A category sample type for high heart rate events.
- [restingHeartRate](../hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [heartRateVariabilitySDNN](../hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [heartRateRecoveryOneMinute](../hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [atrialFibrillationBurden](../hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [walkingHeartRateAverage](../hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [oxygenSaturation](../hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [bodyTemperature](../hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [bloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [bloodPressureSystolic](../hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [bloodPressureDiastolic](../hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.

# HKCategoryTypeIdentifierIrregularHeartRhythmEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A category sample type for irregular heart rhythm events.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierIrregularHeartRhythmEvent;
```

<a id="Discussion"></a>

## Discussion

The system creates [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](irregularheartrhythmevent.md) samples whenever Apple Watch produces an irregular rhythm notification. For more information, see [Heart rate notifications on your Apple Watch](https://support.apple.com/en-us/HT208931).

The irregular rhythm samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new irregular rhythm events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Irregular Rhythm Notifications \> Add Data.

These samples have a value of [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md).

## See Also

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](../hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierLowHeartRateEvent](lowheartrateevent.md): A category sample type for low heart rate events.
- [HKCategoryTypeIdentifierHighHeartRateEvent](highheartrateevent.md): A category sample type for high heart rate events.
- [HKQuantityTypeIdentifierRestingHeartRate](../hkquantitytypeidentifier/restingheartrate.md): A quantity sample type that measures the user’s resting heart rate.
- [HKQuantityTypeIdentifierHeartRateVariabilitySDNN](../hkquantitytypeidentifier/heartratevariabilitysdnn.md): A quantity sample type that measures the standard deviation of heartbeat intervals.
- [HKQuantityTypeIdentifierHeartRateRecoveryOneMinute](../hkquantitytypeidentifier/heartraterecoveryoneminute.md): A quantity sample that records the reduction in heart rate from the peak exercise rate to the rate one minute after exercising ended.
- [HKQuantityTypeIdentifierAtrialFibrillationBurden](../hkquantitytypeidentifier/atrialfibrillationburden.md): A quantity type that measures an estimate of the percentage of time a person’s heart shows signs of atrial fibrillation (AFib) while wearing Apple Watch.
- [HKQuantityTypeIdentifierWalkingHeartRateAverage](../hkquantitytypeidentifier/walkingheartrateaverage.md): A quantity sample type that measures the user’s heart rate while walking.
- [HKDataTypeIdentifierHeartbeatSeries](../hkdatatypeidentifierheartbeatseries.md): A series sample containing heartbeat data.
- [HKElectrocardiogramType](../hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKQuantityTypeIdentifierOxygenSaturation](../hkquantitytypeidentifier/oxygensaturation.md): A quantity sample type that measures the user’s oxygen saturation.
- [HKQuantityTypeIdentifierBodyTemperature](../hkquantitytypeidentifier/bodytemperature.md): A quantity sample type that measures the user’s body temperature.
- [HKCorrelationTypeIdentifierBloodPressure](../hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKQuantityTypeIdentifierBloodPressureSystolic](../hkquantitytypeidentifier/bloodpressuresystolic.md): A quantity sample type that measures the user’s systolic blood pressure.
- [HKQuantityTypeIdentifierBloodPressureDiastolic](../hkquantitytypeidentifier/bloodpressurediastolic.md): A quantity sample type that measures the user’s diastolic blood pressure.
