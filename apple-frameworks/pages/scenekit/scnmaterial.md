> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial](https://developer.apple.com/documentation/scenekit/scnmaterial)

# SCNMaterial (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A set of shading attributes that define the appearance of a geometry’s surface when rendered.

## Declaration

```swift
class SCNMaterial
```

<a id="overview"></a>

## Overview

When you create a material, you define a collection of visual attributes and their options, which you can then reuse for multiple geometries in a scene.

A material has several visual properties, each of which defines a different part of SceneKit’s lighting and shading process. Each visual property is an instance of the [SCNMaterialProperty](scnmaterialproperty.md) class that provides a solid color, texture, or other 2D content for that aspect of SceneKit’s rendering. The material’s [lightingModel](scnmaterial/lightingmodel-swift.property.md) property then determines the formula SceneKit uses to combine the visual properties with the lights in the scene to produce the final color for each pixel in the rendered scene. For more details on the rendering process, see [SCNMaterial.LightingModel](scnmaterial/lightingmodel-swift.struct.md).

You attach one or more materials to an instance of the [SCNGeometry](scngeometry.md) class using its [firstMaterial](scngeometry/firstmaterial.md) or [materials](scngeometry/materials.md) property. Multiple geometries can reference the same material. In this case, changing the attributes of the material changes the appearance of every geometry that uses it.

## Topics

### Creating a Material

- [name](scnmaterial/name.md): A name associated with the material.

### Choosing a Shading Model

- [lightingModel](scnmaterial/lightingmodel-swift.property.md): The lighting formula that SceneKit uses to render the material.
- [SCNMaterial.LightingModel](scnmaterial/lightingmodel-swift.struct.md): Constants specifying the lighting and shading algorithm to use for rendering a material.

### Visual Properties for Physically Based Shading

- [diffuse](scnmaterial/diffuse.md): An object that manages the material’s diffuse response to lighting.
- [metalness](scnmaterial/metalness.md): An object that provides color values to determine how metallic the material’s surface appears.
- [roughness](scnmaterial/roughness.md): An object that provides color values to determine the apparent smoothness of the surface.

### Visual Properties for Special Effects

- [normal](scnmaterial/normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](scnmaterial/displacement.md)
- [emission](scnmaterial/emission.md): An object that defines the color emitted by each point on a surface.
- [selfIllumination](scnmaterial/selfillumination.md): An object that provides color values representing the global illumination of the surface.
- [ambientOcclusion](scnmaterial/ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.

### Visual Properties for Basic Shading

- [diffuse](scnmaterial/diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](scnmaterial/ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](scnmaterial/specular.md): An object that manages the material’s specular response to lighting.
- [reflective](scnmaterial/reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](scnmaterial/multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](scnmaterial/transparent.md): An object that determines the opacity of each point in a material.
- [shininess](scnmaterial/shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](scnmaterial/fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.
- [locksAmbientWithDiffuse](scnmaterial/locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

### Managing Opacity and Blending

- [transparency](scnmaterial/transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](scnmaterial/transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.

### Customizing Rendered Appearance

- [isLitPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [isDoubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.
- [fillMode](scnmaterial/fillmode.md)
- [SCNFillMode](scnfillmode.md)

### Managing Render Targets

- [writesToDepthBuffer](scnmaterial/writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [readsFromDepthBuffer](scnmaterial/readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](scnmaterial/colorbufferwritemask.md)
- [SCNColorMask](scncolormask.md)

### Initializers

- [init(coder:)](scnmaterial/init%28coder_%29.md)

### Instance Properties

- [clearCoat](scnmaterial/clearcoat.md)
- [clearCoatNormal](scnmaterial/clearcoatnormal.md)
- [clearCoatRoughness](scnmaterial/clearcoatroughness.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNShadable](scnshadable.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNLight](scnlight.md): A light source that can be attached to a node to illuminate the scene.
- [SCNCamera](scncamera.md): A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.

# SCNMaterial (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of shading attributes that define the appearance of a geometry’s surface when rendered.

## Declaration

```objectivec
@interface SCNMaterial : NSObject
```

<a id="overview"></a>

## Overview

When you create a material, you define a collection of visual attributes and their options, which you can then reuse for multiple geometries in a scene.

A material has several visual properties, each of which defines a different part of SceneKit’s lighting and shading process. Each visual property is an instance of the [SCNMaterialProperty](scnmaterialproperty.md) class that provides a solid color, texture, or other 2D content for that aspect of SceneKit’s rendering. The material’s [lightingModelName](scnmaterial/lightingmodel-swift.property.md) property then determines the formula SceneKit uses to combine the visual properties with the lights in the scene to produce the final color for each pixel in the rendered scene. For more details on the rendering process, see [SCNLightingModel](scnmaterial/lightingmodel-swift.struct.md).

You attach one or more materials to an instance of the [SCNGeometry](scngeometry.md) class using its [firstMaterial](scngeometry/firstmaterial.md) or [materials](scngeometry/materials.md) property. Multiple geometries can reference the same material. In this case, changing the attributes of the material changes the appearance of every geometry that uses it.

## Topics

### Creating a Material

- [material](scnmaterial/material.md): Deprecated. Creates a new material object.
- [materialWithMDLMaterial:](scnmaterial/materialwithmdlmaterial_.md): Deprecated. Creates a material from the specified Model I/O material object.
- [name](scnmaterial/name.md): A name associated with the material.

### Choosing a Shading Model

- [lightingModelName](scnmaterial/lightingmodel-swift.property.md): The lighting formula that SceneKit uses to render the material.
- [SCNLightingModel](scnmaterial/lightingmodel-swift.struct.md): Constants specifying the lighting and shading algorithm to use for rendering a material.

### Visual Properties for Physically Based Shading

- [diffuse](scnmaterial/diffuse.md): An object that manages the material’s diffuse response to lighting.
- [metalness](scnmaterial/metalness.md): An object that provides color values to determine how metallic the material’s surface appears.
- [roughness](scnmaterial/roughness.md): An object that provides color values to determine the apparent smoothness of the surface.

### Visual Properties for Special Effects

- [normal](scnmaterial/normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](scnmaterial/displacement.md)
- [emission](scnmaterial/emission.md): An object that defines the color emitted by each point on a surface.
- [selfIllumination](scnmaterial/selfillumination.md): An object that provides color values representing the global illumination of the surface.
- [ambientOcclusion](scnmaterial/ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.

### Visual Properties for Basic Shading

- [diffuse](scnmaterial/diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](scnmaterial/ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](scnmaterial/specular.md): An object that manages the material’s specular response to lighting.
- [reflective](scnmaterial/reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](scnmaterial/multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](scnmaterial/transparent.md): An object that determines the opacity of each point in a material.
- [shininess](scnmaterial/shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](scnmaterial/fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.
- [locksAmbientWithDiffuse](scnmaterial/locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

### Managing Opacity and Blending

- [transparency](scnmaterial/transparency.md): The uniform transparency of the material. Animatable.
- [transparencyMode](scnmaterial/transparencymode.md): The mode SceneKit uses to calculate transparency for the material.
- [SCNTransparencyMode](scntransparencymode.md): The modes SceneKit uses to calculate the opacity of pixels rendered with a material, used by the [transparencyMode](scnmaterial/transparencymode.md) property.
- [blendMode](scnmaterial/blendmode.md): The mode that determines how pixel colors rendered using this material blend with other pixel colors in the rendering target.
- [SCNBlendMode](scnblendmode.md): Modes that describe how SceneKit blends source colors rendered using a material with destination colors already in a rendering target, used by the [blendMode](scnmaterial/blendmode.md) property.

### Customizing Rendered Appearance

- [litPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [doubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.
- [fillMode](scnmaterial/fillmode.md)
- [SCNFillMode](scnfillmode.md)

### Managing Render Targets

- [writesToDepthBuffer](scnmaterial/writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [readsFromDepthBuffer](scnmaterial/readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](scnmaterial/colorbufferwritemask.md)
- [SCNColorMask](scncolormask.md)

### Instance Properties

- [clearCoat](scnmaterial/clearcoat.md)
- [clearCoatNormal](scnmaterial/clearcoatnormal.md)
- [clearCoatRoughness](scnmaterial/clearcoatroughness.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNShadable](scnshadable.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNLight](scnlight.md): A light source that can be attached to a node to illuminate the scene.
- [SCNCamera](scncamera.md): A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.
