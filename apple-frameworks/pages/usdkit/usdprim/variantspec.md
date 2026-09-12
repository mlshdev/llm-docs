> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantspec](https://developer.apple.com/documentation/usdkit/usdprim/variantspec)

# USDPrim.VariantSpec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a single variant option within a variant set.

## Declaration

```swift
struct VariantSpec
```

## Topics

### Initializers

- [init()](variantspec/init%28%29.md): Creates an empty (invalid) variant spec handle.
- [init(\_:)](variantspec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../usdlayer/spec.md) to a variant spec.
- [init(owner:name:)](variantspec/init%28owner_name_%29.md): Creates a new variant spec under the given variant set spec.

### Instance Properties

- [name](variantspec/name.md): The variant’s local name.
- [owner](variantspec/owner.md): The owning variant set spec.
- [primSpec](variantspec/primspec.md): The prim spec this variant authors when selected.
- [variantSets](variantspec/variantsets.md): Variant sets defined inside this variant (nested variation).

### Instance Methods

- [variantNames(\_:)](variantspec/variantnames%28__%29.md): Returns the variant names available in a nested variant set on this variant.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../usdlayer/spec/metadatacollection.md)

## See Also

### Authoring variants

- [USDPrim.VariantSetSpec](variantsetspec.md): A handle to a variant set — a named group of variant options.
- [USDPrim.VariantsMap](variantsmap.md): Maps variant set names to lists of available variant names.
- [USDPrim.VariantSelectionMap](variantselectionmap.md): Maps variant set names to selected variant names.
