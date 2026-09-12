> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/object-identifiers](https://developer.apple.com/documentation/gss/object-identifiers)

# Object Identifiers (Swift)

**Framework:** GSS  
**Kind:** API Collection

Store security mechanisms, QOPs (Quality of Protection values), and name types.

## Topics

### Object IDs

- [gss_OID](gss_oid.md): A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_desc_struct](gss_oid_desc_struct.md): The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.

### Quality of Protection Constants

- [GSS_C_QOP_DEFAULT](gss_c_qop_default.md): The default Quality of Protection for per-message services.
- [GSS_KRB5_CONF_C_QOP_DES](gss_krb5_conf_c_qop_des.md): The Kerberos 5 Qualty of Service 56-bit DES encryption.
- [GSS_KRB5_CONF_C_QOP_DES3_KD](gss_krb5_conf_c_qop_des3_kd.md): The Kerberos 5 Qualty of Service 168-bit DES3 encryption with key derivation.

### Creation and Release

- [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member(\_:\_:\_:)](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid(\_:\_:)](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.

### Conversion and Duplication

- [gss_oid_to_str(\_:\_:\_:)](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member(\_:\_:\_:\_:)](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_oid_equal(\_:\_:)](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.
- [gss_duplicate_oid(\_:\_:\_:)](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.

## See Also

### Names and Object Identifiers

- [Name Handling](name-handling.md): Manage names for GSS-API principals such as a person, a machine, or an application.

# Object Identifiers (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Store security mechanisms, QOPs (Quality of Protection values), and name types.

## Topics

### Object IDs

- [gss_OID](gss_oid.md): A pointer to the OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set](gss_oid_set.md): A pointer to a descriptor that manages an array of OID descriptors.
- [gss_OID_desc](gss_oid_desc.md): The OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_const_OID](gss_const_oid.md): A pointer to an immutable OID descriptor exchanges object identifiers with many GSS-API functions.
- [gss_const_OID_set](gss_const_oid_set.md): A pointer to an immutable descriptor manages an array of OID descriptors.
- [gss_OID_desc_struct](gss_oid_desc_struct.md): The structure for an OID descriptor that exchanges object identifiers with many GSS-API functions.
- [gss_OID_set_desc](gss_oid_set_desc.md): The descriptor that manages an array of OID descriptors.
- [gss_OID_set_desc_struct](gss_oid_set_desc_struct.md): The structure for an OID set descriptor that manages an array of OID descriptors.

### Quality of Protection Constants

- [GSS_C_QOP_DEFAULT](gss_c_qop_default.md): The default Quality of Protection for per-message services.
- [GSS_KRB5_CONF_C_QOP_DES](gss_krb5_conf_c_qop_des.md): The Kerberos 5 Qualty of Service 56-bit DES encryption.
- [GSS_KRB5_CONF_C_QOP_DES3_KD](gss_krb5_conf_c_qop_des3_kd.md): The Kerberos 5 Qualty of Service 168-bit DES3 encryption with key derivation.

### Creation and Release

- [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.

### Conversion and Duplication

- [gss_oid_to_str](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_oid_equal](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.
- [gss_duplicate_oid](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.

## See Also

### Names and Object Identifiers

- [Name Handling](name-handling.md): Manage names for GSS-API principals such as a person, a machine, or an application.
