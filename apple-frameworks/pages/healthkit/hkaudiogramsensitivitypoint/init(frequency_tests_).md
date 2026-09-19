> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypoint/init(frequency:tests:)

# init(frequency:tests:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
convenience init(frequency: HKQuantity, tests: [HKAudiogramSensitivityTest]) throws
```

# sensitivityPointWithFrequency:tests:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
+ (instancetype) sensitivityPointWithFrequency:(HKQuantity *) frequency tests:(NSArray<HKAudiogramSensitivityTest *> *) tests error:(NSError **) errorOut;
```
