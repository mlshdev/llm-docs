> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_test_oid_set_member(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_test_oid_set_member(_:_:_:_:))

# gss_test_oid_set_member(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a flag that indicates if an OID is present in an OID set.

## Declaration

```swift
func gss_test_oid_set_member(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ member: gss_const_OID, _ set: gss_OID_set, _ present: UnsafeMutablePointer<Int32>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `member`: The OID to search for.
- `set`: The set of OIDs to search in.
- `present`: A pointer that the function uses to indicate whether or not the member is present in the set. The value is non-zero if the member is present, and zero otherwise.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Conversion and Duplication

- [gss_oid_to_str(\_:\_:\_:)](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_oid_equal(\_:\_:)](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.
- [gss_duplicate_oid(\_:\_:\_:)](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.

# gss_test_oid_set_member (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a flag that indicates if an OID is present in an OID set.

## Declaration

```objectivec
OM_uint32 gss_test_oid_set_member(OM_uint32 *minor_status, gss_const_OID member, gss_OID_set const set, int *present);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `member`: The OID to search for.
- `set`: The set of OIDs to search in.
- `present`: A pointer that the function uses to indicate whether or not the member is present in the set. The value is non-zero if the member is present, and zero otherwise.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Conversion and Duplication

- [gss_oid_to_str](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_oid_equal](gss_oid_equal%28____%29.md): Returns a flag that indicates whether two object identifiers are the same.
- [gss_duplicate_oid](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.
