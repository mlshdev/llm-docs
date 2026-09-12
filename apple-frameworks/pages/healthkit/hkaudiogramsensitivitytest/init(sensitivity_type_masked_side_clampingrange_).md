> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitytest/init(sensitivity:type:masked:side:clampingrange:)](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitytest/init(sensitivity:type:masked:side:clampingrange:))

# init(sensitivity:type:masked:side:clampingRange:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
init(sensitivity: HKQuantity, type: HKAudiogramConductionType, masked: Bool, side: HKAudiogramSensitivityTestSide, clampingRange: HKAudiogramSensitivityPointClampingRange?) throws
```

# initWithSensitivity:type:masked:side:clampingRange:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
- (instancetype) initWithSensitivity:(HKQuantity *) sensitivity type:(HKAudiogramConductionType) type masked:(BOOL) masked side:(HKAudiogramSensitivityTestSide) side clampingRange:(HKAudiogramSensitivityPointClampingRange *) clampingRange error:(NSError **) errorOut;
```
