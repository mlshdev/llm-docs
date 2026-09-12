> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/payload](https://developer.apple.com/documentation/usdkit/usdprim/payload)

# USDPrim.Payload

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A payload to an external asset.

## Declaration

```swift
struct Payload
```

<a id="overview"></a>

## Overview

Payloads are similar to references but designed for deferred loading. Heavy assets like detailed geometry can be added as payloads and loaded on demand rather than at composition time.

## Topics

### Initializers

- [init(assetPath:primPath:layerOffset:)](payload/init%28assetpath_primpath_layeroffset_%29.md): Creates a payload.

### Instance Properties

- [assetPath](payload/assetpath.md): The asset path the payload targets, or `nil` if not yet set.
- [layerOffset](payload/layeroffset.md): Time-axis remap applied to the payload’s animation.
- [primPath](payload/primpath.md): The target prim path within the referenced asset, or `nil` to use the asset’s default prim.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Composing references and payloads

- [references](references.md): The reference composition arcs on this prim.
- [USDPrim.Reference](reference.md): A reference to an external layer or asset.
- [USDPrim.ReferenceCollection](referencecollection.md): Manages reference composition arcs on a prim.
- [USDPrim.ListPosition](listposition.md): Where a new composition arc should be inserted relative to existing arcs.
