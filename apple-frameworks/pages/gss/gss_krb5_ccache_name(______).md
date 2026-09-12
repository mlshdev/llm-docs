> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_ccache_name(_:_:_:)](https://developer.apple.com/documentation/gss/gss_krb5_ccache_name(_:_:_:))

# gss_krb5_ccache_name(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Sets the internal Kerberos 5 credential cache name.

## Declaration

```swift
func gss_krb5_ccache_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ name: UnsafePointer<CChar>?, _ out_name: UnsafeMutablePointer<UnsafePointer<CChar>?>?) -> OM_uint32
```

## See Also

### Identity and Settings

- [gss_krb5_export_lucid_sec_context(\_:\_:\_:\_:)](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gsskrb5_extract_authz_data_from_sec_context(\_:\_:\_:\_:)](gsskrb5_extract_authz_data_from_sec_context%28________%29.md): Extracts Kerberos authorization data stored within the context.
- [gss_krb5_free_lucid_sec_context(\_:\_:)](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes(\_:\_:\_:\_:)](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity(\_:)](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity(\_:)](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache(\_:\_:\_:)](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.

# gss_krb5_ccache_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Sets the internal Kerberos 5 credential cache name.

## Declaration

```objectivec
OM_uint32 gss_krb5_ccache_name(OM_uint32 *minor_status, const char *name, const char **out_name);
```

## See Also

### Identity and Settings

- [gss_krb5_export_lucid_sec_context](gss_krb5_export_lucid_sec_context%28________%29.md): Returns a non-opaque version of the internal context information.
- [gsskrb5_extract_authz_data_from_sec_context](gsskrb5_extract_authz_data_from_sec_context%28________%29.md): Extracts Kerberos authorization data stored within the context.
- [gss_krb5_free_lucid_sec_context](gss_krb5_free_lucid_sec_context%28____%29.md): Frees allocated storage associated with an exported context.
- [gss_krb5_set_allowable_enctypes](gss_krb5_set_allowable_enctypes%28________%29.md): Limits the keys that can be exported to the specified types.
- [gsskrb5_register_acceptor_identity](gsskrb5_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [krb5_gss_register_acceptor_identity](krb5_gss_register_acceptor_identity%28__%29.md): Sets the Kerberos 5 file-based key that the acceptor will use.
- [gss_krb5_copy_ccache](gss_krb5_copy_ccache%28______%29.md): Deprecated. Copies Kerberos 5 credentials into the passed cache.
