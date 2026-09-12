> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/assetpath](https://developer.apple.com/documentation/usdkit/usdlayer/assetpath)

# USDLayer.AssetPath

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A reference to an external asset such as a texture, audio file, or USD layer.

## Declaration

```swift
struct AssetPath
```

<a id="overview"></a>

## Overview

Stores both the authored path (the string as written in USD) and the resolved path (the location after asset resolution, which may be empty if resolution did not run or failed). The resolved path is not guaranteed to be a filesystem path — custom asset resolvers may return URLs, database identifiers, or opaque tokens.

## Topics

### Initializers

- [init()](assetpath/init%28%29.md): Creates an empty asset path.
- [init(\_:)](assetpath/init%28__%29.md): Creates an asset path from a string identifier.
- [init(\_:resolvedPath:)](assetpath/init%28__resolvedpath_%29.md): Creates an asset path with both authored and resolved values.

### Instance Properties

- [authoredPath](assetpath/authoredpath.md): The authored path string — the value as written in the USD file.
- [resolvedPath](assetpath/resolvedpath.md): The resolved location after asset resolution, or `nil` if resolution did not run or failed.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDPrim.Attribute.Value](../usdprim/attribute/value.md)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Composing the scene

- [defaultPrim](defaultprim.md): The name of the layer’s default prim — the prim referenced when this layer is included as a reference or payload without specifying a target. `nil` if not authored.
- [subLayerPaths](sublayerpaths.md): The asset paths of the layer’s sublayers, ordered from strongest to weakest opinion.
