> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforclinicalrecords(from:fhirresourcetype:identifier:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforclinicalrecords(from:fhirresourcetype:identifier:))

# predicateForClinicalRecords(from:fhirResourceType:identifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a predicate for a specific FHIR resource.

## Declaration

```swift
class func predicateForClinicalRecords(from source: HKSource, fhirResourceType resourceType: HKFHIRResourceType, identifier: String) -> NSPredicate
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

The FHIR resource identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the identifier, the resource type, and the source.

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecords(withFHIRResourceType:)](predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.
- [predicateForVerifiableClinicalRecords(withRelevantDateWithin:)](predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.

# predicateForClinicalRecordsFromSource:FHIRResourceType:identifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Returns a predicate for a specific FHIR resource.

## Declaration

```objectivec
+ (NSPredicate *) predicateForClinicalRecordsFromSource:(HKSource *) source FHIRResourceType:(HKFHIRResourceType) resourceType identifier:(NSString *) identifier;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

The FHIR resource identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the identifier, the resource type, and the source.

## See Also

### Creating clinical record predicates

- [predicateForClinicalRecordsWithFHIRResourceType:](predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.
- [predicateForVerifiableClinicalRecordsWithRelevantDateWithinDateInterval:](predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.
