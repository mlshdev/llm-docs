> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforclinicalrecords(withfhirresourcetype:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforclinicalrecords(withfhirresourcetype:))

# predicateForClinicalRecords(withFHIRResourceType:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a predicate for a specific FHIR type.

## Declaration

```swift
class func predicateForClinicalRecords(withFHIRResourceType resourceType: HKFHIRResourceType) -> NSPredicate
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecords(from:fhirResourceType:identifier:)](predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForVerifiableClinicalRecords(withRelevantDateWithin:)](predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.

# predicateForClinicalRecordsWithFHIRResourceType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a predicate for a specific FHIR type.

## Declaration

```objectivec
+ (NSPredicate *) predicateForClinicalRecordsWithFHIRResourceType:(HKFHIRResourceType) resourceType;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecordsFromSource:FHIRResourceType:identifier:](predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForVerifiableClinicalRecordsWithRelevantDateWithinDateInterval:](predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.
