> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_oid_equal(_:_:)](https://developer.apple.com/documentation/gss/gss_oid_equal(_:_:))

# gss_oid_equal(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a flag that indicates whether two object identifiers are the same.

## Declaration

```swift
func gss_oid_equal(_ a: gss_const_OID?, _ b: gss_const_OID?) -> Int32
```

## Parameters

- `a`: The first object identifier to examine.
- `b`: The second object identifier to examine.

<a id="return-value"></a>

## Return Value

A non-zero value if the objects are the same, or zero if they are different.

## See Also

### Conversion and Duplication

- [gss_oid_to_str(\_:\_:\_:)](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member(\_:\_:\_:\_:)](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_duplicate_oid(\_:\_:\_:)](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.

# gss_oid_equal (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a flag that indicates whether two object identifiers are the same.

## Declaration

```objectivec
int gss_oid_equal(gss_const_OID a, gss_const_OID b);
```

## Parameters

- `a`: The first object identifier to examine.
- `b`: The second object identifier to examine.

<a id="return-value"></a>

## Return Value

A non-zero value if the objects are the same, or zero if they are different.

## See Also

### Conversion and Duplication

- [gss_oid_to_str](gss_oid_to_str%28______%29.md): Converts an OID object to a human-readable string.
- [gss_test_oid_set_member](gss_test_oid_set_member%28________%29.md): Returns a flag that indicates if an OID is present in an OID set.
- [gss_duplicate_oid](gss_duplicate_oid%28______%29.md): Deprecated. Copies an OID into a new object.
