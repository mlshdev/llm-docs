> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_indicate_mechs_by_attrs(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_indicate_mechs_by_attrs(_:_:_:_:_:))

# gss_indicate_mechs_by_attrs(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the set of mechanisms that fulfill the given criteria.

## Declaration

```swift
func gss_indicate_mechs_by_attrs(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ desired_mech_attrs: gss_const_OID_set?, _ except_mech_attrs: gss_const_OID_set?, _ critical_mech_attrs: gss_const_OID_set?, _ mechs: UnsafeMutablePointer<gss_OID_set?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `desired_mech_attrs`: A set of attributes, given by their OID, that a mechanism must have in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `except_mech_attrs`: A set of attributes, given by their OID, that the mechanism must not have in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `critical_mech_attrs`: A set of attributes, given by their OID, that the mechanism must know about, but not necessarily have, in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `mechs`: A pointer the function uses to return a new set of mechanisms that meet the given criteria. Release the set’s memory using a call to [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md) after you are done using it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs(\_:\_:)](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_display_mech_attr(\_:\_:\_:\_:\_:)](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech(\_:\_:\_:\_:)](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname(\_:\_:\_:)](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech(\_:\_:\_:\_:\_:)](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.

# gss_indicate_mechs_by_attrs (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns the set of mechanisms that fulfill the given criteria.

## Declaration

```objectivec
OM_uint32 gss_indicate_mechs_by_attrs(OM_uint32 *minor_status, gss_const_OID_set desired_mech_attrs, gss_const_OID_set except_mech_attrs, gss_const_OID_set critical_mech_attrs, gss_OID_set*mechs);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `desired_mech_attrs`: A set of attributes, given by their OID, that a mechanism must have in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `except_mech_attrs`: A set of attributes, given by their OID, that the mechanism must not have in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `critical_mech_attrs`: A set of attributes, given by their OID, that the mechanism must know about, but not necessarily have, in order to appear in the results. See Mechanisms and Authentication in [Security Mechanisms](security-mechanisms.md) for a list of possible values.
- `mechs`: A pointer the function uses to return a new set of mechanisms that meet the given criteria. Release the set’s memory using a call to [gss_release_oid_set](gss_release_oid_set%28____%29.md) after you are done using it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Queries

- [gss_indicate_mechs](gss_indicate_mechs%28____%29.md): Returns the list of supported underlying security mechanisms.
- [gss_display_mech_attr](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.
