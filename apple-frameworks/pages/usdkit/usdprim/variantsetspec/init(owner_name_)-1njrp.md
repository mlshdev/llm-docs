> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantsetspec/init(owner:name:)-1njrp

# init(owner:name:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new variant set spec nested inside a variant spec.

## Declaration

```swift
init?(owner: USDPrim.VariantSpec, name: USDToken)
```

## Parameters

- `owner`: The variant spec that owns the new (nested) variant set.
- `name`: The variant set’s name.
