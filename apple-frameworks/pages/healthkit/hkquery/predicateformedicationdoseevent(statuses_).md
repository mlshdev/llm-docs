> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateformedicationdoseevent(statuses:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateformedicationdoseevent(statuses:))

# predicateForMedicationDoseEvent(statuses:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForMedicationDoseEvent(statuses: Set<NSNumber>) -> NSPredicate
```

## Parameters

- `statuses`: The logged statuses of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have any of the statuses specified.

# predicateForMedicationDoseEventWithStatuses: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForMedicationDoseEventWithStatuses:(NSSet<NSNumber *> *) statuses;
```

## Parameters

- `statuses`: The logged statuses of the medication dose event to match.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKQuery subclasses.

Creates a query predicate that matches HKMedicationDoseEvent samples that have any of the statuses specified.
