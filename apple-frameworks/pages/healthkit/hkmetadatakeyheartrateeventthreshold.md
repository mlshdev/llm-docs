> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkmetadatakeyheartrateeventthreshold

# HKMetadataKeyHeartRateEventThreshold (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A key that records the threshold of high or low heart rate events in beats per minute.

## Declaration

```swift
let HKMetadataKeyHeartRateEventThreshold: String
```

<a id="Discussion"></a>

## Discussion

The value for this key contains an [HKQuantity](hkquantity.md) object with count/time units, described in [HKUnit](hkunit.md). This metadata key is used by [highHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md) and [lowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md) category samples.

# HKMetadataKeyHeartRateEventThreshold (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

A key that records the threshold of high or low heart rate events in beats per minute.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyHeartRateEventThreshold;
```

<a id="Discussion"></a>

## Discussion

The value for this key contains an [HKQuantity](hkquantity.md) object with count/time units, described in [HKUnit](hkunit.md). This metadata key is used by [HKCategoryTypeIdentifierHighHeartRateEvent](hkcategorytypeidentifier/highheartrateevent.md) and [HKCategoryTypeIdentifierLowHeartRateEvent](hkcategorytypeidentifier/lowheartrateevent.md) category samples.
