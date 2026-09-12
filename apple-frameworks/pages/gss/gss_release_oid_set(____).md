> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_oid_set(_:_:)](https://developer.apple.com/documentation/gss/gss_release_oid_set(_:_:))

# gss_release_oid_set(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Releases the memory associated with an OID set.

## Declaration

```swift
func gss_release_oid_set(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ set: UnsafeMutablePointer<gss_OID_set?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `set`: The OID set to be released.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to free the memory associated with an OID set that you created with [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md), or that was created on your behalf this way. The contents of the set don’t need to be freed individually. OIDs are typically static objects that don’t require memory management.

## See Also

### Creation and Release

- [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member(\_:\_:\_:)](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid(\_:\_:)](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.

# gss_release_oid_set (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Releases the memory associated with an OID set.

## Declaration

```objectivec
OM_uint32 gss_release_oid_set(OM_uint32 *minor_status, gss_OID_set*set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `set`: The OID set to be released.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to free the memory associated with an OID set that you created with [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md), or that was created on your behalf this way. The contents of the set don’t need to be freed individually. OIDs are typically static objects that don’t require memory management.

## See Also

### Creation and Release

- [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.
