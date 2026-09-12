> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/present](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/symptomsstatus-swift.enum/present)

# HKElectrocardiogram.SymptomsStatus.present (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The user added a symptom when they recorded the ECG.

## Declaration

```swift
case present
```

<a id="Discussion"></a>

## Discussion

To access the symptoms, query for the [HKCategorySample](../../hkcategorysample.md) samples associated with the electrocardiogram sample.

## See Also

### Status

- [HKElectrocardiogram.SymptomsStatus.none](none.md): The user didn’t experience any symptoms during the duration of the electrocardiogram reading.
- [HKElectrocardiogram.SymptomsStatus.notSet](notset.md): The user didn’t specify whether or not they experienced symptoms.

# HKElectrocardiogramSymptomsStatusPresent (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The user added a symptom when they recorded the ECG.

## Declaration

```objectivec
HKElectrocardiogramSymptomsStatusPresent
```

<a id="Discussion"></a>

## Discussion

To access the symptoms, query for the [HKCategorySample](../../hkcategorysample.md) samples associated with the electrocardiogram sample.

## See Also

### Status

- [HKElectrocardiogramSymptomsStatusNone](none.md): The user didn’t experience any symptoms during the duration of the electrocardiogram reading.
- [HKElectrocardiogramSymptomsStatusNotSet](notset.md): The user didn’t specify whether or not they experienced symptoms.
