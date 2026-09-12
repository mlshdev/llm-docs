> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(floatliteral:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(floatliteral:))

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

- `value`: The reflectiveness value for the material.

<a id="discussion"></a>

## Discussion

In PBR rendering, the `metallic` property represents the reflectiveness of an entity. This initializer creates a new object from a single value to describe the reflectiveness of the entire material. A value of 0.0 creates a *dielectric* (or non-reflective) material. Values greater than 0.0 result in an increasingly *metallic* (or reflective) materials.

![An illustration showing two spheres rendered in RealityKit. The](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Metallic-swift-struct-init%28floatLiteral:%29-1@2x.png)

## See Also

### Creating a metallic object

- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object from a color or texture.
- [init(\_:)](init%28__%29.md): Creates a metallic object from a custom material’s metallic property.
