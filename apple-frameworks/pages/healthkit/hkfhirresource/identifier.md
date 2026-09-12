> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirresource/identifier](https://developer.apple.com/documentation/healthkit/hkfhirresource/identifier)

# identifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The value from the FHIR resource’s `id` field.

## Declaration

```swift
var identifier: String { get }
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

This identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the [identifier](identifier.md) and [resourceType](resourcetype.md) properties from the [HKFHIRResource](../hkfhirresource.md) object and the [bundleIdentifier](../hksource/bundleidentifier.md) property from the clinical record’s [source](../hkobject/source.md).

## See Also

### Accessing FHIR Data

- [fhirVersion](fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](../hkfhirversion.md): The FHIR version.
- [resourceType](resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](../hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [sourceURL](sourceurl.md): The full URL for the source of the FHIR resource.
- [data](data.md): The JSON representation of the FHIR resource.

# identifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The value from the FHIR resource’s `id` field.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

## Mentioned In

- [Accessing Health Records](../accessing-health-records.md)

<a id="Discussion"></a>

## Discussion

This identifier is only unique for a particular resource type from a given source. To uniquely identify a FHIR resource, you must compare the [identifier](identifier.md) and [resourceType](resourcetype.md) properties from the [HKFHIRResource](../hkfhirresource.md) object and the [bundleIdentifier](../hksource/bundleidentifier.md) property from the clinical record’s [source](../hkobject/source.md).

## See Also

### Accessing FHIR Data

- [FHIRVersion](fhirversion.md): The FHIR version used by this resource.
- [HKFHIRVersion](../hkfhirversion.md): The FHIR version.
- [resourceType](resourcetype.md): The value from the FHIR resource’s `resourceType` field.
- [HKFHIRResourceType](../hkfhirresourcetype.md): The FHIR resource types supported in HealthKit.
- [sourceURL](sourceurl.md): The full URL for the source of the FHIR resource.
- [data](data.md): The JSON representation of the FHIR resource.
