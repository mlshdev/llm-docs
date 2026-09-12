> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_oid(_:_:)](https://developer.apple.com/documentation/gss/gss_release_oid(_:_:))

# gss_release_oid(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Releases the memory associated with an object identifier.

> You never need to call this function. Because OIDs are generally passed around as static objects in memory, there is never a need to create your own, or to release them.

## Declaration

```swift
func gss_release_oid(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ oid: UnsafeMutablePointer<gss_OID?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `oid`: The object identifier to release.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Creation and Release

- [gss_create_empty_oid_set(\_:\_:)](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member(\_:\_:\_:)](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.

# gss_release_oid (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.9) · visionOS 1.0+ (deprecated in 1.0)

Releases the memory associated with an object identifier.

> You never need to call this function. Because OIDs are generally passed around as static objects in memory, there is never a need to create your own, or to release them.

## Declaration

```objectivec
OM_uint32 gss_release_oid(OM_uint32 *minor_status, gss_OID*oid);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `oid`: The object identifier to release.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Creation and Release

- [gss_create_empty_oid_set](gss_create_empty_oid_set%28____%29.md): Allocates a new, empty set to hold object identifiers.
- [gss_add_oid_set_member](gss_add_oid_set_member%28______%29.md): Adds an object identifier into an OID set.
- [gss_release_oid_set](gss_release_oid_set%28____%29.md): Releases the memory associated with an OID set.
