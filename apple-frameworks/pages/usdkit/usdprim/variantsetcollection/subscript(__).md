> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantsetcollection/subscript(_:)

# subscript(\_:)

**Framework:** USDKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the variant set with the specified name, or `nil` if no variant set with that name exists on the prim.

## Declaration

```swift
subscript(name: String) -> USDPrim.VariantSet? { get }
```

## Parameters

- `name`: The name of the variant set.

<a id="return-value"></a>

## Return Value

The variant set, or `nil` if no variant set with that name exists on the prim.
