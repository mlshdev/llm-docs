> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkuserannotatedmedication/medication

# medication (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A reference to the specific medication a person is tracking.

## Declaration

```swift
@NSCopying var medication: HKMedicationConcept { get }
```

<a id="discussion"></a>

## Discussion

This concept’s identifier is directly associated with the logged dose events.

# medication (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A reference to the specific medication a person is tracking.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKMedicationConcept * medication;
```

<a id="discussion"></a>

## Discussion

This concept’s identifier is directly associated with the logged dose events.
