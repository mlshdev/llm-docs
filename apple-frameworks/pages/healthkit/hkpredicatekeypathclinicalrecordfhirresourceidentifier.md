> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathclinicalrecordfhirresourceidentifier](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathclinicalrecordfhirresourceidentifier)

# HKPredicateKeyPathClinicalRecordFHIRResourceIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The key path for accessing the clinical record’s Fast Healthcare Interoperability Resources (FHIR) identifier.

## Declaration

```swift
let HKPredicateKeyPathClinicalRecordFHIRResourceIdentifier: String
```

<a id="Discussion"></a>

## Discussion

The FHIR resource identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the identifier, the resource type, and the source.

## See Also

### Clinical record keys

- [HKPredicateKeyPathClinicalRecordFHIRResourceType](hkpredicatekeypathclinicalrecordfhirresourcetype.md): The key path for accessing the resource type of a Fast Healthcare Interoperability Resources (FHIR) record.

# HKPredicateKeyPathClinicalRecordFHIRResourceIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The key path for accessing the clinical record’s Fast Healthcare Interoperability Resources (FHIR) identifier.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathClinicalRecordFHIRResourceIdentifier;
```

<a id="Discussion"></a>

## Discussion

The FHIR resource identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the identifier, the resource type, and the source.

## See Also

### Clinical record keys

- [HKPredicateKeyPathClinicalRecordFHIRResourceType](hkpredicatekeypathclinicalrecordfhirresourcetype.md): The key path for accessing the resource type of a Fast Healthcare Interoperability Resources (FHIR) record.
