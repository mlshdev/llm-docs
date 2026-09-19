> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantsmap

# USDPrim.VariantsMap

**Framework:** USDKit  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Maps variant set names to lists of available variant names.

## Declaration

```swift
typealias VariantsMap = Dictionary<USDToken, [USDToken]>
```

## See Also

### Authoring variants

- [USDPrim.VariantSpec](variantspec.md): A handle to a single variant option within a variant set.
- [USDPrim.VariantSetSpec](variantsetspec.md): A handle to a variant set — a named group of variant options.
- [USDPrim.VariantSelectionMap](variantselectionmap.md): Maps variant set names to selected variant names.
