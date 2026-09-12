> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalrecord/fhirresource](https://developer.apple.com/documentation/healthkit/hkclinicalrecord/fhirresource)

# fhirResource (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The Fast Healthcare Interoperability Resources (FHIR) data for this record.

## Declaration

```swift
@NSCopying var fhirResource: HKFHIRResource? { get }
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Accessing Clinical Record Data

- [clinicalType](clinicaltype.md): An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.
- [displayName](displayname.md): The primary display name as shown in the Health app.

# FHIRResource (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The Fast Healthcare Interoperability Resources (FHIR) data for this record.

## Declaration

```objectivec
@property (copy, readonly, nullable) HKFHIRResource * FHIRResource;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Accessing Clinical Record Data

- [clinicalType](clinicaltype.md): An identifier that indicates the type of record, such as an allergic reaction, a lab result, or a medical procedure.
- [displayName](displayname.md): The primary display name as shown in the Health app.
