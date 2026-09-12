> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(_:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates an object from a custom material’s specular property.

## Declaration

```swift
init(_ value: CustomMaterial.Specular)
```

## Parameters

- `value`: The custom material’s specular property.

<a id="discussion"></a>

## Discussion

RealityKit automatically draws *specular highlights* for physically based materials using the values of various properties, primarily [roughness](../roughness-swift.property.md) and [metallic](../metallic-swift.property.md). Specular highlights are bright spots of reflected light that appear on shiny objects.

![An illustration showing a sphere and a cube with rounded corners.](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Specular-swift-struct-init%28_:%29-1@2x.png)

While many real-world objects can be accurately and realistically simulated with just the core PBR properties, you can create additional realistic effects by augmenting the specular highlights.

This initializer creates a [PhysicallyBasedMaterial.Specular](../specular-swift.struct.md) object from the specular property of a [CustomMaterial](../../custommaterial.md).

## See Also

### Creating a specular object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an object from single value.
- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object from a single value or a texture.
