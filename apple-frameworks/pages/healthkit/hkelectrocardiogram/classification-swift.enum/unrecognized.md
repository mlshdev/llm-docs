> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/classification-swift.enum/unrecognized](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/unrecognized)

# HKElectrocardiogram.Classification.unrecognized (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A sample classification that this version of HealthKit doesn’t recognize.

## Declaration

```swift
case unrecognized
```

<a id="Discussion"></a>

## Discussion

For example, if the Apple Watch recording the sample is running a newer version of watchOS, it may support classification types that aren’t included in this version. You can check the version of the algorithm used to classify the ECG by reading the value of the sample’s [HKMetadataKeyAppleECGAlgorithmVersion](../../hkmetadatakeyappleecgalgorithmversion.md) metadata key.

## See Also

### Classifications

- [HKElectrocardiogram.Classification.sinusRhythm](sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.atrialFibrillation](atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.inconclusiveHighHeartRate](inconclusivehighheartrate.md): An unclassifiable sample caused by a rapid heart rate.
- [HKElectrocardiogram.Classification.inconclusiveLowHeartRate](inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogram.Classification.inconclusivePoorReading](inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogram.Classification.inconclusiveOther](inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogram.Classification.notSet](notset.md): A sample that doesn’t have an assigned classification.

# HKElectrocardiogramClassificationUnrecognized (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A sample classification that this version of HealthKit doesn’t recognize.

## Declaration

```objectivec
HKElectrocardiogramClassificationUnrecognized
```

<a id="Discussion"></a>

## Discussion

For example, if the Apple Watch recording the sample is running a newer version of watchOS, it may support classification types that aren’t included in this version. You can check the version of the algorithm used to classify the ECG by reading the value of the sample’s [HKMetadataKeyAppleECGAlgorithmVersion](../../hkmetadatakeyappleecgalgorithmversion.md) metadata key.

## See Also

### Classifications

- [HKElectrocardiogramClassificationSinusRhythm](sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogramClassificationAtrialFibrillation](atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogramClassificationInconclusiveHighHeartRate](inconclusivehighheartrate.md): An unclassifiable sample caused by a rapid heart rate.
- [HKElectrocardiogramClassificationInconclusiveLowHeartRate](inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogramClassificationInconclusivePoorReading](inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogramClassificationInconclusiveOther](inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogramClassificationNotSet](notset.md): A sample that doesn’t have an assigned classification.
