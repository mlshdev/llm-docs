> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/pseudorootspec](https://developer.apple.com/documentation/usdkit/usdprim/pseudorootspec)

# USDPrim.PseudoRootSpec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a layer’s pseudo-root — the implicit parent of all top-level prims in a layer.

## Declaration

```swift
struct PseudoRootSpec
```

<a id="overview"></a>

## Overview

The pseudo-root is a special spec that’s automatically created by every layer. It’s not authored as a prim in the file, but it conceptually owns the top-level prims. It conforms to `USDLayer.Spec.MetadataCollection` and `USDLayer.Spec.FieldCollection`.

## Topics

### Initializers

- [init()](pseudorootspec/init%28%29.md): Creates an empty (invalid) pseudo-root spec handle.
- [init(\_:)](pseudorootspec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../usdlayer/spec.md) to a pseudo-root spec.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../usdlayer/spec/metadatacollection.md)

## See Also

### Working with scene-description specs

- [USDPrim.Spec](spec.md): A handle to a prim definition stored in a layer.
