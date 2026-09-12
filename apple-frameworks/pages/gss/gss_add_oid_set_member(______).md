> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_add_oid_set_member(_:_:_:)](https://developer.apple.com/documentation/gss/gss_add_oid_set_member(_:_:_:))

# gss_add_oid_set_member(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Adds an object identifier into an OID set.

## Declaration

```swift
func gss_add_oid_set_member(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ member_oid: gss_const_OID, _ oid_set: UnsafeMutablePointer<gss_OID_set>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `member_oid`: The object identifier to be added.
- `oid_set`: A pointer to the set to which the new OID should be added. Use [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md) to create a new set.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

If the OID already exists in the set, there is no action taken. Otherwise, the function adds the OID to the end of the set. Because the function adds the OID doesn’t copy it, the `member_oid` pointer must remain stable while the `oid_set` is in use.

## See Also

### Creation and Release

- [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid(\_:\_:)](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.

# gss_add_oid_set_member (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Adds an object identifier into an OID set.

## Declaration

```objectivec
OM_uint32 gss_add_oid_set_member(OM_uint32 *minor_status, gss_const_OID member_oid, gss_OID_set*oid_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `member_oid`: The object identifier to be added.
- `oid_set`: A pointer to the set to which the new OID should be added. Use [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md) to create a new set.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

If the OID already exists in the set, there is no action taken. Otherwise, the function adds the OID to the end of the set. Because the function adds the OID doesn’t copy it, the `member_oid` pointer must remain stable while the `oid_set` is in use.

## See Also

### Creation and Release

- [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_release_oid_set](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.
