> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduledstart:end:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateformedicationdoseevent(scheduledstart:end:))

# predicateForMedicationDoseEvent(scheduledStart:end:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForMedicationDoseEvent(scheduledStart startDate: Date?, end endDate: Date?) -> NSPredicate
```

## Parameters

- `startDate`: The beginning of the window for scheduled dates of any medication dose event to match.
- `endDate`: The beginning of the window for scheduled dates of any medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have a scheduled date within a window of scheduled times. If nil is provided to either parameter, the respective side of the window is unbound.

# predicateForMedicationDoseEventWithScheduledStartDate:endDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForMedicationDoseEventWithScheduledStartDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `startDate`: The beginning of the window for scheduled dates of any medication dose event to match.
- `endDate`: The beginning of the window for scheduled dates of any medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have a scheduled date within a window of scheduled times. If nil is provided to either parameter, the respective side of the window is unbound.
