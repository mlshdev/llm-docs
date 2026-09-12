> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirresource/sourceurl](https://developer.apple.com/documentation/healthkit/hkfhirresource/sourceurl)

# sourceURL (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The full URL for the source of the FHIR resource.

## Declaration

```swift
var sourceURL: URL? { get }
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Accessing FHIR Data

- [identifier](identifier.md): The value from the FHIR resource’s `id` field.
- [fhirVersion](fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](../hkfhirversion.md): The FHIR version.
- [resourceType](resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](../hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [data](data.md): The JSON representation of the FHIR resource.

# sourceURL (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The full URL for the source of the FHIR resource.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * sourceURL;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

## See Also

### Accessing FHIR Data

- [identifier](identifier.md): The value from the FHIR resource’s `id` field.
- [FHIRVersion](fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](../hkfhirversion.md): The FHIR version.
- [resourceType](resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](../hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [data](data.md): The JSON representation of the FHIR resource.
