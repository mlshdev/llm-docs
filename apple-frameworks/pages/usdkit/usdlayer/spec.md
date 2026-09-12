> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec](https://developer.apple.com/documentation/usdkit/usdlayer/spec)

# USDLayer.Spec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a single spec stored in a layer.

## Declaration

```swift
struct Spec
```

<a id="overview"></a>

## Overview

`Spec` is the untyped base used when retrieving a spec from a layer without knowing its concrete type. All concrete spec types (`USDPrim.Spec`, `USDPrim.Property.Spec`, etc.) conform to the nested [USDLayer.Spec.MetadataCollection](spec/metadatacollection.md) and [USDLayer.Spec.FieldCollection](spec/fieldcollection.md) protocols for shared metadata and field operations.

## Topics

### Protocols

- [USDLayer.Spec.FieldCollection](spec/fieldcollection.md): Low-level read/write access to spec fields. Fields are the raw data backing both metadata and structural information on a spec.
- [USDLayer.Spec.MetadataCollection](spec/metadatacollection.md): Read/write access to metadata stored on a spec.

### Initializers

- [init()](spec/init%28%29.md): Creates an empty (invalid) spec handle.
- [init(\_:)](spec/init%28__%29-2y5gq.md): Widens a `USDPrim.Property.Spec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-3kl4b.md): Widens a `USDPrim.Relationship.Spec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-5d7my.md): Widens a `USDPrim.VariantSetSpec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-5g16z.md): Widens a `USDPrim.Attribute.Spec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-67qus.md): Widens a `USDPrim.PseudoRootSpec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-7ecdx.md): Widens a `USDPrim.Spec` into an untyped [USDLayer.Spec](spec.md).
- [init(\_:)](spec/init%28__%29-7vtld.md): Widens a `USDPrim.VariantSpec` into an untyped [USDLayer.Spec](spec.md).

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](spec/metadatacollection.md)

## See Also

### Accessing scene description by path

- [prim(at:)](prim%28at_%29.md): Returns the prim spec authored at the given path, or `nil` if no prim spec exists there.
- [property(at:)](property%28at_%29.md): Returns the property spec at the given path.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute spec at the given path.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship spec at the given path.
- [spec(at:)](spec%28at_%29.md): Returns the spec at the given path, or `nil` if no spec is authored there.
- [specType(at:)](spectype%28at_%29.md): Returns the kind of spec authored at the given path, or `nil` if nothing is authored there.
- [traverse(at:\_:)](traverse%28at___%29.md): Walks the spec tree rooted at the given path, calling `body` for each spec’s path.
- [USDLayer.Path](path.md): A path within a USD scene hierarchy.
- [USDLayer.PathExpression](pathexpression.md): A boolean expression over path patterns for selecting sets of prims.
- [USDLayer.SpecType](spectype.md): The kind of spec stored at a path in a layer.
