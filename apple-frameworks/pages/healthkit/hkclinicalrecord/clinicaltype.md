> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkclinicalrecord/clinicaltype

# clinicalType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.

## Declaration

```swift
@NSCopying var clinicalType: HKClinicalType { get }
```

## See Also

### Accessing Clinical Record Data

- [displayName](displayname.md): The primary display name as shown in the Health app.
- [fhirResource](fhirresource.md): The Fast Healthcare Interoperability Resources (FHIR) data for this record.

# clinicalType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.

## Declaration

```objectivec
@property (copy, readonly) HKClinicalType * clinicalType;
```

## See Also

### Accessing Clinical Record Data

- [displayName](displayname.md): The primary display name as shown in the Health app.
- [FHIRResource](fhirresource.md): The Fast Healthcare Interoperability Resources (FHIR) data for this record.
