> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddates:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduleddates:))

# predicateForMedicationDoseEvent(scheduledDates:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForMedicationDoseEvent(scheduledDates: Set<Date>) -> NSPredicate
```

## Parameters

- `scheduledDates`: The exact scheduled dates of any medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have any of the exact scheduled dates specified.

# predicateForMedicationDoseEventWithScheduledDates: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForMedicationDoseEventWithScheduledDates:(NSSet<NSDate *> *) scheduledDates;
```

## Parameters

- `scheduledDates`: The exact scheduled dates of any medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have any of the exact scheduled dates specified.
