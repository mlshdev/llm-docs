> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path](https://developer.apple.com/documentation/usdkit/usdlayer/path)

# USDLayer.Path

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A path within a USD scene hierarchy.

## Declaration

```swift
struct Path
```

<a id="overview"></a>

## Overview

Paths identify scene elements — prims like `/World/Character`, properties like `/World/Character.visibility`, and other addressable targets. Absolute paths begin with `/`; relative paths do not.

## Topics

### Initializers

- [init()](path/init%28%29.md): Creates an empty path.
- [init(\_:)](path/init%28__%29.md): Creates a path from its string representation.
- [init(validating:)](path/init%28validating_%29.md): Creates a path from its string representation, validating that `path` is well-formed.

### Instance Properties

- [ancestors](path/ancestors.md): All ancestor paths from leaf to root, excluding self.
- [depth](path/depth.md): The number of components in the path.
- [isAbsolute](path/isabsolute.md): Whether the path begins with `/`.
- [isNamespacedProperty](path/isnamespacedproperty.md): Whether the leaf property name contains a namespace.
- [isPrimProperty](path/isprimproperty.md): Whether the path is a property on a prim, as opposed to one on a relationship target.
- [isRelationalAttribute](path/isrelationalattribute.md): Whether the path is an attribute on a relationship target.
- [isRootPrim](path/isrootprim.md): Whether the path is a top-level prim like a child of the absolute root.
- [kind](path/kind-swift.property.md): What kind of element the path’s leaf represents.
- [name](path/name.md): The identifier of the path’s leaf element.
- [parent](path/parent.md): The parent of this path, or `nil` if this path is the absolute root or the empty path.
- [primPath](path/primpath.md): The containing prim path, stripped of any property, target, or variant selection elements.
- [target](path/target.md): The target component if the path contains one, otherwise `nil`.
- [variantSelection](path/variantselection.md): The variant set and value if the path’s leaf is a variant selection, otherwise `nil`.

### Instance Methods

- [absolute(at:)](path/absolute%28at_%29.md): Returns this path made absolute, anchored at the given path.
- [appending(child:)](path/appending%28child_%29.md): Returns a new path with the named child prim appended.
- [appending(path:)](path/appending%28path_%29.md): Returns a new path with `newSuffix` appended.
- [appending(property:)](path/appending%28property_%29.md): Returns a new path with the named property appended.
- [appending(relationalAttribute:)](path/appending%28relationalattribute_%29.md): Returns a new path with a relational attribute appended.
- [appending(target:)](path/appending%28target_%29.md): Returns a new path with a relationship target appended.
- [appending(variantSet:variant:)](path/appending%28variantset_variant_%29.md): Returns a new path with a variant selection appended.
- [commonPrefix(with:)](path/commonprefix%28with_%29.md): Returns the longest common ancestor path of this path and `other`.
- [hasPrefix(\_:)](path/hasprefix%28__%29.md): Returns a Boolean value that indicates whether this path begins with `prefix`.
- [relative(to:)](path/relative%28to_%29.md): Returns this path made relative to the given anchor.
- [replacing(name:)](path/replacing%28name_%29.md): Returns a new path with the leaf name replaced.
- [replacing(target:)](path/replacing%28target_%29.md): Returns a new path with the target component replaced.
- [strippingAllVariantSelections()](path/strippingallvariantselections%28%29.md): Returns a new path with all variant selections removed.

### Type Properties

- [absoluteRoot](path/absoluteroot.md): The absolute root, `/`.
- [empty](path/empty.md): The empty path.

### Enumerations

- [USDLayer.Path.Kind](path/kind-swift.enum.md): The classification of the path’s leaf element.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
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
- [USDLayer.PathExpression](pathexpression.md): A boolean expression over path patterns for selecting sets of prims.
- [USDLayer.Spec](spec.md): A handle to a single spec stored in a layer.
- [USDLayer.SpecType](spectype.md): The kind of spec stored at a path in a layer.
