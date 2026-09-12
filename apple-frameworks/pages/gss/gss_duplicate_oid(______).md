> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_duplicate_oid(_:_:_:)](https://developer.apple.com/documentation/gss/gss_duplicate_oid(_:_:_:))

# gss_duplicate_oid(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Copies an OID into a new object.

> You never need to call this function. Because OIDs are generally passed around as static objects in memory, there is never a need to create your own, or to release them.

## Declaration

```swift
func gss_duplicate_oid(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ src_oid: gss_OID, _ dest_oid: UnsafeMutablePointer<gss_OID?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `src_oid`: The OID to copy.
- `dest_oid`: A pointer the function uses to return a copy of the OID. Use [gss_release_oid(\_:\_:)](gss_release_oid%28____%29.md) to release this object’s memory when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Conversion and Duplication

- [gss_oid_to_str(\_:\_:\_:)](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member(\_:\_:\_:\_:)](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_oid_equal(\_:\_:)](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.

# gss_duplicate_oid (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.9) · visionOS 1.0+ (deprecated in 1.0)

Copies an OID into a new object.

> You never need to call this function. Because OIDs are generally passed around as static objects in memory, there is never a need to create your own, or to release them.

## Declaration

```objectivec
OM_uint32 gss_duplicate_oid(OM_uint32 *minor_status, gss_OID src_oid, gss_OID*dest_oid);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `src_oid`: The OID to copy.
- `dest_oid`: A pointer the function uses to return a copy of the OID. Use [gss_release_oid](gss_release_oid%28____%29.md) to release this object’s memory when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Conversion and Duplication

- [gss_oid_to_str](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_oid_equal](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.
