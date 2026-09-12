> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_indicate_mechs(_:_:)](https://developer.apple.com/documentation/gss/gss_indicate_mechs(_:_:))

# gss_indicate_mechs(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the list of supported underlying security mechanisms.

## Declaration

```swift
func gss_indicate_mechs(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ mech_set: UnsafeMutablePointer<gss_OID_set?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech_set`: A pointer the function uses to output the available set of mechanism identifiers. Release the set with a call to [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## See Also

### Queries

- [gss_indicate_mechs_by_attrs(\_:\_:\_:\_:\_:)](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr(\_:\_:\_:\_:\_:)](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech(\_:\_:\_:\_:)](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname(\_:\_:\_:)](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech(\_:\_:\_:\_:\_:)](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.

# gss_indicate_mechs (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the list of supported underlying security mechanisms.

## Declaration

```objectivec
OM_uint32 gss_indicate_mechs(OM_uint32 *minor_status, gss_OID_set*mech_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `mech_set`: A pointer the function uses to output the available set of mechanism identifiers. Release the set with a call to [gss_release_oid_set](gss_release_oid_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## See Also

### Queries

- [gss_indicate_mechs_by_attrs](gss_indicate_mechs_by_attrs%28__________%29.md): Returns the set of mechanisms that fulfill the given criteria.
- [gss_display_mech_attr](gss_display_mech_attr%28__________%29.md): Returns a human-readable name and description of a mechanism attribute.
- [gss_inquire_attrs_for_mech](gss_inquire_attrs_for_mech%28________%29.md): Returns the supported attributes for one or all mechanisms.
- [gss_inquire_mech_for_saslname](gss_inquire_mech_for_saslname%28______%29.md): Returns the GSS-API mechanism identifier for a given Simple Authentication and Security Layer (SASL) protocol name.
- [gss_inquire_saslname_for_mech](gss_inquire_saslname_for_mech%28__________%29.md): Returns the Simple Authentication and Security Layer (SASL) protocol name for a given GSS-API mechanism.
