> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforuserannotatedmedications(isarchived:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforuserannotatedmedications(isarchived:))

# predicateForUserAnnotatedMedications(isArchived:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class func predicateForUserAnnotatedMedications(isArchived: Bool) -> NSPredicate
```

## Parameters

- `isArchived`: The archived status of the medication. Ex: True will match medications in the archived section in the Health App.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKUserAnnotatedMedicationQuery.

Creates a query predicate that matches HKUserAnnotatedMedication objects that have the archived status specified.

# predicateForUserAnnotatedMedicationsWithIsArchived: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
+ (NSPredicate *) predicateForUserAnnotatedMedicationsWithIsArchived:(BOOL) isArchived;
```

## Parameters

- `isArchived`: The archived status of the medication. Ex: True will match medications in the archived section in the Health App.

<a id="discussion"></a>

## Discussion

Creates a predicate for use with HKUserAnnotatedMedicationQuery.

Creates a query predicate that matches HKUserAnnotatedMedication objects that have the archived status specified.
