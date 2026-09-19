> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkquery/predicateformedicationdoseevent(status:)

# predicateForMedicationDoseEvent(status:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForMedicationDoseEvent(status: HKMedicationDoseEvent.LogStatus) -> NSPredicate
```

## Parameters

- `status`: The logged status of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have the status specified.

# predicateForMedicationDoseEventWithStatus: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForMedicationDoseEventWithStatus:(HKMedicationDoseEventLogStatus) status;
```

## Parameters

- `status`: The logged status of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have the status specified.
