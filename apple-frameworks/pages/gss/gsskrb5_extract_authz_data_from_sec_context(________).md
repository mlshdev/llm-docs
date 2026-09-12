> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsskrb5_extract_authz_data_from_sec_context(_:_:_:_:)](https://developer.apple.com/documentation/gss/gsskrb5_extract_authz_data_from_sec_context(_:_:_:_:))

# gsskrb5_extract_authz_data_from_sec_context(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Extracts Kerberos authorization data stored within the context.

## Declaration

```swift
func gsskrb5_extract_authz_data_from_sec_context(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ ad_type: Int32, _ ad_data: gss_buffer_t) -> OM_uint32
```

## See Also

### Identity and Settings

- [gss_krb5_export_lucid_sec_context(\_:\_:\_:\_:)](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gss_krb5_ccache_name(\_:\_:\_:)](gss_krb5_ccache_name%28______%29.md): Sets the internal Kerberos 5 credential cache name.
- [gss_krb5_free_lucid_sec_context(\_:\_:)](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes(\_:\_:\_:\_:)](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity(\_:)](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity(\_:)](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache(\_:\_:\_:)](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.

# gsskrb5_extract_authz_data_from_sec_context (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Extracts Kerberos authorization data stored within the context.

## Declaration

```objectivec
OM_uint32 gsskrb5_extract_authz_data_from_sec_context(OM_uint32 *minor_status, gss_ctx_id_t context_handle, int ad_type, gss_buffer_t ad_data);
```

## See Also

### Identity and Settings

- [gss_krb5_export_lucid_sec_context](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gss_krb5_ccache_name](gss_krb5_ccache_name%28______%29.md): Sets the internal Kerberos 5 credential cache name.
- [gss_krb5_free_lucid_sec_context](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.
