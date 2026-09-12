> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforverifiableclinicalrecords(withrelevantdatewithin:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforverifiableclinicalrecords(withrelevantdatewithin:))

# predicateForVerifiableClinicalRecords(withRelevantDateWithin:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a predicate that finds verifiable health records with a relevant date within the specified range.

## Declaration

```swift
class func predicateForVerifiableClinicalRecords(withRelevantDateWithin dateInterval: DateInterval) -> NSPredicate
```

## Parameters

- `dateInterval`: The start and end date for the predicate.

<a id="Discussion"></a>

## Discussion

The resulting predicate matches [HKVerifiableClinicalRecord](../hkverifiableclinicalrecord.md) instances that have a [relevantDate](../hkverifiableclinicalrecord/relevantdate.md) property within the specified date interval.

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecords(from:fhirResourceType:identifier:)](predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForClinicalRecords(withFHIRResourceType:)](predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.

# predicateForVerifiableClinicalRecordsWithRelevantDateWithinDateInterval: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a predicate that finds verifiable health records with a relevant date within the specified range.

## Declaration

```objectivec
+ (NSPredicate *) predicateForVerifiableClinicalRecordsWithRelevantDateWithinDateInterval:(NSDateInterval *) dateInterval;
```

## Parameters

- `dateInterval`: The start and end date for the predicate.

<a id="Discussion"></a>

## Discussion

The resulting predicate matches [HKVerifiableClinicalRecord](../hkverifiableclinicalrecord.md) instances that have a [relevantDate](../hkverifiableclinicalrecord/relevantdate.md) property within the specified date interval.

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecordsFromSource:FHIRResourceType:identifier:](predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForClinicalRecordsWithFHIRResourceType:](predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.
