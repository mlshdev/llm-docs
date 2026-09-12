> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/property(at:)](https://developer.apple.com/documentation/usdkit/usdlayer/property(at:))

# property(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the property spec at the given path.

## Declaration

```swift
func property(at path: USDLayer.Path) -> USDPrim.Property.Spec?
```

## Parameters

- `path`: The path to look up.

<a id="return-value"></a>

## Return Value

The property spec, or `nil` if none is authored at `path`.

## See Also

### Accessing scene description by path

- [prim(at:)](prim%28at_%29.md): Returns the prim spec authored at the given path, or `nil` if no prim spec exists there.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute spec at the given path.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship spec at the given path.
- [spec(at:)](spec%28at_%29.md): Returns the spec at the given path, or `nil` if no spec is authored there.
- [specType(at:)](spectype%28at_%29.md): Returns the kind of spec authored at the given path, or `nil` if nothing is authored there.
- [traverse(at:\_:)](traverse%28at___%29.md): Walks the spec tree rooted at the given path, calling `body` for each spec’s path.
- [USDLayer.Path](path.md): A path within a USD scene hierarchy.
- [USDLayer.PathExpression](pathexpression.md): A boolean expression over path patterns for selecting sets of prims.
- [USDLayer.Spec](spec.md): A handle to a single spec stored in a layer.
- [USDLayer.SpecType](spectype.md): The kind of spec stored at a path in a layer.
