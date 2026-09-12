> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_attrs_for_mech(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_attrs_for_mech(_:_:_:_:))

# gss_inquire_attrs_for_mech(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the supported attributes for one or all mechanisms.

## Declaration

```swift
func gss_inquire_attrs_for_mech(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ mech: gss_const_OID, _ mech_attr: UnsafeMutablePointer<gss_OID_set?>?, _ known_mech_attrs: UnsafeMutablePointer<gss_OID_set?>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech`: The mechanism to examine, or [GSS_C_NO_OID](gss_c_no_oid.md) to examine all mechanisms.
- `mech_attr`: A pointer the function uses to return the list of mechanism attributes supported by the mechanism. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values. Pass `NULL` to ignore this output. If you do receive a set, release its memory with a call to [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the desired mechanism is unsupported. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs(\_:\_:)](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs(\_:\_:\_:\_:\_:)](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr(\_:\_:\_:\_:\_:)](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_mech_for_saslname(\_:\_:\_:)](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech(\_:\_:\_:\_:\_:)](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.

# gss_inquire_attrs_for_mech (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the supported attributes for one or all mechanisms.

## Declaration

```objectivec
OM_uint32 gss_inquire_attrs_for_mech(OM_uint32 *minor_status, gss_const_OID mech, gss_OID_set*mech_attr, gss_OID_set*known_mech_attrs);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech`: The mechanism to examine, or [GSS_C_NO_OID](gss_c_no_oid.md) to examine all mechanisms.
- `mech_attr`: A pointer the function uses to return the list of mechanism attributes supported by the mechanism. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values. Pass `NULL` to ignore this output. If you do receive a set, release its memory with a call to [gss_release_oid_set](gss_release_oid_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the desired mechanism is unsupported. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_mech_for_saslname](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.
