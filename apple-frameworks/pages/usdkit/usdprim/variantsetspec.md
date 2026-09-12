> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantsetspec](https://developer.apple.com/documentation/usdkit/usdprim/variantsetspec)

# USDPrim.VariantSetSpec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a variant set — a named group of variant options.

## Declaration

```swift
struct VariantSetSpec
```

## Topics

### Initializers

- [init()](variantsetspec/init%28%29.md): Creates an empty (invalid) variant set spec handle.
- [init(\_:)](variantsetspec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../usdlayer/spec.md) to a variant set spec.
- [init(owner:name:)](variantsetspec/init%28owner_name_%29-1njrp.md): Creates a new variant set spec nested inside a variant spec.
- [init(owner:name:)](variantsetspec/init%28owner_name_%29-6pbza.md): Creates a new variant set spec under the given prim spec.

### Instance Properties

- [name](variantsetspec/name.md): The variant set’s local name.
- [owner](variantsetspec/owner.md): The owning spec — a prim spec or variant spec.
- [variants](variantsetspec/variants.md): All variant specs in this set.

### Instance Methods

- [removeVariant(\_:)](variantsetspec/removevariant%28__%29.md): Removes the given variant spec from this set.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../usdlayer/spec/metadatacollection.md)

## See Also

### Authoring variants

- [USDPrim.VariantSpec](variantspec.md): A handle to a single variant option within a variant set.
- [USDPrim.VariantsMap](variantsmap.md): Maps variant set names to lists of available variant names.
- [USDPrim.VariantSelectionMap](variantselectionmap.md): Maps variant set names to selected variant names.
