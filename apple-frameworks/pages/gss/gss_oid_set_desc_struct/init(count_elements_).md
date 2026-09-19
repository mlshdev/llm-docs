> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gss/gss_oid_set_desc_struct/init(count:elements:)

# init(count:elements:)

**Framework:** GSS  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

Initialize a new object identifier set with the given identifiers.

## Declaration

```swift
init(count: Int, elements: gss_OID!)
```

## Parameters

- `count`: The number of object identifiers in the `elements` array.
- `elements`: An array containing the identifiers with which to initialize the new set.

## See Also

### Initialization

- [init()](init%28%29.md): Initialize a new, empty object identifier set.
