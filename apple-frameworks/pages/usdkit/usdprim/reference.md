> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/reference](https://developer.apple.com/documentation/usdkit/usdprim/reference)

# USDPrim.Reference

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A reference to an external layer or asset.

## Declaration

```swift
struct Reference
```

<a id="overview"></a>

## Overview

References are composition arcs that bring content from another layer into this prim. A reference specifies the asset path, an optional target prim path within that asset, a time offset for remapping animation, and arbitrary custom metadata.

## Topics

### Initializers

- [init(assetPath:primPath:layerOffset:customData:)](reference/init%28assetpath_primpath_layeroffset_customdata_%29.md): Creates a reference.

### Instance Properties

- [assetPath](reference/assetpath.md): The asset path the reference targets, or `nil` for an internal reference.
- [customData](reference/customdata.md): Custom metadata authored alongside the reference.
- [isInternal](reference/isinternal.md): Whether this is an internal reference (empty asset path).
- [layerOffset](reference/layeroffset.md): Time-axis remap applied to the reference’s animation.
- [primPath](reference/primpath.md): The target prim path within the referenced asset, or `nil` to use the asset’s default prim.

### Instance Methods

- [setCustomData(\_:to:)](reference/setcustomdata%28__to_%29.md): Sets `key` in `customData` to `value`.

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
- [USDPrim.ReferenceCollection](referencecollection.md): Manages reference composition arcs on a prim.
- [USDPrim.Payload](payload.md): A payload to an external asset.
- [USDPrim.ListPosition](listposition.md): Where a new composition arc should be inserted relative to existing arcs.
