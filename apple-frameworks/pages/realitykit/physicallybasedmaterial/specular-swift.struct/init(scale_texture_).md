> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(scale:texture:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(scale:texture:))

# init(scale:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an object from a single value or a texture.

## Declaration

```swift
init(scale: Float = 1.0, texture: PhysicallyBasedMaterial.Texture? = nil)
```

## Parameters

- `scale`: A value from 0.0 to 1.0 to use as the specular value for the material.
- `texture`: An optional UV-mapped image texture.

<a id="discussion"></a>

## Discussion

RealityKit automatically draws *specular highlights* for physically based materials using the values of various properties, primarily [roughness](../roughness-swift.property.md) and [metallic](../metallic-swift.property.md). Specular highlights are bright spots of reflected light that appear on shiny objects.

![An illustration showing a sphere and a cube with rounded corners.](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Specular-swift-struct-init%28scale:texture:%29-1@2x.png)

While many real-world objects can be accurately and realistically simulated with just the core PBR properties, you can create additional realistic effects by augmenting the specular highlights.

This initializer creates a [PhysicallyBasedMaterial.Specular](../specular-swift.struct.md) object from a single value, an image texture, or both.

If you specify `texture`, RealityKit calculates the `specular` for the entity by UV-mapping `texture` onto the entity and multiplying the value of each mapped pixel by `scale`. If you don’t specify `texture`, RealityKit uses `scale` as the entire entity’s specular. If you provide a color image for `texture` rather than a grayscale image, RealityKit only uses the intensity of the image’s red channel.

## See Also

### Creating a specular object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an object from single value.
- [init(\_:)](init%28__%29.md): Creates an object from a custom material’s specular property.
