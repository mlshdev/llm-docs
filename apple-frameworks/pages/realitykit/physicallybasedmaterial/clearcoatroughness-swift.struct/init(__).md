> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/clearcoatroughness-swift.struct/init(_:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/clearcoatroughness-swift.struct/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a clearcoat roughness object from a custom material’s clearcoat roughness property.

## Declaration

```swift
init(_ value: CustomMaterial.ClearcoatRoughness)
```

## Parameters

- `value`: The custom material’s clearcoat roughness property.

<a id="discussion"></a>

## Discussion

A clearcoat is a separate layer of transparent specular highlights used to simulate a clear transparent coating, like the paint on a car, or the surface of lacquered objects. When you enable clearcoat rendering for a material, RealityKit renders the clearcoat as a separate layer just above the surface of the entity. You can specify a clearcoat roughness value for the clearcoat to indicate how much the clearcoat scatters light that bounces off of it, which softens and spreads out the highlights.

This initializer creates an object that specifies the clearcoat roughness for a material that uses the [clearcoatRoughness](../../custommaterial/clearcoatroughness-swift.property.md) property from a [CustomMaterial](../../custommaterial.md) object.

## See Also

### Creating a clearcoat roughness object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates a clearcoat roughness object using a single value.
- [init(scale:texture:)](init%28scale_texture_%29.md): Creates a clearcoat roughness object using a single value or a texture.
