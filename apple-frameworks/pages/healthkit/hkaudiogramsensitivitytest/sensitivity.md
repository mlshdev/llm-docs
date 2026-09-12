> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitytest/sensitivity](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitytest/sensitivity)

# sensitivity (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
@NSCopying var sensitivity: HKQuantity { get }
```

<a id="discussion"></a>

## Discussion

Ear sensitivity measured in dB from a baseline of 0 dB. Reduced hearing sensitivity corresponds to an increase from 0 dB. The unit of measurement is `HKUnit.decibelHearingLevelUnit` or “dBHL”.

# sensitivity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKQuantity * sensitivity;
```

<a id="discussion"></a>

## Discussion

Ear sensitivity measured in dB from a baseline of 0 dB. Reduced hearing sensitivity corresponds to an increase from 0 dB. The unit of measurement is `HKUnit.decibelHearingLevelUnit` or “dBHL”.
