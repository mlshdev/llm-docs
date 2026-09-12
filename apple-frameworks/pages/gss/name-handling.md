> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/name-handling](https://developer.apple.com/documentation/gss/name-handling)

# Name Handling (Swift)

**Framework:** GSS  
**Kind:** API Collection

Manage names for GSS-API principals such as a person, a machine, or an application.

## Topics

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString(\_:)](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName(\_:\_:\_:)](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name(\_:\_:)](gss_release_name%28____%29.md): Frees the resources associated with a name object.

### Inquiries

Create, compare, and examine names, the objects used to identify entities.

- [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name(\_:\_:\_:\_:)](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name(\_:\_:\_:\_:\_:)](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name(\_:\_:\_:)](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech(\_:\_:\_:)](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name(\_:\_:\_:)](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password(\_:\_:\_:\_:)](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok(\_:\_:)](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.

### Imports and Exports

- [gss_export_name(\_:\_:\_:)](gss_export_name%28______%29.md): Returns a mechanism name in contiguous octet format.
- [gss_import_name(\_:\_:\_:\_:)](gss_import_name%28________%29.md): Converts a name in contiguous octet format to the internal name format.

## See Also

### Names and Object Identifiers

- [Object Identifiers](object-identifiers.md): Store security mechanisms, QOPs (Quality of Protection values), and name types.

# Name Handling (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Manage names for GSS-API principals such as a person, a machine, or an application.

## Topics

### Name Types

- [GSS_C_NO_NAME](gss_c_no_name.md): An empty name object.
- [GSS_C_NT_USER_NAME](gss_c_nt_user_name.md): A name that specifies a user on a local system in the username format.
- [GSS_C_NT_MACHINE_UID_NAME](gss_c_nt_machine_uid_name.md): A name used to specify a user on the local system by way of a numeric identifier.
- [GSS_C_NT_STRING_UID_NAME](gss_c_nt_string_uid_name.md): A name that specifies a user on the local system by way of a string representation of a numeric identifier.
- [GSS_C_NT_HOSTBASED_SERVICE_X](gss_c_nt_hostbased_service_x.md): A service that is related to a particular host.
- [GSS_C_NT_HOSTBASED_SERVICE](gss_c_nt_hostbased_service.md): A name used to specify services provided by host computers in the service/hostname format.
- [GSS_C_NT_ANONYMOUS](gss_c_nt_anonymous.md): A name that refers to an anonymous principal.
- [GSS_C_NT_EXPORT_NAME](gss_c_nt_export_name.md): A name of the type exported by the export name function.
- [GSS_KRB5_NT_PRINCIPAL_NAME](gss_krb5_nt_principal_name.md): A name composed as a single-string representation of a Kerberos name.
- [GSS_KRB5_NT_PRINCIPAL](gss_krb5_nt_principal.md): A name composed as a single-string representation of a Kerberos name.

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name](gss_release_name%28____%29.md): Frees the resources associated with a name object.

### Inquiries

Create, compare, and examine names, the objects used to identify entities.

- [gss_display_name](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.

### Imports and Exports

- [gss_export_name](gss_export_name%28______%29.md): Returns a mechanism name in contiguous octet format.
- [gss_import_name](gss_import_name%28________%29.md): Converts a name in contiguous octet format to the internal name format.

## See Also

### Names and Object Identifiers

- [Object Identifiers](object-identifiers.md): Store security mechanisms, QOPs (Quality of Protection values), and name types.
