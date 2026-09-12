> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddate:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddate:))

# predicateForMedicationDoseEvent(scheduledDate:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForMedicationDoseEvent(scheduledDate: Date) -> NSPredicate
```

## Parameters

- `scheduledDate`: The exact scheduled date of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have the exact scheduled date specified.

# predicateForMedicationDoseEventWithScheduledDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForMedicationDoseEventWithScheduledDate:(NSDate *) scheduledDate;
```

## Parameters

- `scheduledDate`: The exact scheduled date of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have the exact scheduled date specified.
