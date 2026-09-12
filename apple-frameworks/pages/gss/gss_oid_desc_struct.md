> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_oid_desc_struct](https://developer.apple.com/documentation/gss/gss_oid_desc_struct)

# gss_OID_desc_struct (Swift)

**Framework:** GSS  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.

## Declaration

```swift
struct gss_OID_desc_struct
```

## Topics

### Instance Properties

- [elements](gss_oid_desc_struct/elements.md): A pointer to the octets that make up the object identifier.
- [length](gss_oid_desc_struct/length.md): The number of octets in the object identifier.

### Initialization

- [init()](gss_oid_desc_struct/init%28%29.md): Initialize a new, empty object identifier.
- [init(length:elements:)](gss_oid_desc_struct/init%28length_elements_%29.md): Initialize a new object identifier with the given array of octets.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Object IDs

- [gss_OID](gss_oid.md): A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.

# gss_OID_desc_struct (Objective-C)

**Framework:** GSS  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.

## Declaration

```objectivec
struct gss_OID_desc_struct;
```

## Topics

### Instance Properties

- [elements](gss_oid_desc_struct/elements.md): A pointer to the octets that make up the object identifier.
- [length](gss_oid_desc_struct/length.md): The number of octets in the object identifier.

## See Also

### Object IDs

- [gss_OID](gss_oid.md): A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.
