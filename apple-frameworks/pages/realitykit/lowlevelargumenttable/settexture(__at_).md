> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/settexture(_:at:)](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/settexture(_:at:))

# setTexture(\_:at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a texture to the slot at the given index.

## Declaration

```swift
final func setTexture(_ texture: LowLevelTextureResource, at index: Int) throws(LowLevelRenderContextError)
```

## Parameters

- `texture`: The texture resource to bind to the slot.
- `index`: The slot index within the argument table’s texture array.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if `index` is out of range or `texture` is incompatible with the slot.

## See Also

### Accessing textures

- [texture(at:)](texture%28at_%29.md): Returns the texture bound at the given index, or `nil` if the slot is unset.
