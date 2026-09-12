> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/kerberos-implementation](https://developer.apple.com/documentation/gss/kerberos-implementation)

# Kerberos Implementation (Swift)

**Framework:** GSS  
**Kind:** API Collection

Establish secure connections using the Kerberos implementation of GSS-API.

## Topics

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_v1_t](gss_krb5_lucid_context_v1_t.md): The structure of a Kerberos context.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.
- [gss_krb5_rfc1964_keydata_t](gss_krb5_rfc1964_keydata_t.md): The structure for an RFC 1964-compliant Kerberos encryption key.

### Identity and Settings

- [gss_krb5_export_lucid_sec_context(\_:\_:\_:\_:)](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gsskrb5_extract_authz_data_from_sec_context(\_:\_:\_:\_:)](gsskrb5_extract_authz_data_from_sec_context%28________%29.md): Extracts Kerberos authorization data stored within the context.
- [gss_krb5_ccache_name(\_:\_:\_:)](gss_krb5_ccache_name%28______%29.md): Sets the internal Kerberos 5 credential cache name.
- [gss_krb5_free_lucid_sec_context(\_:\_:)](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes(\_:\_:\_:\_:)](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity(\_:)](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity(\_:)](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache(\_:\_:\_:)](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.

## See Also

### Messages

- [Token Management](token-management.md): Establish secure communication with tokens.
- [Message Protection](message-protection.md): Provide cryptographic protection to secure message integrity.

# Kerberos Implementation (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Establish secure connections using the Kerberos implementation of GSS-API.

## Topics

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_v1_t](gss_krb5_lucid_context_v1_t.md): The structure of a Kerberos context.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.
- [gss_krb5_rfc1964_keydata_t](gss_krb5_rfc1964_keydata_t.md): The structure for an RFC 1964-compliant Kerberos encryption key.

### Identity and Settings

- [gss_krb5_export_lucid_sec_context](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gsskrb5_extract_authz_data_from_sec_context](gsskrb5_extract_authz_data_from_sec_context%28________%29.md): Extracts Kerberos authorization data stored within the context.
- [gss_krb5_ccache_name](gss_krb5_ccache_name%28______%29.md): Sets the internal Kerberos 5 credential cache name.
- [gss_krb5_free_lucid_sec_context](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.

## See Also

### Messages

- [Token Management](token-management.md): Establish secure communication with tokens.
- [Message Protection](message-protection.md): Provide cryptographic protection to secure message integrity.
