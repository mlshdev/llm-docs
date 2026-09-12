> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/materialdata](https://developer.apple.com/documentation/usdkit/usdplayer/materialdata)

# USDPlayer.MaterialData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Material data from a USD material prim.

## Declaration

```swift
struct MaterialData
```

## Topics

### Structures

- [USDPlayer.MaterialData.Update](materialdata/update.md): Delta update carrying only the material fields that changed since the last frame.

### Instance Properties

- [assignedTextures](materialdata/assignedtextures.md): Map from shader parameter name to the bound [USDPlayer.TextureID](textureid.md).
- [id](materialdata/id.md): Unique identifier for this material resource.
- [primPath](materialdata/primpath.md): USD prim path this material corresponds to.
- [shaderGraph](materialdata/shadergraph.md): Shader graph constructed from the material prim.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
