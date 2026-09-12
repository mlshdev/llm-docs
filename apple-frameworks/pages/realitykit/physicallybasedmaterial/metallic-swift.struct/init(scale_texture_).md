> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(scale:texture:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(scale:texture:))

# init(scale:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an object from a color or texture.

## Declaration

```swift
init(scale: Float = 1.0, texture: PhysicallyBasedMaterial.Texture? = nil)
```

## Parameters

- `scale`: The reflectiveness value.
- `texture`: An optional image texture.

<a id="discussion"></a>

## Discussion

In PBR rendering, the `metallic` property represents the reflectiveness of an entity. This initializer creates a new object from a single value to describe the reflectiveness of the entire material. This initializer creates a new object from a single value or a grayscale image texture, or from both.

If you specify `texture`, RealityKit calculates the `metallic` for the entity by UV-mapping `texture` onto the entity and multiplying the value of each mapped pixel by `scale`. If you don’t specify `texture`, then RealityKit uses `scale` as the entire entity’s reflectiveness. If you provide a color image for `texture` rather than a grayscale image, RealityKit only uses the intensity of the image’s red channel.

![An illustration showing two spheres rendered in RealityKit. The](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Metallic-swift-struct-init%28scale:texture:%29-1@2x.png)

## See Also

### Creating a metallic object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an object from single value.
- [init(\_:)](init%28__%29.md): Creates a metallic object from a custom material’s metallic property.
