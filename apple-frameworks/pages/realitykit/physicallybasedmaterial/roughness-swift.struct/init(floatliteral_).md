> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/roughness-swift.struct/init(floatliteral:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/roughness-swift.struct/init(floatliteral:))

# init(floatLiteral:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an object from a single value.

## Declaration

```swift
init(floatLiteral value: Float)
```

## Parameters

- `value`: The roughness value.

<a id="discussion"></a>

## Discussion

The `roughness` property represents how much the surface of the entity scatters light it reflects. A material with a high roughness has a matte appearance, while one with a low roughness has a shiny appearance.

![An illustration showing three spheres with different amounts of](https://developer.apple.com/images/com.apple.RealityKit/PhysicallyBasedMaterial-Roughness-swift-struct-init%28floatLiteral:%29-1@2x.png)

Use this initializer to create an object to specify the amount of roughness using a single value that applies to the entire material.

## See Also

### Creating a roughness object

- [init(scale:texture:)](init%28scale_texture_%29.md): Creates a roughness object from a color or texture.
- [init(\_:)](init%28__%29.md): Creates a roughness object from a custom material’s roughness property.
