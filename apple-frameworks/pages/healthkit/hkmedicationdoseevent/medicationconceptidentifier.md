> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/medicationconceptidentifier

# medicationConceptIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The identifier of the medication concept the system associates with this dose event.

## Declaration

```swift
@NSCopying var medicationConceptIdentifier: HKHealthConceptIdentifier { get }
```

<a id="discussion"></a>

## Discussion

The system uses this identifier to link the dose event back to its [HKMedicationConcept](../hkmedicationconcept.md) object.

# medicationConceptIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The identifier of the medication concept the system associates with this dose event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKHealthConceptIdentifier * medicationConceptIdentifier;
```

<a id="discussion"></a>

## Discussion

The system uses this identifier to link the dose event back to its [HKMedicationConcept](../hkmedicationconcept.md) object.
