> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantsetspec/init(owner:name:)-6pbza

# init(owner:name:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new variant set spec under the given prim spec.

## Declaration

```swift
init?(owner: USDPrim.Spec, name: USDToken)
```

## Parameters

- `owner`: The prim spec that owns the new variant set.
- `name`: The variant set’s name.
