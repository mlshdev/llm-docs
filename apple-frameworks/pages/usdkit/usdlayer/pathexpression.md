> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/pathexpression](https://developer.apple.com/documentation/usdkit/usdlayer/pathexpression)

# USDLayer.PathExpression

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A boolean expression over path patterns for selecting sets of prims.

## Declaration

```swift
struct PathExpression
```

<a id="overview"></a>

## Overview

Path expressions combine patterns using set operations (union, intersection, complement, difference) and can reference other named expressions. The struct wraps `pxr::SdfPathExpression` and provides access to common expression patterns through static properties and string-based initialization.

## Topics

### Initializers

- [init()](pathexpression/init%28%29.md): Creates an empty path expression.
- [init(\_:)](pathexpression/init%28__%29.md): Creates a path expression by parsing the given string.

### Instance Properties

- [isEmpty](pathexpression/isempty.md): Whether this expression has no patterns or references.
- [text](pathexpression/text.md): The string form of this expression.

### Type Properties

- [everyDescendant](pathexpression/everydescendant.md): An expression that matches all descendant paths from the root.
- [everything](pathexpression/everything.md): An expression that matches all paths in the scene hierarchy.
- [nothing](pathexpression/nothing.md): An expression that matches no paths, representing an empty selection.
- [weakerReference](pathexpression/weakerreference.md): A reference to a weaker expression for composition with stronger layers.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDPrim.Attribute.Value](../usdprim/attribute/value.md)
- [USDValueProtocol](../usdvalueprotocol.md)

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
- [USDLayer.Spec](spec.md): A handle to a single spec stored in a layer.
- [USDLayer.SpecType](spectype.md): The kind of spec stored at a path in a layer.
