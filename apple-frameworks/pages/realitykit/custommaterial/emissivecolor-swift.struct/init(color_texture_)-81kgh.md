> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/emissivecolor-swift.struct/init(color:texture:)-81kgh](https://developer.apple.com/documentation/realitykit/custommaterial/emissivecolor-swift.struct/init(color:texture:)-81kgh)

# init(color:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 26.0+

Creates a color of emitted light in macOS.

## Declaration

```swift
init(color: UIColor = .black, texture: CustomMaterial.Texture? = nil)
```

## Parameters

- `color`: The color of the emitted light. Defaults to black.
- `texture`: An optional UV-mapped image texture.

## See Also

### Creating an emissive color object

- [init(\_:)](init%28__%29.md): Creates a color of emitted light based on the emissive color property from a physically based material.
- [init(color:texture:)](init%28color_texture_%29-xkh3.md): Creates a color of emitted light in macOS.
