> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantspec/init(owner:name:)](https://developer.apple.com/documentation/usdkit/usdprim/variantspec/init(owner:name:))

# init(owner:name:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new variant spec under the given variant set spec.

## Declaration

```swift
init?(owner: USDPrim.VariantSetSpec, name: USDToken)
```

## Parameters

- `owner`: The variant set that owns the new variant.
- `name`: The variant’s name.
