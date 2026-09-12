> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_mech_for_saslname(_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_mech_for_saslname(_:_:_:))

# gss_inquire_mech_for_saslname(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.

## Declaration

```swift
func gss_inquire_mech_for_saslname(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ sasl_mech_name: gss_buffer_t?, _ mech_type: UnsafeMutablePointer<gss_OID?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `sasl_mech_name`: The SASL G2 protocol name.
- `mech_type`: A pointer the function uses to output the GSS-API mechanism identifier.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the SASL name is unrecognized. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs(\_:\_:)](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs(\_:\_:\_:\_:\_:)](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr(\_:\_:\_:\_:\_:)](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech(\_:\_:\_:\_:)](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_saslname_for_mech(\_:\_:\_:\_:\_:)](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.

# gss_inquire_mech_for_saslname (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.

## Declaration

```objectivec
OM_uint32 gss_inquire_mech_for_saslname(OM_uint32 *minor_status, gss_buffer_t const sasl_mech_name, gss_OID*mech_type);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `sasl_mech_name`: The SASL G2 protocol name.
- `mech_type`: A pointer the function uses to output the GSS-API mechanism identifier.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the SASL name is unrecognized. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_saslname_for_mech](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.
