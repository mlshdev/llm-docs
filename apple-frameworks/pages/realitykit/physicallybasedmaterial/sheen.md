> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/sheen](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/sheen)

# sheen

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The intensity of an entity’s sheen.

## Declaration

```swift
var sheen: PhysicallyBasedMaterial.SheenColor? { get set }
```

## Mentioned In

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md)

<a id="discussion"></a>

## Discussion

For a [PhysicallyBasedMaterial](../physicallybasedmaterial.md), object, you can use `sheen` to add soft specular highlights that simulate subtle reflections like the ones that occur with some materials, primarily fabrics. You can specify `sheen` using a single color, or you can provide a UV-mapped image.

![An illustration showing two spheres. The one on the right has very](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-sheen-1@2x.png)

The following example specifies `sheen` using a single value for the entire material:

```swift
let sheenColor = PhysicallyBasedMaterial.Color(deviceRed: 0.8,
green: 0.8, blue: 0.8, alpha: 1.0)
material.sheen = .init(tint:sheenColor)
```

This example shows how to specify sheen using a UV-mapped image texture:

```swift
if let sheenResource = try? TextureResource.load(named:
"entity_sheen") {
    let sheenMap = MaterialParameters.Texture(sheenResource)
    material.sheen = .init(texture: sheenMap)
}
```

## See Also

### Configuring transparency and highlights

- [blending](blending-swift.property.md): The transparency of an entity.
