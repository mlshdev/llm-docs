> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/metadata-keys](https://developer.apple.com/documentation/healthkit/metadata-keys)

# Metadata Keys (Swift)

**Framework:** HealthKit  
**Kind:** API Collection

Constants used to add metadata to objects stored in HealthKit.

<a id="overview"></a>

## Overview

Use these keys to facilitate sharing data between apps. You can also create your own custom keys to give HealthKit objects additional app-specific data.

## Topics

### General Keys

- [HKMetadataKeyExternalUUID](hkmetadatakeyexternaluuid.md): A unique identifier for an HKObject that is set by its source.
- [HKMetadataKeyTimeZone](hkmetadatakeytimezone.md): The user’s time zone when the HealthKit object was created.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)

### Estimate Keys

- [HKMetadataKeyDateOfEarliestDataUsedForEstimate](hkmetadatakeydateofearliestdatausedforestimate.md): The earliest date of data used to calculate the sample’s estimated value.
- [HKMetadataKeySessionEstimate](hkmetadatakeysessionestimate.md)

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

### Sync Keys

- [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md): A unique string that identifies a piece of data so it can be updated and synced.
- [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md): The version number for a piece of data, used when updating or syncing.

### Lab Keys

- [HKMetadataKeyWasTakenInLab](hkmetadatakeywastakeninlab.md): A key that indicates whether the sample was taken in a lab.
- [HKMetadataKeyReferenceRangeLowerLimit](hkmetadatakeyreferencerangelowerlimit.md): A key that indicates the lower limit of the reference range for a lab result.
- [HKMetadataKeyReferenceRangeUpperLimit](hkmetadatakeyreferencerangeupperlimit.md): A key that indicates the upper limit of the reference range for a lab result.

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.

### Workout Keys

- [Workout Metadata Keys](workout-metadata-keys.md): Constants that can be used to add metadata to workouts.

### Cardio Fitness Keys

- [HKMetadataKeyVO2MaxValue](hkmetadatakeyvo2maxvalue.md): The maximum oxygen consumption rate during exercise of increasing intensity.
- [HKMetadataKeyLowCardioFitnessEventThreshold](hkmetadatakeylowcardiofitnesseventthreshold.md): The VO2 max threshold used to categorize low-level cardio fitness events.

### Motion Keys

- [HKMetadataKeyUserMotionContext](hkmetadatakeyusermotioncontext.md): The person’s motion during the sample’s time period.

### Nutrition Keys

- [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md): The type of food that the HealthKit object represents.

### Vitals Sensors Keys

- [HKMetadataKeyBodyTemperatureSensorLocation](hkmetadatakeybodytemperaturesensorlocation.md): The location where a specific body temperature reading was taken.
- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
- [HKMetadataKeyHeartRateRecoveryActivityDuration](hkmetadatakeyheartraterecoveryactivityduration.md)
- [HKMetadataKeyHeartRateRecoveryActivityType](hkmetadatakeyheartraterecoveryactivitytype.md)
- [HKMetadataKeyHeartRateRecoveryMaxObservedRecoveryHeartRate](hkmetadatakeyheartraterecoverymaxobservedrecoveryheartrate.md)
- [HKMetadataKeyHeartRateRecoveryTestType](hkmetadatakeyheartraterecoverytesttype.md): The type of test that the source used to calculate a person’s heart-rate recovery.
- [HKMetadataKeyVO2MaxTestType](hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.

### Audio Event Keys

- [HKMetadataKeyAudioExposureLevel](hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.
- [HKMetadataKeyAudioExposureDuration](hkmetadatakeyaudioexposureduration.md): The audio exposure event’s duration.
- [HKMetadataKeyHeadphoneGain](hkmetadatakeyheadphonegain.md)

### Blood Glucose Keys

- [HKMetadataKeyBloodGlucoseMealTime](hkmetadatakeybloodglucosemealtime.md): A key that indicates the relative timing of a blood glucose reading to a meal.
- [HKMetadataKeyInsulinDeliveryReason](hkmetadatakeyinsulindeliveryreason.md): The medical reason for administering insulin.

### Reproductive Health Keys

- [HKMetadataKeyMenstrualCycleStart](hkmetadatakeymenstrualcyclestart.md): A key that indicates whether the sample represents the start of a menstrual cycle. This metadata key is required for [menstrualFlow](hkcategorytypeidentifier/menstrualflow.md) category samples.
- [HKMetadataKeySexualActivityProtectionUsed](hkmetadatakeysexualactivityprotectionused.md): A key that indicates whether protection was used during sexual activity. This metadata key can be used with [sexualActivity](hkcategorytypeidentifier/sexualactivity.md) category samples.

### Algorithm Keys

- [HKMetadataKeyAlgorithmVersion](hkmetadatakeyalgorithmversion.md): A key that indicates the version number of the algorithm used to calculate the sample’s value.
- [HKMetadataKeyAppleECGAlgorithmVersion](hkmetadatakeyappleecgalgorithmversion.md): A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.
- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.
- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.

# Metadata Keys (Objective-C)

**Framework:** HealthKit  
**Kind:** API Collection

Constants used to add metadata to objects stored in HealthKit.

<a id="overview"></a>

## Overview

Use these keys to facilitate sharing data between apps. You can also create your own custom keys to give HealthKit objects additional app-specific data.

## Topics

### General Keys

- [HKMetadataKeyExternalUUID](hkmetadatakeyexternaluuid.md): A unique identifier for an HKObject that is set by its source.
- [HKMetadataKeyTimeZone](hkmetadatakeytimezone.md): The user’s time zone when the HealthKit object was created.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)

### Estimate Keys

- [HKMetadataKeyDateOfEarliestDataUsedForEstimate](hkmetadatakeydateofearliestdatausedforestimate.md): The earliest date of data used to calculate the sample’s estimated value.
- [HKMetadataKeySessionEstimate](hkmetadatakeysessionestimate.md)

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

### Sync Keys

- [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md): A unique string that identifies a piece of data so it can be updated and synced.
- [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md): The version number for a piece of data, used when updating or syncing.

### Lab Keys

- [HKMetadataKeyWasTakenInLab](hkmetadatakeywastakeninlab.md): A key that indicates whether the sample was taken in a lab.
- [HKMetadataKeyReferenceRangeLowerLimit](hkmetadatakeyreferencerangelowerlimit.md): A key that indicates the lower limit of the reference range for a lab result.
- [HKMetadataKeyReferenceRangeUpperLimit](hkmetadatakeyreferencerangeupperlimit.md): A key that indicates the upper limit of the reference range for a lab result.

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.

### Workout Keys

- [Workout Metadata Keys](workout-metadata-keys.md): Constants that can be used to add metadata to workouts.

### Cardio Fitness Keys

- [HKMetadataKeyVO2MaxValue](hkmetadatakeyvo2maxvalue.md): The maximum oxygen consumption rate during exercise of increasing intensity.
- [HKMetadataKeyLowCardioFitnessEventThreshold](hkmetadatakeylowcardiofitnesseventthreshold.md): The VO2 max threshold used to categorize low-level cardio fitness events.

### Motion Keys

- [HKMetadataKeyUserMotionContext](hkmetadatakeyusermotioncontext.md): The person’s motion during the sample’s time period.

### Nutrition Keys

- [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md): The type of food that the HealthKit object represents.

### Vitals Sensors Keys

- [HKMetadataKeyBodyTemperatureSensorLocation](hkmetadatakeybodytemperaturesensorlocation.md): The location where a specific body temperature reading was taken.
- [HKMetadataKeyHeartRateSensorLocation](hkmetadatakeyheartratesensorlocation.md): The location where a specific heart rate reading was taken.
- [HKMetadataKeyHeartRateMotionContext](hkmetadatakeyheartratemotioncontext.md): The user’s activity level when the heart rate sample was measured.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.
- [HKMetadataKeyHeartRateRecoveryActivityDuration](hkmetadatakeyheartraterecoveryactivityduration.md)
- [HKMetadataKeyHeartRateRecoveryActivityType](hkmetadatakeyheartraterecoveryactivitytype.md)
- [HKMetadataKeyHeartRateRecoveryMaxObservedRecoveryHeartRate](hkmetadatakeyheartraterecoverymaxobservedrecoveryheartrate.md)
- [HKMetadataKeyHeartRateRecoveryTestType](hkmetadatakeyheartraterecoverytesttype.md): The type of test that the source used to calculate a person’s heart-rate recovery.
- [HKMetadataKeyVO2MaxTestType](hkmetadatakeyvo2maxtesttype.md): The method used to calculate the user’s VO2 max rate.

### Audio Event Keys

- [HKMetadataKeyAudioExposureLevel](hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.
- [HKMetadataKeyAudioExposureDuration](hkmetadatakeyaudioexposureduration.md): The audio exposure event’s duration.
- [HKMetadataKeyHeadphoneGain](hkmetadatakeyheadphonegain.md)

### Blood Glucose Keys

- [HKMetadataKeyBloodGlucoseMealTime](hkmetadatakeybloodglucosemealtime.md): A key that indicates the relative timing of a blood glucose reading to a meal.
- [HKMetadataKeyInsulinDeliveryReason](hkmetadatakeyinsulindeliveryreason.md): The medical reason for administering insulin.

### Reproductive Health Keys

- [HKMetadataKeyMenstrualCycleStart](hkmetadatakeymenstrualcyclestart.md): A key that indicates whether the sample represents the start of a menstrual cycle. This metadata key is required for [HKCategoryTypeIdentifierMenstrualFlow](hkcategorytypeidentifier/menstrualflow.md) category samples.
- [HKMetadataKeySexualActivityProtectionUsed](hkmetadatakeysexualactivityprotectionused.md): A key that indicates whether protection was used during sexual activity. This metadata key can be used with [HKCategoryTypeIdentifierSexualActivity](hkcategorytypeidentifier/sexualactivity.md) category samples.

### Algorithm Keys

- [HKMetadataKeyAlgorithmVersion](hkmetadatakeyalgorithmversion.md): A key that indicates the version number of the algorithm used to calculate the sample’s value.
- [HKMetadataKeyAppleECGAlgorithmVersion](hkmetadatakeyappleecgalgorithmversion.md): A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.
- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.
- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
