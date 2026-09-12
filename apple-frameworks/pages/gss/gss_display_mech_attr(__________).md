> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_display_mech_attr(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_display_mech_attr(_:_:_:_:_:))

# gss_display_mech_attr(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a human-readable name and description of a mechanism attribute.

## Declaration

```swift
func gss_display_mech_attr(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ mech_attr: gss_const_OID, _ name: gss_buffer_t?, _ short_desc: gss_buffer_t?, _ long_desc: gss_buffer_t?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech_attr`: The mechanism attribute to examine. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `name`: A buffer the function fills with a human readable version of the mechanism attribute. Release this buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.
- `short_desc`: A buffer the function fills with a short description of the mechanism attribute. Release this buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.
- `long_desc`: A buffer the function fills with a longer description of the mechanism attribute. Release this buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the desired mechanism is unsupported. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs(\_:\_:)](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs(\_:\_:\_:\_:\_:)](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_inquire_attrs_for_mech(\_:\_:\_:\_:)](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname(\_:\_:\_:)](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech(\_:\_:\_:\_:\_:)](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.

# gss_display_mech_attr (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a human-readable name and description of a mechanism attribute.

## Declaration

```objectivec
OM_uint32 gss_display_mech_attr(OM_uint32 *minor_status, gss_const_OID mech_attr, gss_buffer_t name, gss_buffer_t short_desc, gss_buffer_t long_desc);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech_attr`: The mechanism attribute to examine. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `name`: A buffer the function fills with a human readable version of the mechanism attribute. Release this buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.
- `short_desc`: A buffer the function fills with a short description of the mechanism attribute. Release this buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.
- `long_desc`: A buffer the function fills with a longer description of the mechanism attribute. Release this buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success or [GSS_S_BAD_MECH](gss_s_bad_mech.md) if the desired mechanism is unsupported. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_indicate_mechs_by_attrs](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_inquire_attrs_for_mech](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.
