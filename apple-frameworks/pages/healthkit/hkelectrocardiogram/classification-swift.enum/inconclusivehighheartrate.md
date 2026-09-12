> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusivehighheartrate](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/classification-swift.enum/inconclusivehighheartrate)

# HKElectrocardiogram.Classification.inconclusiveHighHeartRate (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

An unclassifiable sample caused by a rapid heart rate.

## Declaration

```swift
case inconclusiveHighHeartRate
```

<a id="Discussion"></a>

## Discussion

The [HKAppleECGAlgorithmVersion.version1](../../hkappleecgalgorithmversion/version1.md) algorithm can categorize heart rates below 120 BPM. [HKAppleECGAlgorithmVersion.version2](../../hkappleecgalgorithmversion/version2.md) can categorize heart rates up to 150 BPM.

## See Also

### Classifications

- [HKElectrocardiogram.Classification.sinusRhythm](sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.atrialFibrillation](atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogram.Classification.inconclusiveLowHeartRate](inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogram.Classification.inconclusivePoorReading](inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogram.Classification.inconclusiveOther](inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogram.Classification.unrecognized](unrecognized.md): A sample classification that this version of HealthKit doesn’t recognize.
- [HKElectrocardiogram.Classification.notSet](notset.md): A sample that doesn’t have an assigned classification.

# HKElectrocardiogramClassificationInconclusiveHighHeartRate (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

An unclassifiable sample caused by a rapid heart rate.

## Declaration

```objectivec
HKElectrocardiogramClassificationInconclusiveHighHeartRate
```

<a id="Discussion"></a>

## Discussion

The [HKAppleECGAlgorithmVersion1](../../hkappleecgalgorithmversion/version1.md) algorithm can categorize heart rates below 120 BPM. [HKAppleECGAlgorithmVersion2](../../hkappleecgalgorithmversion/version2.md) can categorize heart rates up to 150 BPM.

## See Also

### Classifications

- [HKElectrocardiogramClassificationSinusRhythm](sinusrhythm.md): The sample exhibits no signs of atrial fibrillation.
- [HKElectrocardiogramClassificationAtrialFibrillation](atrialfibrillation.md): The sample exhibits signs of atrial fibrillation.
- [HKElectrocardiogramClassificationInconclusiveLowHeartRate](inconclusivelowheartrate.md): An unclassifiable sample caused by a heart rate below 50 bpm.
- [HKElectrocardiogramClassificationInconclusivePoorReading](inconclusivepoorreading.md): An unclassifiable sample caused by an unclear signal.
- [HKElectrocardiogramClassificationInconclusiveOther](inconclusiveother.md): An unclassifiable sample caused by an unknown issue.
- [HKElectrocardiogramClassificationUnrecognized](unrecognized.md): A sample classification that this version of HealthKit doesn’t recognize.
- [HKElectrocardiogramClassificationNotSet](notset.md): A sample that doesn’t have an assigned classification.
