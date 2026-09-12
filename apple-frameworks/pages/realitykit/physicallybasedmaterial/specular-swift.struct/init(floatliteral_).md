> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(floatliteral:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/specular-swift.struct/init(floatliteral:))

# init(floatLiteral:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an object from single value.

## Declaration

```swift
init(floatLiteral value: Float)
```

## Parameters

- `value`: A value from 0.0 to 1.0 to use as the specular value for the material.

<a id="discussion"></a>

## Discussion

RealityKit automatically draws *specular highlights* for physically based materials using the values of various properties, primarily [roughness](../roughness-swift.property.md) and [metallic](../metallic-swift.property.md). Specular highlights are bright spots of reflected light that appear on shiny objects.

![An illustration showing a sphere and a cube with rounded corners.](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Specular-swift-struct-init%28floatLiteral:%29-1@2x.png)

While many real-world objects can be accurately and realistically simulated with just the core PBR properties, you can create additional realistic effects by augmenting the specular highlights.

This initializer creates a [PhysicallyBasedMaterial.Specular](../specular-swift.struct.md) object from a single value that applies to the entire material.

## See Also

### Creating a specular object

- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object from a single value or a texture.
- [init(\_:)](init%28__%29.md): Creates an object from a custom material’s specular property.
