> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_oid_desc_struct/init(length:elements:)](https://developer.apple.com/documentation/gss/gss_oid_desc_struct/init(length:elements:))

# init(length:elements:)

**Framework:** GSS  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

Initialize a new object identifier with the given array of octets.

## Declaration

```swift
init(length: OM_uint32, elements: UnsafeMutableRawPointer!)
```

## Parameters

- `length`: The number of octets in the `elements` array.
- `elements`: A pointer to the beginning of an array of octets of the specified length that represent the object identifier.

## See Also

### Initialization

- [init()](init%28%29.md): Initialize a new, empty object identifier.
