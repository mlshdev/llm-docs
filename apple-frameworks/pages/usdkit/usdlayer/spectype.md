> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spectype](https://developer.apple.com/documentation/usdkit/usdlayer/spectype)

# USDLayer.SpecType

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The kind of spec stored at a path in a layer.

## Declaration

```swift
enum SpecType
```

## Topics

### Enumeration Cases

- [USDLayer.SpecType.attribute](spectype/attribute.md): An attribute spec.
- [USDLayer.SpecType.connection](spectype/connection.md): An attribute connection spec.
- [USDLayer.SpecType.prim](spectype/prim.md): A prim spec.
- [USDLayer.SpecType.pseudoRoot](spectype/pseudoroot.md): The implicit pseudo-root spec at `/`.
- [USDLayer.SpecType.relationship](spectype/relationship.md): A relationship spec.
- [USDLayer.SpecType.relationshipTarget](spectype/relationshiptarget.md): A relationship target spec.
- [USDLayer.SpecType.variant](spectype/variant.md): A variant spec.
- [USDLayer.SpecType.variantSet](spectype/variantset.md): A variant set spec.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [USDLayer.Spec](spec.md): A handle to a single spec stored in a layer.
