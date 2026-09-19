> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/custommaterial/clearcoatnormal-swift.struct/init(texture:)

# init(texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Construct a `CustomMaterial.ClearcoatNormal` object from a texture.

## Declaration

```swift
init(texture: CustomMaterial.Texture? = nil)
```

## Parameters

- `texture`: The clearcoat normals as the texture of a UV-mapped image.

<a id="discussion"></a>

## Discussion

```swift
if let textureResource = try? TextureResource.load(named: "entity_cc_normalMap") {
    let ccNormalMap = CustomMaterial.Texture(textureResource)
    let clearcoatNormal = CustomMaterial.ClearcoatNormal(texture: ccNormalMap)
}
```
