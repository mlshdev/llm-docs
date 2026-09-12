> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/traverse(at:_:)](https://developer.apple.com/documentation/usdkit/usdlayer/traverse(at:_:))

# traverse(at:\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Walks the spec tree rooted at the given path, calling `body` for each spec’s path.

## Declaration

```swift
func traverse(at path: USDLayer.Path, _ body: (USDLayer.Path) -> Void)
```

## Parameters

- `path`: The root path to traverse from.
- `body`: A closure invoked once per visited path.

## See Also

### Accessing scene description by path

- [prim(at:)](prim%28at_%29.md): Returns the prim spec authored at the given path, or `nil` if no prim spec exists there.
- [property(at:)](property%28at_%29.md): Returns the property spec at the given path.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute spec at the given path.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship spec at the given path.
- [spec(at:)](spec%28at_%29.md): Returns the spec at the given path, or `nil` if no spec is authored there.
- [specType(at:)](spectype%28at_%29.md): Returns the kind of spec authored at the given path, or `nil` if nothing is authored there.
- [USDLayer.Path](path.md): A path within a USD scene hierarchy.
- [USDLayer.PathExpression](pathexpression.md): A boolean expression over path patterns for selecting sets of prims.
- [USDLayer.Spec](spec.md): A handle to a single spec stored in a layer.
- [USDLayer.SpecType](spectype.md): The kind of spec stored at a path in a layer.
