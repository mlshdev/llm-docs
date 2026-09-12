> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/lightingmodel-swift.struct](https://developer.apple.com/documentation/scenekit/scnmaterial/lightingmodel-swift.struct)

# SCNMaterial.LightingModel (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Constants specifying the lighting and shading algorithm to use for rendering a material.

## Declaration

```swift
struct LightingModel
```

<a id="Discussion"></a>

## Discussion

![](https://developer.apple.com/images/com.apple.scenekit/media-2929794@2x.png)

## Topics

### Type Properties

- [blinn](lightingmodel-swift.struct/blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [constant](lightingmodel-swift.struct/constant.md): Uniform shading that incorporates ambient lighting only.
- [lambert](lightingmodel-swift.struct/lambert.md): Shading that incorporates ambient and diffuse properties only.
- [phong](lightingmodel-swift.struct/phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [physicallyBased](lightingmodel-swift.struct/physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [shadowOnly](lightingmodel-swift.struct/shadowonly.md)

### Initializers

- [init(rawValue:)](lightingmodel-swift.struct/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Choosing a Shading Model

- [lightingModel](lightingmodel-swift.property.md): The lighting formula that SceneKit uses to render the material.

# SCNLightingModel (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants specifying the lighting and shading algorithm to use for rendering a material.

## Declaration

```objectivec
typedef NSString * SCNLightingModel;
```

<a id="Discussion"></a>

## Discussion

![](https://developer.apple.com/images/com.apple.scenekit/media-2929794@2x.png)

## Topics

### Type Properties

- [SCNLightingModelBlinn](lightingmodel-swift.struct/blinn.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Blinn-Phong formula.
- [SCNLightingModelConstant](lightingmodel-swift.struct/constant.md): Uniform shading that incorporates ambient lighting only.
- [SCNLightingModelLambert](lightingmodel-swift.struct/lambert.md): Shading that incorporates ambient and diffuse properties only.
- [SCNLightingModelPhong](lightingmodel-swift.struct/phong.md): Shading that incorporates ambient, diffuse, and specular properties, where specular highlights are calculated using the Phong formula.
- [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md): Shading based on a realistic abstraction of physical lights and materials.
- [SCNLightingModelShadowOnly](lightingmodel-swift.struct/shadowonly.md)

## See Also

### Choosing a Shading Model

- [lightingModelName](lightingmodel-swift.property.md): The lighting formula that SceneKit uses to render the material.
