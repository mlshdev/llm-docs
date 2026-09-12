> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforuserannotatedmedications(hasschedule:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforuserannotatedmedications(hasschedule:))

# predicateForUserAnnotatedMedications(hasSchedule:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForUserAnnotatedMedications(hasSchedule: Bool) -> NSPredicate
```

## Parameters

- `hasSchedule`: The schedule status of the medication. Ex: True will match medications that have a reminders schedule set up in the Health App.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKUserAnnotatedMedicationQuery.

Creates a query predicate that matches HKUserAnnotatedMedication objects that match the schedule status specified.

# predicateForUserAnnotatedMedicationsWithHasSchedule: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForUserAnnotatedMedicationsWithHasSchedule:(BOOL) hasSchedule;
```

## Parameters

- `hasSchedule`: The schedule status of the medication. Ex: True will match medications that have a reminders schedule set up in the Health App.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKUserAnnotatedMedicationQuery.

Creates a query predicate that matches HKUserAnnotatedMedication objects that match the schedule status specified.
