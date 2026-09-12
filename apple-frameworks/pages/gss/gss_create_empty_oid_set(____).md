> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_create_empty_oid_set(_:_:)](https://developer.apple.com/documentation/gss/gss_create_empty_oid_set(_:_:))

# gss_create_empty_oid_set(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Allocates a new, empty set to hold object identifiers.

## Declaration

```swift
func gss_create_empty_oid_set(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ oid_set: UnsafeMutablePointer<gss_OID_set?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `oid_set`: A pointer that the function uses to return the new set.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use [gss_add_oid_set_member(\_:\_:\_:)](gss_add_oid_set_member%28______%29.md) to add items to your newly created set. Use [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md) to free the memory associated with the set when you’re done with it.

## See Also

### Creation and Release

- [gss_add_oid_set_member(\_:\_:\_:)](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid(\_:\_:)](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.

# gss_create_empty_oid_set (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Allocates a new, empty set to hold object identifiers.

## Declaration

```objectivec
OM_uint32 gss_create_empty_oid_set(OM_uint32 *minor_status, gss_OID_set*oid_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `oid_set`: A pointer that the function uses to return the new set.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use [gss_add_oid_set_member](gss_add_oid_set_member%28______%29.md) to add items to your newly created set. Use [gss_release_oid_set](gss_release_oid_set%28____%29.md) to free the memory associated with the set when you’re done with it.

## See Also

### Creation and Release

- [gss_add_oid_set_member](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
- [gss_release_oid](gss_release_oid%28____%29.md): Deprecated. Releases the memory associated with an object identifier.
