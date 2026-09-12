> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/lowheartrateevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/lowheartrateevent)

# lowHeartRateEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A category sample type for low heart rate events.

## Declaration

```swift
static let lowHeartRateEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

The system creates [lowHeartRateEvent](lowheartrateevent.md) samples whenever Apple Watch produces a low heart rate notification. For more information, see [Heart rate notifications on your Apple Watch](https://support.apple.com/en-us/HT208931).

The low heart rate samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new low heart rate events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Low Heart Rate Notifications \> Add Data.

These samples have a value of [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md) and include [HKMetadataKeyHeartRateEventThreshold](../hkmetadatakeyheartrateeventthreshold.md) metadata.

## Topics

### Metadata Keys

- [HKMetadataKeyHeartRateEventThreshold](../hkmetadatakeyheartrateeventthreshold.md): A key that records the threshold of high or low heart rate events in beats per minute.

## See Also

### Vital signs

- [heartRate](../hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [highHeartRateEvent](highheartrateevent.md): A category sample type for high heart rate events.
- [irregularHeartRhythmEvent](irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
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

# HKCategoryTypeIdentifierLowHeartRateEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A category sample type for low heart rate events.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierLowHeartRateEvent;
```

<a id="Discussion"></a>

## Discussion

The system creates [HKCategoryTypeIdentifierLowHeartRateEvent](lowheartrateevent.md) samples whenever Apple Watch produces a low heart rate notification. For more information, see [Heart rate notifications on your Apple Watch](https://support.apple.com/en-us/HT208931).

The low heart rate samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new low heart rate events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Low Heart Rate Notifications \> Add Data.

These samples have a value of [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md) and include [HKMetadataKeyHeartRateEventThreshold](../hkmetadatakeyheartrateeventthreshold.md) metadata.

## Topics

### Metadata Keys

- [HKMetadataKeyHeartRateEventThreshold](../hkmetadatakeyheartrateeventthreshold.md): A key that records the threshold of high or low heart rate events in beats per minute.

## See Also

### Vital signs

- [HKQuantityTypeIdentifierHeartRate](../hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
- [HKCategoryTypeIdentifierHighHeartRateEvent](highheartrateevent.md): A category sample type for high heart rate events.
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](irregularheartrhythmevent.md): A category sample type for irregular heart rhythm events.
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
