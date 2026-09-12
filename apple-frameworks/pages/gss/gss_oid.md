> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_oid](https://developer.apple.com/documentation/gss/gss_oid)

# gss_OID (Swift)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.

## Declaration

```swift
typealias gss_OID = UnsafeMutablePointer<gss_OID_desc_struct>
```

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Object IDs

- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_desc_struct](gss_oid_desc_struct.md): The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.

# gss_OID (Objective-C)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.

## Declaration

```objectivec
typedef struct gss_OID_desc_struct * gss_OID;
```

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Object IDs

- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_desc_struct](gss_oid_desc_struct.md): The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.
